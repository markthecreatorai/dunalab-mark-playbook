"use client";
import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function ObrigadoPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const searchParams = useSearchParams();
  const paid = searchParams.get("paid") === "1";

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Enviando...");
    const res = await fetch('/api/lead', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({email})});
    setStatus(res.ok ? "Recebido. Você está na lista prioritária." : "Não foi possível enviar agora.");
  };

  return (
    <main className="container py-20">
      <h1 className="text-4xl font-semibold">{paid ? "Pagamento confirmado" : "Obrigado"}</h1>

      {paid ? (
        <div className="mt-6 card p-6 max-w-2xl">
          <p className="text-zinc-200">Seu acesso está liberado.</p>
          <p className="mt-2 text-zinc-400">Baixe agora o playbook:</p>
          <Link className="btn btn-primary mt-4" href="/Como-Contratar-uma-IA-Mark-Duna-Lab.pdf" target="_blank">
            Baixar PDF
          </Link>
          <p className="mt-4 text-sm text-zinc-500">Se tiver qualquer problema, use /suporte.</p>
        </div>
      ) : (
        <>
          <p className="mt-3 text-zinc-300 max-w-2xl">Checkout em ativação. Deixe seu email para receber o link de compra e entrega assim que liberar.</p>
          <form onSubmit={submit} className="mt-8 max-w-md space-y-3">
            <input className="w-full rounded-lg bg-zinc-900 border border-zinc-700 p-3" type="email" required placeholder="seu@email.com" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <button className="btn btn-primary" type="submit">Entrar na lista</button>
          </form>
          {status && <p className="mt-3 text-sm text-zinc-300">{status}</p>}
        </>
      )}
    </main>
  );
}
