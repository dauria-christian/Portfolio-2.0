import { NextResponse } from "next/server";
import { getStore as getNetlifyStore } from "@netlify/blobs";

type InMemoryViewsStore = {
  state: ViewsState;
};

type ViewsState = {
  total: number;
  sessions: Record<string, true>;
};

declare global {
  // eslint-disable-next-line no-var
  var __portfolioViewsStore: InMemoryViewsStore | undefined;
}

const getStore = () => {
  if (!globalThis.__portfolioViewsStore) {
    globalThis.__portfolioViewsStore = {
      state: {
        total: 0,
        sessions: {},
      },
    };
  }

  return globalThis.__portfolioViewsStore;
};

const netlifyStoreName = "portfolio-views";
const stateKey = "views-state";

const getSharedStore = () => {
  try {
    return getNetlifyStore(netlifyStoreName);
  } catch {
    return null;
  }
};

const sanitizeState = (value: unknown): ViewsState => {
  if (!value || typeof value !== "object") {
    return { total: 0, sessions: {} };
  }

  const typedValue = value as { total?: unknown; sessions?: unknown };
  const total = Number(typedValue.total);
  const safeTotal = Number.isFinite(total) && total >= 0 ? total : 0;

  const sessionsRaw = typedValue.sessions;
  const safeSessions: Record<string, true> = {};

  if (sessionsRaw && typeof sessionsRaw === "object") {
    for (const [sessionId, marker] of Object.entries(sessionsRaw as Record<string, unknown>)) {
      if (marker) {
        safeSessions[sessionId] = true;
      }
    }
  }

  return {
    total: safeTotal,
    sessions: safeSessions,
  };
};

const getStateFromSharedStore = async () => {
  const sharedStore = getSharedStore();

  if (!sharedStore) {
    return getStore().state;
  }

  const rawState = await sharedStore.get(stateKey, { type: "json" });
  return sanitizeState(rawState);
};

const saveStateToSharedStore = async (state: ViewsState) => {
  const sharedStore = getSharedStore();

  if (!sharedStore) {
    getStore().state = state;
    return;
  }

  await sharedStore.setJSON(stateKey, state);
};

const updateState = async (sessionId: string) => {
  const state = await getStateFromSharedStore();

  const hasVisited = sessionId in state.sessions;

  if (!hasVisited) {
    state.total += 1;
    state.sessions[sessionId] = true;
  }

  await saveStateToSharedStore(state);

  return { total: state.total };
};

export async function GET() {
  const state = await getStateFromSharedStore();
  return NextResponse.json({ total: state.total });
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as { sessionId?: string };
    const sessionId = payload.sessionId?.trim();

    if (!sessionId) {
      return NextResponse.json(
        { error: "sessionId is required" },
        { status: 400 },
      );
    }

    const data = await updateState(sessionId);

    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}
