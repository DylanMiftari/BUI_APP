export interface Card {
    color: number;
    value: number;
}

export interface PokerResult {
    bet: number;
    winnings: number;
    hand: string;
    cards: Card[];
}
