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
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
const JWT_SECRET = "7f4a9c2e8b1d6f3a5e9c0b7d2a4f8e1c";

export function autenticar(req: Request, res: Response, next: NextFunction) {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.status(401).json({ message: "Token não enviado" });
    next();
  }
  const [tipo, token] = authorization.split(" ");
  if (tipo !== "Bearer" || !token) {
    return res.status(401).json({
      message: "Token inválido",
    });
  }
  try {
    const payload = jwt.verify(token, JWT_SECRET) as { usuarioId: number };
    (req as any).usuarioId = payload.usuarioId;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Token Invalido" });
  }
}
