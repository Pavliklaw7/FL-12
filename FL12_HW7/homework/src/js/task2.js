let prize = {
    startPrize: 100,
    currentPrize: null,
    finalPrize: 0
};
let gameRules = {
    chances: 3,
    extendRange: 4,
    startRange: 8,
    thisChance: null,
    makeRandom: null,
    chanceNum: null,
    extendGame: true,
    thisGame: false
};
let magicNumbers = {
    hundred: 100
};

gameRules.thisGame = confirm('Do you want to play a game?');

while (gameRules.thisGame) {
    if (gameRules.extendGame) {
        gameRules.makeRandom = Math.floor(Math.random() * (gameRules.startRange + 1));
        for (let i = 1; i <= gameRules.chances; i++) {
            gameRules.thisChance = i;
            prize.currentPrize = i === gameRules.chances
                ? prize.startPrize / gameRules.extendRange
                : prize.startPrize / i;
            gameRules.chanceNum = prompt(
                `Choose a roulette pocket number from 0 to ${gameRules.startRange}
                Attempts left: ${gameRules.thisChance}
                Total prize: ${prize.finalPrize}
                Possible prize on current attempts: ${prize.currentPrize}`
            );
            if (isNaN(+gameRules.chanceNum) || !isFinite(+gameRules.chanceNum) || gameRules.chanceNum === '') {
                alert(`" ${gameRules.chanceNum}" - it is not number, please enter a number`);
                i--;
            } else if (gameRules.chanceNum === null) {
                alert('You have canceled the Game');
                break;
            } else if (+gameRules.chanceNum === gameRules.makeRandom) {
                break;
            }

        }
        if (+gameRules.chanceNum === gameRules.makeRandom) {
            prize.finalPrize += prize.currentPrize;
            prize.startPrize += prize.startPrize;
            gameRules.startRange += gameRules.extendRange;
            gameRules.extendGame = confirm(
                `Congratulation, you won! Your prize is: ${prize.finalPrize} $. Do you want to continue?`
            );
        } else {
            prize.finalPrize = 0;
            prize.startPrize = magicNumbers.hundred;
            gameRules.startRange = gameRules.extendRange + gameRules.extendRange;
            alert(`Thank you for your participation. Your prize is: ${prize.finalPrize} $`);
            gameRules.thisGame = confirm('Do you want to play again?');
        }

    } else {
        alert(`Thank you for your participation. Your prize is: ${prize.finalPrize} $`);
        if (confirm('Do you want to play again?')) {
            prize.finalPrize = 0;
            prize.startPrize = magicNumbers.hundred;
            gameRules.startRange = gameRules.extendRange + gameRules.extendRange;
            gameRules.extendGame = true;
        } else {
            break;
        }
    }
}
alert('You did not become a billionaire, but can.');



