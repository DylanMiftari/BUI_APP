export interface User {
  id: number;
  pseudo: string;
  userMoney: number;
  inTravel: boolean;
  endTravel: string;
  companiesCount: number | null;
  minesCount: number | null;
  resourceSum: number | null;
  cityName: string | null;
  casinoTicketsCount: number | null;
  activeAccount: number | null;
  homeCount: number | null;
  activeMafiaContract: number | null;
}
