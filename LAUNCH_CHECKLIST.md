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
- [x] Criar tabela `launch_leads` no Supabase
- [x] Testar submit do formulário na página `/obrigado`
- [x] Configurar checkout real (Stripe Payment Link live)
- [x] Criar endpoint webhook Stripe (`/api/stripe/webhook`)
- [x] Configurar `STRIPE_SECRET_KEY` e `STRIPE_WEBHOOK_SECRET` na Vercel
- [x] Criar tabela `sales` no Supabase (schema alinhado com webhook)
- [ ] Validar registro de compra real em `sales` (pendente 1 transação de teste)

## Entrega
- Landing: https://dunalab-mark-playbook.vercel.app
- Repo: https://github.com/markthecreatorai/dunalab-mark-playbook
- Checkout Stripe: https://buy.stripe.com/7sY7sMc5I7dDatbf1Ccs800
- PDF: `public/Como-Contratar-uma-IA-Mark-Duna-Lab.pdf`

## Versão do PDF entregue
- Arquivo: `Como-Contratar-uma-IA-Mark-Duna-Lab.pdf`
- Data de atualização: 2026-02-27
- SHA256: `96F8BC2DE797FA626F436489359D96EEDD938D4D40E78790F0F95B2AF73834D0`

## SQL recomendado (Supabase)
```sql
create table if not exists launch_leads (
  id bigint generated always as identity primary key,
  email text not null,
  source text default 'obrigado',
  created_at timestamptz default now()
);
```
