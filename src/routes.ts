import { Router } from "express";
import alunoController from "./controllers/aluno";
import cursoController from "./controllers/curso";
import matriculaController from "./controllers/matricula";
import funcionarioController from "./controllers/funcionario";
<<<<<<< HEAD
import { authentication } from "./middlewares/authentication";
=======
>>>>>>> 46495e4afb1945cc22893a60fa8f251fa628d214

// Inicializa o router
const routes = Router();

// Rota inicial para verificar se o servidor está rodando
routes.get("/", (request, response) => {
  return response.status(200).json({ message: "Hello World!" });
});

// Rotas de alunos
routes.get("/alunos", alunoController.list);
routes.get("/alunos/:id", alunoController.getById);
routes.post("/alunos", alunoController.create);
routes.put("/alunos/:id", alunoController.update);
routes.delete("/alunos/:id", alunoController.delete);

// Rotas de cursos
routes.get("/cursos", cursoController.list);
routes.get("/cursos/:id", cursoController.getById);
routes.post("/cursos", cursoController.create);
routes.put("/cursos/:id", cursoController.update);
routes.delete("/cursos/:id", cursoController.delete);

<<<<<<< HEAD
routes.post("/matriculas/:id", authentication, matriculaController.create);
routes.get("/matriculas/:id", authentication, matriculaController.delete);
=======
routes.post("/matriculas/:id", matriculaController.create);
routes.get("/matriculas/:id", matriculaController.delete);
>>>>>>> 46495e4afb1945cc22893a60fa8f251fa628d214

routes.post("/login", funcionarioController.login);
export default routes;