import { prisma } from "../config/prisma";
import bcrypt from "bcrypt";

async function main() {
    const funcionario = await prisma.funcionario.create({
        data: {
        nome: "jef",
        email: "jef@email.com",
        cargo: "ADMIN",
        cpf: "123456778912",
        senha: bcrypt.hashSync("123456", +process.env.BCRYPT_ROUNDS!),
        },
    });

    console.info("funcionario criado:", funcionario);
}

main()
.catch((e) => {
    console.error(e);
    process.exit(1);
})
.finally(async () => {
    await prisma.$disconnect();
});