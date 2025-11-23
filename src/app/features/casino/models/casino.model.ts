import {Company} from "../../general/models/company.model";

export interface Casino {
  id: number,
  company: Company,
  ticketPrice: number | null,
  activeTicketsCount: number | null,
  maxTicketCount: number | null,
  VIPTicketPrice: number | null,
  activeVIPTicketsCount: number | null,
  maxVIPTicketCount: number | null,
}
