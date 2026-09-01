// Router de /auth. Só duas rotas: registro e login.
//
// TODO: importe Router de "express"
// TODO: importe registrar e login de ../controllers/authController
//
// TODO: crie o router com Router()
//
// TODO: router.post("/registro", registrar)
// TODO: router.post("/login", login)
//
// TODO: exporte o router (export default router)
import { Router } from "express";
import { login, registrar } from "../controllers/authController";
const router = Router();
router.post("/registro", registrar);
router.post("login", login);

export default router;
