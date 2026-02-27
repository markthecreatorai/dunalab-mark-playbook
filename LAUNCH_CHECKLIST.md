# LAUNCH CHECKLIST — Duna Lab / Como Contratar uma IA

## Feito
- [x] Projeto Next.js + Tailwind criado (`dunalab-mark-playbook`)
- [x] Landing page completa criada em `/`
- [x] Páginas `/obrigado`, `/suporte`, `/termos`, `/privacidade`
- [x] Captura de interesse com Supabase (API route `/api/lead`) implementada
- [x] CTA de compra + fallback para lista de espera implementados
- [x] COPY.md com copy final e emails criado
- [x] Playbook em markdown gerado (`playbook/Como-Contratar-uma-IA.md`)
- [x] PDF gerado (`public/Como-Contratar-uma-IA-Mark-Duna-Lab.pdf`)

## Validar antes de publicar
- [x] Configurar `SUPABASE_URL` e `SUPABASE_ANON_KEY` no Vercel
- [ ] Criar tabela `launch_leads` no Supabase (SQL precisa de execução final sem erro de editor)
- [x] Testar submit do formulário na página `/obrigado`
- [x] Configurar checkout real (Stripe Payment Link live)

## Entrega
- Landing: https://dunalab-mark-playbook.vercel.app
- Repo: https://github.com/markthecreatorai/dunalab-mark-playbook
- Checkout Stripe: https://buy.stripe.com/7sY7sMc5I7dDatbf1Ccs800
- PDF: `public/Como-Contratar-uma-IA-Mark-Duna-Lab.pdf`

## SQL recomendado (Supabase)
```sql
create table if not exists launch_leads (
  id bigint generated always as identity primary key,
  email text not null,
  source text default 'obrigado',
  created_at timestamptz default now()
);
```
