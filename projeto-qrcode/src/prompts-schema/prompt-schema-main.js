import chalk from "chalk";
//www.npmjs.com/package/chalk link do pacote chalk pra ver a documentação
const promptSchemaMain = [
    {
        name: "select",
        description: chalk.yellow.bold("Escolha a ferramenta(1- QRCODE ou (2- PASSWORD"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha apenas entre 1 e 2"),
        required: true,
    }
]

export default promptSchemaMain;