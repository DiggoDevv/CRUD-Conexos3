import express from "express";
import routes from "./routes/conexosRoutes.js"
import cors from "cors";

// const corsOptions = {
  //   origin: 'http://127.0.0.1:5501', // Origem permitida (seu frontend)
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
  //   credentials: true, // Permitir credenciais (por exemplo, cookies)
  // };

const app = express();

app.use(cors())

//primeiro informa como vai receber os dados na api
app.use(express.json());
//para depois passar quem vai manipula-los
app.use(routes);
// app.use("/api", routes);
export default app;