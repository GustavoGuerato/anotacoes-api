// Definição do formato de uma Anotação (só tipos, sem lógica).
//
// TODO: crie e exporte uma interface Nota com:
//   - id: number
//   - titulo: string
//   - conteudo: string
//   - usuarioId: number       <- dono da nota (vai ser usado a partir do Dia 3)
//   - criadoEm: string        <- ex: new Date().toISOString()
//   - atualizadoEm: string
//
// DICA (Dia 2): pra criação/edição, você vai precisar de tipos "parciais"
// (ex: um tipo NovaNota sem id/criadoEm/atualizadoEm, porque esses campos
// são gerados pelo servidor, não enviados pelo cliente). Pode usar
// Omit<Nota, "id" | "criadoEm" | "atualizadoEm"> quando chegar a hora.
export interface Nota {
  id: number;
  titulo: string;
  conteudo: string;
  usuarioId: number;
  criadoEm: string;
  atualizadoEm: string;
}
