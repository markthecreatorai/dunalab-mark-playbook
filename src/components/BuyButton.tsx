"use client";

import { useMemo } from "react";

const BASE = "https://buy.stripe.com/7sY7sMc5I7dDatbf1Ccs800";

export default function BuyButton({ className = "btn btn-primary" }: { className?: string }) {
  const href = useMemo(() => {
    if (typeof window === "undefined") return BASE;
    const url = new URL(BASE);
    const params = new URLSearchParams(window.location.search);
    ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].forEach((k) => {
      const v = params.get(k);
      if (v) url.searchParams.set(k, v);
    });
    return url.toString();
  }, []);

  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      Comprar por R$97
    </a>
  );
}
