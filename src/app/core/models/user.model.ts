export interface User {
  id: number;
  pseudo: string;
  userMoney: number;
  companiesCount: number | null;
  minesCount: number | null;
  resourceSum: number | null
}