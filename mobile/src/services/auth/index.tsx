import { Firebase } from "../../integrations/firebase";
import "firebase/auth";

const auth = Firebase.auth();

export const firebaseAuthService = {
  onAuthStateChanged(callback: (user: firebase.User | null) => void) {
    auth.onAuthStateChanged(callback);
  },

  signInWithEmailAndPassword: (email: string, password: string) =>
    auth.signInWithEmailAndPassword(email, password),

  logout() {
    return auth.signOut();
  },
};

export default firebaseAuthService;
