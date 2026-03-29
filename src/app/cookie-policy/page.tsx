import Link from "next/link";

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-black text-gray-200 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Cookie Policy</h1>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            Questo sito non imposta cookie di profilazione, marketing o analytics
            proprietari.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">Cookie tecnici</h2>
            <p>
              Il funzionamento base del sito non richiede cookie applicativi gestiti
              direttamente da questo progetto.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">Servizi di terze parti</h2>
            <p>
              Al momento questa versione del sito non utilizza script esterni di
              tracciamento ne strumenti di analytics di terze parti.
            </p>
          </section>

          <p className="text-sm text-gray-500">
            Ultimo aggiornamento: 29 marzo 2026
          </p>
        </div>

        <div className="mt-10">
          <Link href="/" className="text-amber-300 hover:text-amber-200 transition-colors">
            Torna alla Home
          </Link>
        </div>
      </div>
    </main>
  );
}
