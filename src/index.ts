import express, { Request, Response } from "express";

import { logger } from "./middlewares/logger";
import router from "./routes/notasRoutes";

const app = express();
const porta = 3030;

app.use(express.json());

app.use(logger);

app.use("/notas", router);

app.get("/", (req: Request, res: Response) => {
  res.json({ mensagem: "API no ar" });
});

app.use((req: Request, res: Response) => {
  res.status(404).json({
    error: "Rota não encontrada",
  });
});

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});
