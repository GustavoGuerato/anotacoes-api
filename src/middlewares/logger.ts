// Middleware global de log. Roda em TODA requisição, antes de chegar nas rotas.
//
// TODO: importe os tipos Request, Response, NextFunction de "express"
//
// TODO: crie e exporte uma função logger(req, res, next)
//   - deve imprimir no console algo como: [MÉTODO] rota - horário
//     ex: console.log(`[${req.method}] ${req.url} - ${new Date().toISOString()}`)
//   - no final, SEMPRE chame next() — se você esquecer disso,
//     a requisição fica "presa" e nunca chega na rota de verdade
import { Request, Response, NextFunction } from "express";
export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`[${req.method}] ${req.url} - ${new Date().toISOString()}`);
  next();
}
