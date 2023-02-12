export interface Compte {
  id: number;
  cloture: boolean;
  dateCloture: Date;
  rib: string;
  description: string;
  solde: number;
  numCpt: string;
  active: boolean;
  firstName: string;
  statut: "PREVIEW";
}
