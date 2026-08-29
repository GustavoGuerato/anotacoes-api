// Error handler centralizado. Antes (Dias 1-3) você deve ter tratado erros
// direto em cada controller (res.status(400/404/401)...). No Dia 4, a ideia
// é centralizar os erros "inesperados" (ex: exceptions não tratadas) aqui,
// pra não deixar a API quebrar sem resposta nenhuma pro cliente.
//
// TODO: importe Request, Response, NextFunction de "express"
//
// TODO: crie e exporte errorHandler(err, req, res, next)
//   - repare: 4 parâmetros, mesmo que `next` não seja usado — é isso que
//     o Express usa pra reconhecer que essa função é um error handler
//   - dê um console.error(err) pra você ver o erro no terminal durante o dev
//   - responda res.status(500).json({ erro: "algo deu errado no servidor" })
//
// DICA (Dia 4): pra esse handler ser realmente útil, os controllers
// deveriam chamar next(err) em vez de deixar uma exception estourar sem
// tratamento — mas isso é refinamento opcional, não obrigatório pro MVP.
