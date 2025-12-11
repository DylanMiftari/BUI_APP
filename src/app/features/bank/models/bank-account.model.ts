import {Company} from "../../general/models/company.model";
import {UserHand} from "./user-hand.model";

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
  bankId: number;
  userHand: UserHand | null;
}
