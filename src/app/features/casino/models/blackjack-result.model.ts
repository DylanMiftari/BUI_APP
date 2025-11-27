import { Card } from "./poker-result.model";

export interface BlackjackInitResponse {
    id: number;
    userHand: Card[];
    bankHand: Card[];
    bet: number;
}

export interface BlackjackPlayResponse {
    id?: number; // Optional because finish might not return it, based on user description
    userHand: Card[];
    bankHand: Card[];
    bet: number;
    winnings?: number; // Only present on finish
    handRes?: string; // Only present on finish
}
