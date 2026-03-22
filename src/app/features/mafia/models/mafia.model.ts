import {MafiaContract} from "./mafia-contract.model";
import {MafiaLevel} from "./mafia-levels.model";

export interface Mafia {
  id: number;
  name: string;
  level: number;
  contracts: MafiaContract[] | null;
  moneyInSafe: number | null;
  companyId: number | null;
  levels: MafiaLevel[] | null;
}
