import { getFilterEpisodes, getListEpisodes } from "./controllers/podcasts-controllers"
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";
import * as http from "http";

export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {
    //queryString
    //http://localhost:3333/api/episode?p=flow     
    const baseUrl = request.url?.split("?")[0];
    //?? é um operador que quando o da esquerda for vazio/indefenido o da esquerda se torna true

    //listar podcast
    if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
        await getListEpisodes(request, response);
    }
    //filtro
    if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
        await getFilterEpisodes(request, response);
    }
}