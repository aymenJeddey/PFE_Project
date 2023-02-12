export interface Tier {
  id: number;
  libcou: string;
  liblon: string;

  resident: boolean;
  reference: string;

  //Person
  firstName: string;
  lastName: string;
  birthday: Date;

  //Bank
  bqloc: boolean;
  codbct: string;
  agcent: string;
}
