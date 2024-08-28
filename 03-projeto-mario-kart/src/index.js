const player1 = {
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0,
    TURBO: false,
};

const player2 = {
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0,
    TURBO: false,
};

const player3 = {
    NOME: "Peach",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 2,
    PONTOS: 0,
    TURBO: false,
};

const player4 = {
    NOME: "Yoshi",
    VELOCIDADE: 2,
    MANOBRABILIDADE: 4,
    PODER: 3,
    PONTOS: 0,
    TURBO: false,
};

const player5 = {
    NOME: "Bowser",
    VELOCIDADE: 5,
    MANOBRABILIDADE: 2,
    PODER: 5,
    PONTOS: 0,
    TURBO: false,
};

const player6 = {
    NOME: "Donkey Kong",
    VELOCIDADE: 2,
    MANOBRABILIDADE: 2,
    PODER: 5,
    PONTOS: 0,
    TURBO: false,
};

async function rollDice(player) {
    let random = Math.random();
    let bonus;
    let result;
    switch (true) {
        case random < 0.5:
            bonus = 0
            break;
        default:
            bonus = 1
    }
    //conferindo se o player pode receber o turbo
    if (player.TURBO === true) {
        result = Math.floor(Math.random() * 6) + 1 + bonus;
        if (bonus === 1) {
            player.TURBO = false;
            console.log(`Turbo de ${player.NOME} utilizado 💨`)
        }
    } else {
        result = Math.floor(Math.random() * 6) + 1;
    }
    return result;
}

async function getRandomBlock() {
    let random = Math.random()
    let result

    switch (true) {
        case random < 0.33:
            result = "RETA"
            break;
        case random < 0.66:
            result = "CURVA"
            break;
        default:
            result = "CONFRONTO"
    }

    return result;
}

async function getRandomDamage() {
    let random = Math.random()
    let result

    switch (true) {
        case random < 0.5:
            result = "CASCO"
            break;
        default:
            result = "BOMBA"
    }

    return result;
}


async function logRollResult(characterName, block, diceResult, attribute) {
    console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`);
}

async function playRaceEngine(character1, character2) {
    //ultimo vencedor
    for (let round = 1; round <= 5; round++) {
        console.log(`🏁 Rodada ${round}`);

        //sortear bloco
        let block = await getRandomBlock();
        //let block = "CONFRONTO";
        console.log(`Bloco: ${block}`);

        // rolar os dados
        let diceResult1 = await rollDice(character1);
        let diceResult2 = await rollDice(character2);

        //teste de habilidade
        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        if (block === "RETA") {
            totalTestSkill1 = diceResult1 + character1.VELOCIDADE;
            totalTestSkill2 = diceResult2 + character2.VELOCIDADE;

            await logRollResult(
                character1.NOME,
                "velocidade",
                diceResult1,
                character1.VELOCIDADE);

            await logRollResult(
                character2.NOME,
                "velocidade",
                diceResult2,
                character2.VELOCIDADE);
        }
        if (block === "CURVA") {
            totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
            totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;

            await logRollResult(
                character1.NOME,
                "manobrabilidade",
                diceResult1,
                character1.MANOBRABILIDADE);

            await logRollResult(
                character2.NOME,
                "manobrabilidade",
                diceResult2,
                character2.MANOBRABILIDADE);
        }
        if (block === "CONFRONTO") {
            let powerResult1 = diceResult1 + character1.PODER;
            let powerResult2 = diceResult2 + character2.PODER;
            //recebendo se o dano é casco ou bomba
            let damage = await getRandomDamage();
            console.log(`${character1.NOME} confrontou com ${character2.NOME}! 🥊`)

            await logRollResult(
                character1.NOME,
                "poder",
                diceResult1,
                character1.PODER);

            await logRollResult(
                character2.NOME,
                "poder",
                diceResult2,
                character2.PODER);

            if (powerResult1 > powerResult2 && damage === "CASCO") {
                if (character2.PONTOS > 0) {
                    console.log(`${character1.NOME} venceu o contronto! ${character2.NOME} perdeu 1 ponto 🐢`)
                    console.log(`${character1.NOME} tem chance de ganhar turbo até o proximo confronto! 💨`)
                    character2.PONTOS--;
                    character1.TURBO = true;
                } else {
                    console.log(`${character1.NOME} venceu o contronto! ${character2.NOME} não tinha pontos para perder ❌`)
                    console.log(`${character1.NOME} tem chance de ganhar turbo até o proximo confronto! 💨`)
                    character1.TURBO = true;
                }
            } else if (powerResult1 > powerResult2 && damage === "BOMBA") {
                if (character2.PONTOS > 1) {
                    console.log(`${character1.NOME} venceu o contronto! ${character2.NOME} perdeu 2 pontos 💣`)
                    console.log(`${character1.NOME} tem chance de ganhar turbo até o proximo confronto! 💨`)
                    character2.PONTOS -= 2;
                    character1.TURBO = true;
                } else if (character2.PONTOS > 0) {
                    console.log(`${character1.NOME} venceu o contronto! ${character2.NOME} perdeu 1 ponto 💣`)
                    console.log(`${character1.NOME} tem chance de ganhar turbo até o proximo confronto! 💨`)
                    character1.TURBO = true;
                    character2.PONTOS--;
                } else {
                    console.log(`${character1.NOME} venceu o contronto! ${character2.NOME} não tinha pontos para perder ❌`)
                    console.log(`${character1.NOME} tem chance de ganhar turbo até o proximo confronto! 💨`)
                    lastConfrontWinner = character1.NOME
                }
            }


            if (powerResult2 > powerResult1 && damage === "CASCO") {
                if (character1.PONTOS > 0) {
                    console.log(`${character2.NOME} venceu o contronto! ${character1.NOME} perdeu 1 ponto 🐢`)
                    console.log(`${character2.NOME} tem chance de ganhar turbo até o proximo confronto! 💨`)
                    character1.PONTOS--;
                    character2.TURBO = true;
                } else {
                    console.log(`${character2.NOME} venceu o contronto! ${character1.NOME} não tinha pontos para perder ❌`)
                    console.log(`${character2.NOME} tem chance de ganhar turbo até o proximo confronto! 💨`)
                    character2.TURBO = true;
                }
            } else if (powerResult2 > powerResult1 && damage === "BOMBA") {
                if (character1.PONTOS > 1) {
                    console.log(`${character2.NOME} venceu o contronto! ${character1.NOME} perdeu 2 pontos 💣`)
                    console.log(`${character2.NOME} tem chance de ganhar turbo até o proximo confronto! 💨`)
                    character2.TURBO = true;
                    character1.PONTOS -= 2;
                } else if (character1.PONTOS > 0) {
                    console.log(`${character2.NOME} venceu o contronto! ${character1.NOME} perdeu 1 ponto 💣`)
                    console.log(`${character2.NOME} tem chance de ganhar turbo até o proximo confronto! 💨`)
                    character2.TURBO = true;
                    character1.PONTOS--;
                }
                else {
                    console.log(`${character2.NOME} venceu o contronto! ${character1.NOME} não tinha pontos para perder ❌`)
                    console.log(`${character2.NOME} tem chance de ganhar turbo até o proximo confronto! 💨`)
                    character2.TURBO = true;
                }
            }

            if (powerResult1 === powerResult2) {
                console.log("Confronto empatado! Nenhum ponto foi perdido")
            }
        }
        //verificando o vencedor
        if (totalTestSkill1 > totalTestSkill2) {
            console.log(`${character1.NOME} marcou um ponto!`);
            character1.PONTOS++;
        } else if (totalTestSkill2 > totalTestSkill1) {
            console.log(`${character2.NOME} marcou um ponto!`);
            character2.PONTOS++;
        }
        console.log("------------------------------------------");
    }
}


async function declareWinner(character1, character2) {
    console.log("Resultado final:");
    console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`);
    console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`);

    if (character1.PONTOS > character2.PONTOS) {
        console.log(`\n${character1.NOME} venceu a corrida! Parabéns! 🏆`)
    }
    else if (character2.PONTOS > character1.PONTOS) {
        console.log(`\n${character2.NOME} venceu a corrida! Parabéns! 🏆`)
    } else {
        console.log("A corrida terminou em empate!")
    }

}

(async function main() {
    console.log(`🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando... \n`);

    await playRaceEngine(player1, player2);
    await declareWinner(player1, player2);
})();

