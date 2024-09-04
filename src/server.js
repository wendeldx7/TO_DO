import "dotenv/config";
import express from "express";
import cors from "cors";

//* importar conexão do banco
import conn from "./config/conn.js";

//*Importar os modelos
import Tarefa from "./models/tarefaModel.js";

//*IMPORTAÇÃO DAS ROTAS
import tarefaRouter from "./routes/tarefaRouter.js";

const PORT = process.env.PORT || 3333;
const app = express();

//* 3 middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//*conexão com o banco
conn
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor on PORT: ${PORT}`);
    });
  })
  .catch((error) => console.error(error));

//*utilizar rotas
app.use("/tarefas", tarefaRouter);

app.use((request, response) => {
  response.status(404).json({ messaSge: "Rota não encontrada" });
});

//* dentro do server não faz lógica, não recebe nota nem nada
//* primeiro cria a rota, dps o controlador
