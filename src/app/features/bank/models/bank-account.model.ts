import {Company} from "../../general/models/company.model";

export interface BankAccount {
  id: number;
  accountMaintenanceCost: number;
  transferCost: number;
  money: number;
  maxMoney: number;
  resource: number;
  maxResource: number;
  isEnable: boolean;
  company: Company;
}
