// Ponto de entrada da aplicação. Aqui é onde a ORDEM dos middlewares importa.
//
// TODO: importe express
// TODO: importe logger de ./middlewares/logger
// TODO: importe errorHandler de ./middlewares/errorHandler
// TODO: importe notasRoutes de ./routes/notasRoutes
// TODO: importe authRoutes de ./routes/authRoutes  (so vai existir a partir do Dia 3)
//
// TODO: crie a app com express()
// TODO: defina PORT = 3000
//
// TODO: app.use(express.json())     <- middleware embutido, faz parse do JSON do body
// TODO: app.use(logger)             <- seu middleware global
// TODO: app.use("/notas", notasRoutes)   <- plugando o router modular
// TODO: app.use("/auth", authRoutes)     <- (Dia 3) login/registro
//
// TODO: crie uma rota GET "/" simples de teste (ex: {mensagem: "API no ar"})
//
// TODO: crie um middleware de tratamento de erros no final
//   (app.use(errorHandler))
//   repare que ele tem 4 parâmetros (err, req, res, next) — é isso que o
//   Express usa pra reconhecer que é um error handler. Ele SEMPRE vai
//   por último, depois de todas as rotas.
//
// TODO: app.listen(PORT, () => console.log(...))
import express, { Request, Response } from "express";
import { logger } from "./middlewares/logger";
import router from "./routes/notasRoutes";
const app = express();
const porta = 3030;
app.use(express.json());
app.use(logger);
app.use("/notas", router);
app.use();

app.get("/", (req: Request, res: Response) => {
  res.json({ mensagem: "API no ar" });
});
app.listen(porta, () => {
  console.log("ta funcionando");
});
