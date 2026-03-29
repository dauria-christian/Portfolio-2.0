import { getStore as getNetlifyStore } from "@netlify/blobs";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

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

const netlifyStoreName = "portfolio-views";
const stateKey = "views-state";

const getSharedStore = () => {
  try {
    return getNetlifyStore(netlifyStoreName);
  } catch {
    return null;
  }
};

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

const sanitizeTotal = (value: unknown) => {
  if (!value || typeof value !== "object") {
    return 0;
  }

  const typedValue = value as { total?: unknown };
  const total = Number(typedValue.total);
  return Number.isFinite(total) && total >= 0 ? total : 0;
};

const getTotal = async () => {
  const sharedStore = getSharedStore();

  if (!sharedStore) {
    return getStore().state.total;
  }

  const rawState = await sharedStore.get(stateKey, { type: "json" });
  return sanitizeTotal(rawState);
};

const toSseMessage = (payload: { total: number }) => `data: ${JSON.stringify(payload)}\n\n`;

export async function GET(request: Request) {
  const encoder = new TextEncoder();

  const stream = new ReadableStream<Uint8Array>({
    start(controller) {
      let isClosed = false;
      let intervalId: ReturnType<typeof setInterval> | null = null;
      let lastSentTotal = -1;

      const closeStream = () => {
        if (isClosed) {
          return;
        }

        isClosed = true;

        if (intervalId) {
          clearInterval(intervalId);
        }

        controller.close();
      };

      const publish = async () => {
        if (isClosed) {
          return;
        }

        try {
          const total = await getTotal();

          if (total !== lastSentTotal) {
            lastSentTotal = total;
            controller.enqueue(encoder.encode(toSseMessage({ total })));
          }
        } catch {
          // Ignore read errors and keep stream alive for next tick.
        }
      };

      publish();
      intervalId = setInterval(publish, 2_000);

      request.signal.addEventListener("abort", closeStream);
    },
    cancel() {
      // Connection closed by client.
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
    },
  });
}
