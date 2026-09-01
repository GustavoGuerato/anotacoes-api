// Router modular de /notas. Aqui só ficam as ROTAS — a lógica de verdade
// mora no controller (separação de responsabilidades).
//
// TODO: importe Router de "express"
// TODO: importe as funções do controller de ../controllers/notasController
//   (listarNotas, buscarNota, criarNota, atualizarNota, deletarNota)
//
// TODO: crie o router com Router()
//
// -- Dia 1 --
// TODO: router.get("/", listarNotas)
// TODO: router.get("/:id", buscarNota)
// TODO: router.post("/", criarNota)
//
// -- Dia 2 (CRUD completo) --
// TODO: router.put("/:id", atualizarNota)
// TODO: router.delete("/:id", deletarNota)
//
// -- Dia 3 (depois de criar o middleware de auth) --
// TODO: importe o middleware autenticar de ../middlewares/auth
// TODO: aplique autenticar antes das rotas acima (ou individualmente em cada
//   uma, ex: router.get("/", autenticar, listarNotas)) — assim só usuário
//   logado acessa, e cada um só vê as SUAS notas (filtrar por usuarioId
//   dentro do controller, usando req.usuarioId)
//
// TODO: exporte o router (export default router)
import { Router } from "express";

import {
  atualizarNota,
  buscarNotas,
  criarNota,
  deletarNota,
  listarNotas,
} from "../controllers/notasController";
import { autenticar } from "../middlewares/auth";

const router = Router();

router.get("/", autenticar, listarNotas);
router.get("/:id", autenticar, buscarNotas);
router.post("/", autenticar, criarNota);
router.put("/:id", autenticar, atualizarNota);
router.delete("/:id", autenticar, deletarNota);
export default router;
