export interface AmortissementTable {
  id: number;
  debut: Date;
  fin: Date;
  nbJours: number;
  capitalInvesti: number;
  capitalRestant: number;
  tauxInteret: number;
  amortissement: number;
  interet: number;
  annuite: number;
}
