-- CreateTable
CREATE TABLE "aluno" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "matricula" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "nascimento" DATETIME,
    "email" TEXT NOT NULL,
    "telefone" INTEGER,
    "endereco" TEXT
);

-- CreateTable
CREATE TABLE "curso" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "cargaHoraria" INTEGER NOT NULL,
    "descricao" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "funcionario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cargo" TEXT NOT NULL,
    "nascimento" DATETIME,
    "cpf" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "telefone" INTEGER,
    "endereco" TEXT
);

-- CreateTable
CREATE TABLE "matriculas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "cargaHoraria" INTEGER NOT NULL,
    "descricao" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "aluno_matricula_key" ON "aluno"("matricula");

-- CreateIndex
CREATE UNIQUE INDEX "aluno_cpf_key" ON "aluno"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "aluno_email_key" ON "aluno"("email");

-- CreateIndex
CREATE UNIQUE INDEX "funcionario_email_key" ON "funcionario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "funcionario_cpf_key" ON "funcionario"("cpf");
