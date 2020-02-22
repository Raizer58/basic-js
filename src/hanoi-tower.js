module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let countTurns = Math.pow(2,disksNumber) - 1;
    let countTime = countTurns/(turnsSpeed/3600);
    return {turns:countTurns, seconds:countTime};
}