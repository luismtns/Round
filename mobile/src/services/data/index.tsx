export const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    name: "First Item",
    ra: "2303203",
    nascimento: "20/04/78",
    andar: "2",
    quarto: "25",
    key: "1000",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    name: "Second Item",
    ra: "2303203",
    nascimento: "20/04/78",
    andar: "2",
    quarto: "25",
    key: "1001",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    name: "Third Item",
    ra: "2303203",
    nascimento: "20/04/78",
    andar: "2",
    quarto: "25",
    key: "1002",
  },
];

export const PROFESSIONAL = {
  name: "Maria Rodri",
  ra: "Residente Nutricionista",
  img:
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
};
import { Firebase } from "../../integrations/firebase";
import "firebase/firestore";
import { ThemeConsumer } from "react-native-elements";

const collectionPatients = "patients";
const collectionProfessionals = "professionals";
const collectionUser = "users";

export const firebaseDataService = {
  // PATIENTS COLLECTION
  async addPatient(PatientObj: any) {
    return this.collection_patient.add(PatientObj);
  },
  getPatientSnapshot(size: number, observer: any) {
    return this.collection_patient
      .orderBy("timestamp", "desc")
      .limit(size)
      .onSnapshot(observer);
  },
  async getPatient(uuid: string) {
    const snapshot = await this.collection_patient.doc(uuid).get();
    return snapshot.data();
  },
  async updatePatientAlimentation(uuid: string, new_alimentation: any) {
    this.collection_patient.doc(uuid).update({
      alimentation: new_alimentation,
      lastAlimentationUpdate: firebaseDataService.timestamp,
    });
    return this.collection_patient.doc(uuid).collection("historic").add({
      timestamp: this.timestamp,
      observations: new_alimentation.observations,
    });
  },
  getHistoricSnapshot(uid: string, observer: any) {
    return this.collection_patient
      .doc(uid)
      .collection("historic")
      .orderBy("timestamp", "desc")
      .limit(6)
      .onSnapshot(observer);
  },

  // PROFESSIONAL COLLECTIONS
  async addProfessional(professionalOBj: any) {
    return this.collection_professionals
      .doc(professionalOBj.personal.cpf)
      .set(professionalOBj);
  },
  getProfessionalSnapshot(
    size: number,
    professionalType: "medic" | "general",
    observer: any
  ) {
    return this.collection_professionals
      .where("professional_type", "==", professionalType)
      .orderBy("timestamp", "desc")
      .limit(size)
      .onSnapshot(observer);
  },
  async getProfessional(uuid: string) {
    const snapshot = await this.collection_professionals.doc(uuid).get();
    return snapshot.data();
  },

  // GENERAL PROFESSIONAL COLLECTIONS
  async addGeneralProfessional(professionalOBj: any) {
    return this.collection_professionals
      .doc(professionalOBj.personal.cpf)
      .set(professionalOBj);
  },

  // KITCHEN COLLECTIONS
  getPatientAlimentation(size: number, observer: any) {
    return this.collection_patient
      .orderBy("lastAlimentationUpdate", "desc")
      .limit(size)
      .onSnapshot(observer);
  },

  // USERS COLLECTIONS
  async getUser(uuid: string) {
    var ref = this.collection_users.doc(uuid);
    return ref.get();
  },
  async updateUser(uuid: string, userData: any) {
    return this.collection_users.doc(uuid).set(userData);
  },
  // Helpers
  get collection_patient() {
    return Firebase.firestore().collection(collectionPatients);
  },
  get collection_professionals() {
    return Firebase.firestore().collection(collectionProfessionals);
  },
  get collection_users() {
    return Firebase.firestore().collection(collectionUser);
  },
  get uid(): any {
    return (Firebase.auth().currentUser || {}).uid;
  },
  get email(): any {
    return (Firebase.auth().currentUser || {}).email;
  },
  get timestamp(): firebase.firestore.Timestamp {
    return Firebase.firestore.Timestamp.now();
  },
};
