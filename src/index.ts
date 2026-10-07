import http from "http";
import app from "./app";

//cria o servidor http usando as regras do app
const server = http.createServer(app);

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.info("servidor estando na porta ", PORT));