import Link from "next/link";

const kpis = [
  { label: "Receita (30d)", value: "R$ 0", note: "Atualize conforme Stripe" },
  { label: "Vendas (30d)", value: "0", note: "Checkout ativo" },
  { label: "Deploys", value: "Online", note: "Vercel em produção" },
  { label: "Produto", value: "Playbook IA", note: "R$97" },
];

const roadmap = [
  { status: "done", item: "Landing publicada na Vercel" },
  { status: "done", item: "Checkout Stripe live" },
  { status: "done", item: "Entrega pós-pagamento em /obrigado" },
  { status: "next", item: "Webhook de confirmação + log de vendas" },
  { status: "next", item: "Painel com métricas reais Stripe + Supabase" },
];

export default function BuildInPublicPage() {
  return (
    <main className="container py-16">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-4xl font-semibold">Duna Lab — Build in Public</h1>
          <p className="mt-2 text-zinc-300 max-w-2xl">
            Transparência operacional: o que está no ar, o que está gerando receita e o que entra no próximo ciclo.
          </p>
        </div>
        <Link href="/" className="btn btn-muted">Voltar</Link>
      </div>

      <section className="grid md:grid-cols-4 gap-3 mt-10">
        {kpis.map((k) => (
          <div key={k.label} className="card p-5">
            <p className="text-sm text-zinc-400">{k.label}</p>
            <p className="text-2xl mt-1 font-semibold">{k.value}</p>
            <p className="text-xs text-zinc-500 mt-2">{k.note}</p>
          </div>
        ))}
      </section>

      <section className="mt-10 grid md:grid-cols-2 gap-4">
        <div className="card p-6">
          <h2 className="text-2xl font-semibold">Roadmap público</h2>
          <ul className="mt-4 space-y-2 text-zinc-300">
            {roadmap.map((r) => (
              <li key={r.item}>
                <span className={r.status === "done" ? "text-green-400" : "text-orange-400"}>
                  {r.status === "done" ? "●" : "○"}
                </span>{" "}
                {r.item}
              </li>
            ))}
          </ul>
        </div>

        <div className="card p-6">
          <h2 className="text-2xl font-semibold">Ecossistema Duna Lab</h2>
          <ul className="mt-4 space-y-2 text-zinc-300 list-disc list-inside">
            <li>Site/landing: Vercel + GitHub</li>
            <li>Checkout: Stripe</li>
            <li>Leads: Supabase</li>
            <li>Conteúdo: PDF/Playbook</li>
          </ul>
          <div className="mt-5 flex gap-3 flex-wrap">
            <a href="https://dunalab-mark-playbook.vercel.app" className="btn btn-muted" target="_blank" rel="noopener noreferrer">Site</a>
            <a href="https://github.com/markthecreatorai/dunalab-mark-playbook" className="btn btn-muted" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://buy.stripe.com/7sY7sMc5I7dDatbf1Ccs800" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Checkout</a>
          </div>
        </div>
      </section>
    </main>
  );
}
