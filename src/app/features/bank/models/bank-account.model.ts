import {Company} from "../../general/models/company.model";
import {UserHand} from "./user-hand.model";
import {BankAccountTransaction} from "./bank-account-transaction.model";
import {UserResource} from "../../general/models/user-resource.model";

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
  user: {pseudo: string} | null;
  transactions: BankAccountTransaction[] | null;
  resources: UserResource[] | null;
}
