async function getBaseEmail(senderName: string): Promise<string> {
    let base = await getHeaderText();

    base += `\nOlá ${senderName}, gostaria de me inscrever para uma vaga`;
    base += "\nestou deixando o meu curriculo";

    return base;
}

async function getHeaderText(): Promise<string> {
    return "EMAIL PARA VOCÊ"
}

export { getBaseEmail };