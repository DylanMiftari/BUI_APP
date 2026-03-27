import {MafiaTargetType} from "../types/mafia-target-type.type";
import {MafiaRobState} from "../types/mafia-rob-state.type";
import {User} from "../../../core/models/user.model";
import {Company} from "../../general/models/company.model";
import {MinimalBankAccount} from "../../bank/models/minimal-bank-account.model";
import {Home} from "../../general/models/home.model";

export interface MafiaContract {
  id: number;
  targetType: MafiaTargetType;
  targetId: number;
  robState: MafiaRobState,
  clientPrice: number;
  secondPrice: number|null;
  mafiaLevel: number;
  target: User | Company | MinimalBankAccount | Home;
  mafiaId: number;
}
