export interface Company {
  id: number;
  name: string;
  type: string;
  activated: boolean;
  level: number;
  owner_name: string | null;
  moneyInSafe: number | null;
}
