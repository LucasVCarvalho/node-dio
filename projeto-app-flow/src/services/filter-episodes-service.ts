import { repoPodcast } from "../repositories/podcasts-repository";
import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { StatusCode } from "../utils/status-code";


export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<PodcastTransferModel> => {

    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: [],
    }

    //http://localhost:3333/api/episode?p=flow
    //busca dados
    const queryString = podcastName?.split("?p=")[1] || "";
    const data = await repoPodcast(queryString);

    //verificando se tem conteudo
    responseFormat = {
        statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
        body: data,
    };
    // if (data.length !== 0) {
    //     responseFormat.statusCode = StatusCode.OK;
    // } else {
    //     responseFormat.statusCode = StatusCode.NoContent;
    // }

    responseFormat.body = data;

    return responseFormat;
}