import { Request, Response } from "express";
import * as PlayerService from "../services/players-service";
import { StatisticsModel } from "../models/statistics-model";


export const getPlayer = async (request: Request, response: Response) => {
    const httpResponse = await PlayerService.getPlayerService();
    response.status(httpResponse.statusCode).json(httpResponse.body);
}

export const getPlayerById = async (request: Request, response: Response) => {
    const id = parseInt(request.params.id);
    const httpResponse = await PlayerService.getPlayerByIdService(id);
    response.status(httpResponse.statusCode).json(httpResponse.body);
}

export const postPlayer = async (request: Request, response: Response) => {
    const bodyValue = request.body;
    const httpResponse = await PlayerService.createPlayerService(bodyValue);

    if (httpResponse) {
        response.status(httpResponse.statusCode).json(httpResponse.body);
    }
}

export const deletePlayer = async (request: Request, response: Response) => {
    const id = parseInt(request.params.id);
    const httpResponse = await PlayerService.deletePlayerService(id);
    response.status(httpResponse.statusCode).json(httpResponse.body);

}
export const updatePlayer = async (request: Request, response: Response) => {
    const id = parseInt(request.params.id);
    const bodyValue: StatisticsModel = request.body;
    const httpResponse = await PlayerService.updatePlayerService(id, bodyValue);
    response.status(httpResponse.statusCode).json(httpResponse.body);
}

