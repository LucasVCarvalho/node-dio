import { Request, Response } from "express";
import * as ClubsService from "../services/clubs-service";
import { StatisticsModel } from "../models/statistics-model";


export const getClubs = async (request: Request, response: Response) => {
    const httpResponse = await ClubsService.getClubService();
    response.status(httpResponse.statusCode).json(httpResponse.body);
}