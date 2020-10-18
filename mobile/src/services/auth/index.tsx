import { Firebase } from '../../integrations/firebase';

export default class AuthService {
  public static onAuthStateChanged(callback: (user: firebase.User | null) => void) {
    Firebase.auth().onAuthStateChanged(callback);
  }
  public static signInWithEmailAndPassword(email:string, password:string) {
    Firebase.auth().signInWithEmailAndPassword(email, password).catch((err)=>{
      console.log(err)
    });
  }

  public static async logout () {
    return Firebase.auth().signOut();
  }
};
