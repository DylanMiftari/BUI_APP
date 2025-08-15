
export const mineConfig = {
    maxMineLevel: 6,
    maxNbMine: 5,
    priceForNewMine: {
        2: 5_000,
        3: 15_000,
        4: 70_000,
        5: 200_000
    } as Record<number, number>
};