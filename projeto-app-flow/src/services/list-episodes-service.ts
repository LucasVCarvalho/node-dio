import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { repoPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";

export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {
    //defino contrato
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: [],
    }

    //busco dados
    const data = await repoPodcast();

    //verifico o tipo de resposta
    responseFormat = {
        statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
        body: data,
    };
    return responseFormat;
}