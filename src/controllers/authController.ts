// Lógica de registro e login. Aqui é onde bcrypt e jsonwebtoken entram em ação.
//
// TODO: importe Request, Response de "express"
// TODO: importe bcrypt de "bcrypt"
// TODO: importe jwt de "jsonwebtoken"
// TODO: importe usuarios e o gerador de id de ../data/db
//
// TODO: defina uma constante JWT_SECRET (por enquanto, uma string fixa
//   direto no código só pra estudo — depois vale mover pra variável de
//   ambiente com dotenv, mas isso é assunto de outra fase)
//
// TODO: export async function registrar(req: Request, res: Response)
//   - pega email e senha de req.body
//   - validação simples: email e senha obrigatórios
//   - confere se já existe usuário com esse email (senão, 400 "email já cadastrado")
//   - gera o hash da senha: await bcrypt.hash(senha, 10)
//   - cria o usuário e dá push no array `usuarios`
//   - responde 201 com { id, email } (NUNCA devolva senhaHash)
//
// TODO: export async function login(req: Request, res: Response)
//   - pega email e senha de req.body
//   - procura o usuário pelo email; se não achar, 401 "credenciais inválidas"
//   - compara a senha: await bcrypt.compare(senha, usuario.senhaHash)
//   - se não bater, 401 "credenciais inválidas"
//   - se bater, gera o token: jwt.sign({ usuarioId: usuario.id }, JWT_SECRET, { expiresIn: "1h" })
//   - responde com { token }
import bcrypt from "bcrypt";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { gerarProximoIdUsuario, usuarios } from "../data/db";
const JWT_SECRET = "7f4a9c2e8b1d6f3a5e9c0b7d2a4f8e1c";
export async function registrar(req: Request, res: Response) {
  const { email, senha } = req.body;
  if (!email || !senha) {
    return res.status(400).json({ message: "Campos Obrigatorios" });
  }

  if (usuarios.some((usuario) => usuario.email === email)) {
    return res.status(400).json({ message: "Email Ja cadastrado" });
  }
  const senhaHash = await bcrypt.hash(senha, 10);
  const usuario = { id: gerarProximoIdUsuario(), email, senhaHash };
  usuarios.push(usuario);
  return res.status(201).json({ id: usuario.id, email: usuario.email });
}
export async function login(req: Request, res: Response) {
  const { email, senha } = req.body;
  const usuario = usuarios.find((usuario) => usuario.email === email);

  if (!usuario) {
    return res.status(401).json({
      message: "Credenciais inválidas",
    });
  }
  const senhaValida = await bcrypt.compare(senha, usuario.senhaHash);
  if (!senhaValida) {
    return res.status(401).json({ message: "Credenciais Invalidas" });
  }
  const token = jwt.sign({ usuarioId: usuario.id }, JWT_SECRET, {
    expiresIn: "1h",
  });
  return res.status(200).json({
    token,
  });
}
