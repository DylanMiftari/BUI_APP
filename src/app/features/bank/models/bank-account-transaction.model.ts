export interface BankAccountTransaction {
  id: number;
  money: number;
  description: string;
  transferCost: number;
  isCredit: boolean;
  createdAt: string;
}
