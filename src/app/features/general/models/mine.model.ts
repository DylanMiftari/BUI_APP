import { MineLevel } from "./mineLevel.model";
import { Resource } from "./resource.model";

export interface Mine {
    id: number,
    level: number,
    startedAt: Date | null,
    resource: Resource | null,
    hourlyIncome: number | null,
    mineLevel: MineLevel | null,
}