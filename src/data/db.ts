// "Banco de dados" em memória — só um array, por enquanto.
// Isso vai existir até você chegar na parte de SQL do roadmap (Fase 2,
// semana 2 em diante). Por ora, os dados somem toda vez que reiniciar o servidor.
//
// TODO: importe a interface Nota de ../models/Nota
//
// TODO: crie e exporte um array `notas: Nota[]` começando vazio ([])
//
// TODO: crie e exporte uma variável simples de controle de id
//   (ex: let proximoId = 1) e uma função pra gerar o próximo id,
//   incrementando a cada nota criada. Isso simula um auto-increment de banco.

// -- Dia 3 --
// TODO: importe a interface Usuario de ../models/Usuario
// TODO: crie e exporte um array `usuarios: Usuario[]` começando vazio
// TODO: crie um controle de id separado pra usuários (mesma lógica de cima)
import type { Nota } from "../models/Nota";
import type { Usuario } from "../models/Usuario";

export const notas: Nota[] = [];
let proximoId = 1;
export function gerarProximoId(): number {
  return proximoId++;
}
export const usuarios: Usuario[] = [];
let proximoIdUsuario = 1;
export function gerarProximoIdUsuario(): number {
  return proximoIdUsuario++;
}
