import {User} from "../../../core/models/user.model";
import {Company} from "../../general/models/company.model";
import {BankAccount} from "../../bank/models/bank-account.model";
import {Home} from "../../general/models/home.model";

export interface TargetResult {
  player: User[],
  company: Company[],
  bankAccount: BankAccount[],
  house: Home[],
  cyberattack: Company[] | null,
  aiDronePlayer: User[] | null,
  aiDroneHouse: Home[] | null,
  shoplifting: Company[] | null,
  phishing: BankAccount[] | null,
}
