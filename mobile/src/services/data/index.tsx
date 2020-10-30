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
const collectionName = "patients";

export const firebaseDataService = {
  async addPatient(PatientObj: any) {
    return this.collection.add(PatientObj);
  },
  async getPatientsList(size: number, start?: number) {
    return this.collection
      .limit(size)
      .orderBy("timestamp", "desc")
      .get()
      .then(function (querySnapshot) {
        var patients_data: any[] = [];
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          var _data_personal = doc.data().personal ? doc.data().personal : null;
          var _data_hos = doc.data().hospitalization
            ? doc.data().hospitalization
            : null;
          if (!_data_personal) {
            return patients_data.push({
              id: "",
              name: "",
              ra: "",
              nascimento: "",
              andar: "",
              quarto: "",
              key: "",
            });
          }

          patients_data.push({
            id: doc.id,
            name: _data_personal.name ? _data_personal.name : "",
            ra: _data_hos.rh ? _data_hos.rh : "",
            nascimento: _data_personal.birthday ? _data_personal.birthday : "",
            andar: _data_hos.floor ? _data_hos.floor : "",
            quarto: _data_hos.room ? _data_hos.room : "",
            key: "",
          });
        });
        return patients_data;
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  },
  // Helpers
  get collection() {
    return Firebase.firestore().collection(collectionName);
  },

  get uid() {
    return (Firebase.auth().currentUser || {}).uid;
  },
  get timestamp(): firebase.firestore.Timestamp {
    return Firebase.firestore.Timestamp.now();
  },
};
