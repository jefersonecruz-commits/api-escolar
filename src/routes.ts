import { Router } from "express";

const routes = Router();

routes.get("/", (request, response) => {
  return response.status(200).json({
    message: "Hello World!"
  });
});

routes.get("/aluno/:id", (request, response) => {
  const  {nome ,cpf ,idade, media} = request.body;

  const status = media > 6 ? "aprovado" : "reprovado";
  
  return response.status(201).json({
    nome,
    cpf,
    idade,
    status,
  });

});

routes.put("/aluno/:id", (request, response) => {
  const alunos = [
    { nome: "maria"},
    { nome: "mario"},
    { nome: "mariana"},
    { nome: "mariano"},
  ];

  const { id }= request.params;
  const { nome }= request.body;

  const aluno = alunos[+id];
  aluno.nome = nome;

  return response.status(200).json((
  (aluno)
  ));
});

routes.delete("/alunos/:id", (request, response) => {
    const alunos = [
    { nome: "maria"},
    { nome: "mario"},
    { nome: "mariana"},
    { nome: "mariano"},
  ];

  const { id } = request.params;
  const novalista = alunos.splice(+id, 1);

  return response.status(200).json((
    (novalista)
  ));
});


export default routes;