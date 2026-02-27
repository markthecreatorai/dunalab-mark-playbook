"use client";
import { useState } from "react";

export default function ObrigadoPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Enviando...");
    const res = await fetch('/api/lead', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({email})});
    setStatus(res.ok ? "Recebido. Você está na lista prioritária." : "Não foi possível enviar agora.");
  };

  return (
    <main className="container py-20">
      <h1 className="text-4xl font-semibold">Obrigado</h1>
      <p className="mt-3 text-zinc-300 max-w-2xl">Checkout em ativação. Deixe seu email para receber o link de compra e entrega assim que liberar.</p>
      <form onSubmit={submit} className="mt-8 max-w-md space-y-3">
        <input className="w-full rounded-lg bg-zinc-900 border border-zinc-700 p-3" type="email" required placeholder="seu@email.com" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <button className="btn btn-primary" type="submit">Entrar na lista</button>
      </form>
      {status && <p className="mt-3 text-sm text-zinc-300">{status}</p>}
    </main>
  );
}
