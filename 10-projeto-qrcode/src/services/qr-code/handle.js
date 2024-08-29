import qrcode from "qrcode-terminal";
//www.npmjs.com/package/qrcode-terminal link do pacote qrcode-terminal pra ver a documentação
import chalk from "chalk";

async function handle(err, result) {
    if (err) {
        console.log("error on application");
        return;
    }
    const isSmall = result.type == 2;
    qrcode.generate(result.link, { small: isSmall }, (qrcode) => {
        console.log(chalk.green("QR Code gerado com sucesso:\n"));
        console.log(qrcode);
    });
}
export default handle;