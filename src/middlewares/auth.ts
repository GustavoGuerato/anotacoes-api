// Middleware que protege rotas — só deixa passar quem tiver um token JWT válido.
//
// TODO: importe Request, Response, NextFunction de "express"
// TODO: importe jwt de "jsonwebtoken"
// TODO: importe (ou repita) a mesma JWT_SECRET usada no authController
//   (dica pro Dia 4: mova essa constante pra um arquivo compartilhado,
//   tipo src/config.ts, pra não duplicar em dois lugares)
//
// DICA de tipagem: o Express não sabe por padrão que req pode ter um
// `usuarioId`. Você pode estender o tipo Request (declaration merging)
// ou, mais simples pra começar, usar (req as any).usuarioId.
//
// TODO: export function autenticar(req: Request, res: Response, next: NextFunction)
//   - pega o header Authorization (req.headers.authorization)
//   - formato esperado: "Bearer <token>" — se não vier, 401 "token não enviado"
//   - separe o token do prefixo "Bearer "
//   - tente verificar com jwt.verify(token, JWT_SECRET)
//     - se der erro (token inválido/expirado), responda 401 "token inválido"
//     - se der certo, o payload decodificado tem o usuarioId que você
//       colocou no jwt.sign lá no login — salve isso em req.usuarioId
//   - chame next() pra deixar a requisição continuar pra rota de verdade
