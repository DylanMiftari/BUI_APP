import {BankLevel} from "./bank-level.model";

export interface BankDashboard {
  bank: {
    id: number,
    name: string,
    level: number,
    moneyInSafe: number,
    nbAccount: number,
    maxNbAccount: number,
    nbLoans: number,
    companyId: number,
  },
  bankLevel: BankLevel[],
}
