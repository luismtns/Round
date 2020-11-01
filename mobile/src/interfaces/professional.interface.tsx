interface Personal {
  name: string;
  birthday: string;
  marital: string;
  nationality: string;
  citizenship: string;
  gender: string;
  cpf: string;
  rg: string;
}

interface Professional {
  specialty: string;
  code: string;
  admission: string;
  manager: string;
  crm?: string;
}

interface Auth {
  adm: string;
  clinic: string;
  kitchen: string;
}
export interface ProfessionalProfile {
  auth: Auth;
  personal: Personal;
  professional: Professional;
  professional_type?: string;
}
