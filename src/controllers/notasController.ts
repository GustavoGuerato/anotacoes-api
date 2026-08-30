// Aqui mora a lógica de cada rota de /notas. O router só chama essas funções.
//
// TODO: importe Request, Response de "express"
// TODO: importe notas e o gerador de id de ../data/db
// TODO: importe a interface Nota de ../models/Nota
//
// -- Dia 1 --
//
// TODO: export function listarNotas(req: Request, res: Response)
//   - responde com res.json(notas) (por enquanto, todas as notas)
//
// TODO: export function buscarNota(req: Request, res: Response)
//   - pega o id da rota (req.params.id) — lembre que vem como string,
//     converta com Number(...)
//   - procura a nota no array com .find(...)
//   - se não achar, responde 404 com uma mensagem de erro
//   - se achar, responde com res.json(nota)
//
// TODO: export function criarNota(req: Request, res: Response)
//   - pega titulo e conteudo de req.body
//   - validação simples: se título ou conteúdo vierem vazios,
//     responde 400 com mensagem de erro (isso conta como "validação básica"
//     do Dia 2, mas pode já deixar o esqueleto pronto aqui)
//   - monta o objeto da nova nota (id gerado, criadoEm/atualizadoEm = agora)
//   - dá push no array `notas`
//   - responde 201 com a nota criada
//
// -- Dia 2 --
//
// TODO: export function atualizarNota(req: Request, res: Response)
//   - acha a nota pelo id (igual buscarNota)
//   - se não existir, 404
//   - atualiza titulo/conteudo com o que veio em req.body
//   - atualiza atualizadoEm
//   - responde com a nota atualizada
//
// TODO: export function deletarNota(req: Request, res: Response)
//   - acha o ÍNDICE da nota no array (.findIndex)
//   - se não existir, 404
//   - remove do array (.splice)
//   - responde 204 (sem conteúdo)
//
// -- Dia 3 --
// DICA: quando o middleware de auth existir, req vai ter um campo extra
// (ex: req.usuarioId) com o id de quem está logado. A partir daí:
//   - criarNota deve salvar usuarioId = req.usuarioId na nota
//   - listarNotas/buscarNota/atualizarNota/deletarNota devem filtrar/checar
//     se a nota pertence a req.usuarioId antes de responder
import { Request, Response } from "express";
import { gerarProximoId, notas } from "../data/db";

export function listarNotas(req: Request, res: Response) {
  return res.json(notas);
}
export function buscarNotas(req: Request, res: Response) {
  const nota = notas.find((nota) => nota.id === Number(req.params.id));
  if (!nota) {
    return res.status(404).json({ message: "Nao foi localizado nenhum Id" });
  }
  return nota;
}
export function criarNota(req: Request, res: Response) {
  const { titulo, conteudo } = req.body;
  if (!titulo || !conteudo) {
    return res.status(400).json({ message: "titulo ou conteudo vazio" });
  }
  const novaNota = {
    id: gerarProximoId(),
    titulo,
    conteudo,
    usuarioId: 0,
    criadoEm: new Date().toISOString(),
    atualizadoEm: new Date().toISOString(),
  };
  notas.push(novaNota);
}
export function atualizarNota(req: Request, res: Response) {
  const id = Number(req.params.id);
  if (!id) {
    return res.status(404).json({ error: "nao foi localizado o ID" });
  }
  if (Number.isNaN(id)) {
    return res.status(404).json({ message: "ID invalido" });
  }
  const nota = notas.find((nota) => nota.id === id);
  if (!nota) {
    return res.status(404).json({ error: "Nota não encontrada" });
  }
  const { titulo, conteudo } = req.body;
  if (titulo !== undefined) {
    nota.titulo = titulo;
  }
  if (conteudo !== undefined) {
    nota.conteudo = conteudo;
  }
  nota.atualizadoEm = new Date().toISOString();
  return res.status(200).json(nota);
}
export function deletarNota(req: Request, res: Response) {
  const id = Number(req.params.id);
  if (!id) {
    return res.status(400).json({ message: "Nao foi localizado o id" });
  }
  const index = notas.findIndex((nota) => nota.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Nota não encontrada" });
  }
  notas.splice(index, 1);

  return res.status(204).send();
}
