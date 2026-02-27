import Link from "next/link";

const chapters = [
  "Fundamentos: contratar vs usar IA",
  "Engenharia de identidade e limites",
  "Memória em 3 camadas",
  "Consolidação noturna e reindexação",
  "Ferramentas e trust ladder",
  "Delegação e subagentes",
  "Agentes de código em escala",
  "Segurança prática anti-injeção",
  "Rotina operacional",
  "Falhas comuns e correções",
  "Quick Start em 1 tarde",
  "Templates prontos para copiar",
];

const templates = [
  "SOUL.md",
  "IDENTITY.md",
  "MEMORY.md",
  "TRUST_LADDER.md",
  "HEARTBEAT.md",
  "CONSOLIDATION_CRON.md",
  "PRD_TEMPLATE.md",
  "DELEGATION_PROMPTS.md",
  "SECURITY_RULES.md",
];

export default function Home() {
  return (
    <main>
      <header className="container py-8 flex items-center justify-between">
        <div className="font-semibold">Duna Lab</div>
        <div className="text-sm text-orange-500">Online e Operando</div>
      </header>

      <section className="container py-16">
        <h1 className="text-5xl md:text-7xl font-semibold leading-tight max-w-4xl">
          Como Contratar uma IA
        </h1>
        <p className="mt-6 text-lg text-zinc-300 max-w-2xl">
          Saia do chat que esquece e coloque uma IA para operar como membro real do seu time — com
          memória, rotina, segurança e entrega.
        </p>
        <div className="mt-8 flex gap-3">
          <Link href="https://buy.stripe.com/7sY7sMc5I7dDatbf1Ccs800" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Comprar por R$97</Link>
          <a href="#conteudo" className="btn btn-muted">Ver o que tem dentro</a>
        </div>
      </section>

      <section className="container py-12 grid md:grid-cols-2 gap-6">
        <div className="card p-6">
          <h2 className="text-2xl font-semibold">O que é</h2>
          <p className="mt-3 text-zinc-300">Manual operacional para transformar IA em função de negócio com governança real.</p>
        </div>
        <div className="card p-6">
          <h2 className="text-2xl font-semibold">O que você recebe</h2>
          <ul className="mt-3 text-zinc-300 space-y-2 list-disc list-inside">
            <li>Método de contratação</li>
            <li>Memória em 3 camadas</li>
            <li>Delegação e subagentes</li>
            <li>Segurança anti prompt injection</li>
          </ul>
        </div>
      </section>

      <section id="conteudo" className="container py-12">
        <h2 className="text-3xl font-semibold">O que tem dentro</h2>
        <div className="grid md:grid-cols-2 gap-3 mt-5">
          {chapters.map((c) => <div key={c} className="card p-4 text-zinc-200">{c}</div>)}
        </div>
      </section>

      <section className="container py-12">
        <h2 className="text-3xl font-semibold">Templates</h2>
        <div className="grid md:grid-cols-3 gap-3 mt-5">
          {templates.map((t) => <div key={t} className="card p-4 text-zinc-100">{t}</div>)}
        </div>
      </section>

      <section className="container py-12">
        <h2 className="text-3xl font-semibold">Sobre o Mark</h2>
        <p className="mt-3 text-zinc-300 max-w-3xl">
          Sou operador. No fechamento do dia, eu quero sistemas que seguem funcionando enquanto eu durmo.
          Esse playbook existe para isso: menos hype, mais rotina operacional com controle.
        </p>
      </section>

      <section className="container py-12">
        <h2 className="text-3xl font-semibold">FAQ</h2>
        <div className="mt-5 space-y-3">
          {[
            ["Serve para quem não programa?", "Sim. O foco é operação e estrutura."],
            ["É só prompt?", "Não. Prompt sem processo não sustenta operação."],
            ["Quanto tempo para começar?", "Uma tarde para base funcional."],
            ["Tem risco?", "Sim. Por isso o playbook enfatiza mínimo privilégio e confirmações."],
          ].map(([q,a]) => (
            <div key={q} className="card p-4"><p className="font-medium">{q}</p><p className="text-zinc-300 mt-1">{a}</p></div>
          ))}
        </div>
      </section>

      <section className="container py-16">
        <div className="card p-8 text-center">
          <h2 className="text-3xl font-semibold">Coloque sua IA para operar hoje</h2>
          <p className="text-zinc-300 mt-2">Sem teatro. Sem promessa vazia. Só execução.</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="https://buy.stripe.com/7sY7sMc5I7dDatbf1Ccs800" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Comprar por R$97</Link>
            <Link href="/suporte" className="btn btn-muted">Falar com suporte</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

