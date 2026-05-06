## Portifolio leve com Next.js

Base de portifolio com foco em:

- carregamento rapido
- renderizacao estatica
- privacidade (sem exposicao desnecessaria de dados/codigo)
- deploy gratuito na Vercel

## Executar localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev`: servidor local
- `npm run lint`: validacao de codigo
- `npm run build`: build de producao (export estatico)
- `npm run start`: sobe app em modo prod (quando aplicavel)

## Estrutura principal

- `app/`: paginas (Inicio, Projetos, Detalhe, Contato)
- `data/projects.ts`: contrato de dados com 8 placeholders
- `public/project-thumbs/placeholder.svg`: miniatura padrao
- `next.config.ts`: `output: "export"` para site estatico

## Checklist de privacidade

- Evitar publicar repositorios privados
- Priorizar descricao de contexto, solucao e resultado
- Nao incluir chaves, URLs internas ou dados pessoais sensiveis
- Para codigo: publicar apenas quando quiser e somente em projetos publicos

## Deploy na Vercel (gratuito)

1. Suba este projeto para um repositorio GitHub.
2. Acesse [Vercel](https://vercel.com/new) e importe o repositorio.
3. Framework detectado: Next.js (manter padrao).
4. Variaveis de ambiente: nenhuma obrigatoria nesta fase.
5. Deploy.
6. Validar:
   - Home, `/projetos`, `/projetos/[slug]`, `/contato`
   - miniaturas renderizando
   - navegacao mobile e desktop

Opcional depois: conectar dominio proprio.
