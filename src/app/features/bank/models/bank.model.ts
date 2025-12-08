import {Company} from "../../general/models/company.model";

export interface Bank {
  id: number;
  level: number;
  accountMaintenanceCost: number;
  transferCost: number;
  maxAccountMoney: number;
  maxAccountResource: number;
  company: Company;
  maxNbAccount: number;
  nbAccount: number;
}
