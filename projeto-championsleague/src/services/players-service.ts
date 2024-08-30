import { badRequest, created, noContent, ok } from "../utils/http-helper";
import * as PlayerRepository from "../repositories/players-repository"
import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";

export const getPlayerService = async () => {
    const data = await PlayerRepository.findAllPlayers();
    let res = null;

    if (data) {
        res = await ok(data);
    } else {
        res = await noContent();
    }

    return res;
}

export const getPlayerByIdService = async (id: number) => {
    //pedir pro repositorio de dados
    const data = await PlayerRepository.findPlayerById(id);
    let res = null;

    if (data) {
        res = await ok(data);
    } else {
        res = await noContent();
    }

    return res;
}

export const createPlayerService = async (player: PlayerModel) => {
    let res = null;
    //verifica se está vazio
    if (Object.keys(player).length !== 0) {
        await PlayerRepository.insertPlayer(player);
        res = await created();
        //res = await ok();
    } else {
        res = await badRequest();
    }

    return res;
}

export const deletePlayerService = async (id: number) => {
    let res = null;
    const isDeleted = await PlayerRepository.deletePlayer(id);

    if (isDeleted)
        res = await ok({ message: "deleted" });
    else
        res = await badRequest();

    return res;
}
export const updatePlayerService = async (id: number, body: StatisticsModel) => {
    const data = await PlayerRepository.updatePlayer(id, body);
    let res = null;

    if (Object.keys(data).length === 0) {
        res = await badRequest();
    } else {
        res = await ok(data);
    }

    return res;
}

