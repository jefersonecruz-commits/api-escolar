import express from "express";
import cors from "cors";
import routes from "./routes";

//inciailiza o express
const app = express();

//define regras do servidor 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(routes);

export default app;
