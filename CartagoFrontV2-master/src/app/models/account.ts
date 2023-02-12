import { Tier } from "./tier";

export interface Account {
  id: number;
  cloture: boolean;
  dateCloture: Date;
  rib: string;
  description: string;
  solde: number;
  numCpt: string;
  active: boolean;
  firstName: string;
  statut: string;
}
