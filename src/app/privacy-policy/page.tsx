import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-black text-gray-200 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            Questo sito portfolio non crea account utente e non salva dati personali
            su database proprietari.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">Quali dati vengono trattati</h2>
            <p>
              Il modulo contatti apre il tuo client email con un messaggio precompilato
              (mailto). I dati inseriti (nome, email, messaggio) non vengono salvati dal
              sito: vengono inviati solo se confermi l&apos;invio nella tua applicazione email.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">Servizi terzi</h2>
            <p>
              Al momento il sito non usa servizi esterni di analytics. Il contatore
              visualizzazioni in hero e gestito localmente dal browser tramite
              localStorage e non identifica l&apos;utente in modo univoco.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">Cookie e tracciamento</h2>
            <p>
              Il sito non utilizza cookie di profilazione o analytics proprietari. Per i
              dettagli sui cookie consulta la pagina Cookie Policy.
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
