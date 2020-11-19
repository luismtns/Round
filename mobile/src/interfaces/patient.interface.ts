interface IPersonal {
  name: string;
  birthday: string;
  marital: string;
  nationality: string;
  citizenship: string;
  gender: string;
  cpf: string;
  rg: string;
  observation: string;
}
interface IHospitalization {
  hospitalization: string;
  entryDate: string;
  rh: string;
  healthInsurance: string;
  sector: string;
  floor: string;
  room: string;
  bed: string;
  companion: string;
}

interface IRestrictions {
  geral: boolean;
  vegetariano: boolean;
  vegan: boolean;
  kosher: boolean;
  halal: boolean;
}

interface IAlimentation {
  diet: string;
  restrictions: IRestrictions;
  acompanhante: boolean;
  observations: string;
}

export interface PatientProfile {
  hospitalization: IHospitalization;
  personal: IPersonal;
  alimentation?: IAlimentation;
  timestamp: firebase.firestore.Timestamp;
  id: string;
  lastAlimentationUpdate: firebase.firestore.Timestamp;
}
