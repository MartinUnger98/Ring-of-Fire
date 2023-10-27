export class Game {
    public players: string[] = [];
    public stack: string[] = [];
    public playedCards: string[] = [];
    public currentPlayer: number = 0;
    public currentCard: any = '';
    public pickCardAnnimation = false;

    constructor() {
        for (let i = 1; i < 14; i++) {
            this.stack.push('ace_' + i);   
            this.stack.push('clubs_' + i);   
            this.stack.push('diamonds_' + i);   
            this.stack.push('hearts_' + i);   
        }
        shuffle(this.stack);
    }

    public getJSON() {
        return {
            players: this.players,
            stack: this.stack,
            playedCards: this.playedCards,
            currentPlayer: this.currentPlayer,
            pickCardAnimation: this.pickCardAnnimation,
            currentCard: this.currentCard
        }
    }
}

function shuffle(array: any[]) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}