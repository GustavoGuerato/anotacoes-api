# API de Anotações — projeto de estudo (Node/Express/JWT)

Esqueleto do projeto, com TODOs guiando o que fazer em cada dia.
Sem banco de dados por enquanto — os dados ficam em memória
(`src/data/db.ts`). O SQL entra mais pra frente no seu roadmap.

## Como rodar

```bash
npm install
npm run dev
```

## Roteiro

**Dia 1 (Sexta) — rotas + middlewares**
- `src/index.ts`
- `src/middlewares/logger.ts`
- `src/models/Nota.ts`
- `src/data/db.ts` (parte de notas)
- `src/routes/notasRoutes.ts` (GET, GET/:id, POST)
- `src/controllers/notasController.ts` (listarNotas, buscarNota, criarNota)

**Dia 2 (Sábado) — CRUD completo + validação**
- `src/routes/notasRoutes.ts` (PUT, DELETE)
- `src/controllers/notasController.ts` (atualizarNota, deletarNota)
- reforçar validação básica em `criarNota`/`atualizarNota`

**Dia 3 (Segunda) — JWT**
- `src/models/Usuario.ts`
- `src/data/db.ts` (parte de usuários)
- `src/controllers/authController.ts` (registrar, login)
- `src/routes/authRoutes.ts`
- `src/middlewares/auth.ts`
- plugar `autenticar` nas rotas de notas + filtrar por `usuarioId`

**Dia 4 (Terça) — refatoração**
- `src/middlewares/errorHandler.ts`
- revisar organização de pastas (já vem pronta aqui: routes/controllers/middlewares/models/data)
- testar o fluxo ponta a ponta: registro → login → criar nota → listar só as suas → editar → deletar

## Testando

Use o Thunder Client, Insomnia, Postman ou `curl` pra bater nas rotas.
Depois do login, lembre de mandar o token no header:

```
Authorization: Bearer <token recebido no login>
```
