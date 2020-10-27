import { Firebase } from "../../integrations/firebase";
import "firebase/auth";

const auth = Firebase.auth();

export const firebaseAuthService = {
  onAuthStateChanged(callback: (user: firebase.User | null) => void) {
    auth.onAuthStateChanged(callback);
  },

  signInWithEmailAndPassword(email: string, password: string) {
    return auth.signInWithEmailAndPassword(email, password);
  },

  sendPasswordResetEmail(email: string) {
    return auth.sendPasswordResetEmail(email);
  },

  logout() {
    return auth.signOut();
  },
};

export default firebaseAuthService;
