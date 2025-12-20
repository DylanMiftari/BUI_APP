export interface LoanRequest {
  id: number;
  status: string;
  money: number;
  weeklypayment: number;
  alreadyPayed: number;
  rate: number;
  bankId: number;
  description: string;
  user: {pseudo: string} | null;
}
