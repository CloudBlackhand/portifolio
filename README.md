## Portifólio leve com Next.js

Base de portifólio com foco em:

- carregamento rápido
- renderização estática
- privacidade (sem exposição desnecessária de dados/código)
- deploy gratuito na Vercel

## Executar localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev`: servidor local
- `npm run lint`: validação de código
- `npm run build`: build de produção (export estático)
- `npm run start`: sobe app em modo prod (quando aplicável)

## Estrutura principal

- `app/`: páginas (Início, Projetos, Detalhe, Contato)
- `data/projects.ts`: contrato de dados com 8 placeholders
- `public/project-thumbs/placeholder.svg`: miniatura padrão
- `next.config.ts`: `output: "export"` para site estático

## Checklist de privacidade

- Manter repositórios de produto privados no GitHub
- Priorizar descrição de contexto, solução e resultado (sem links de código no site)
- Não incluir chaves, URLs internas ou dados pessoais sensíveis

## Deploy na Vercel (gratuito)

1. Suba este projeto para um repositório GitHub.
2. Acesse [Vercel](https://vercel.com/new) e importe o repositório.
3. Framework detectado: Next.js (manter padrão).
4. Variáveis de ambiente: nenhuma obrigatória nesta fase.
5. Deploy.
6. Validar:
   - Home, `/projetos`, `/projetos/[slug]`, `/contato`
   - miniaturas renderizando
   - navegação mobile e desktop

Opcional depois: conectar domínio próprio.
