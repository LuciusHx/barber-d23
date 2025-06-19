import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../models/user.model';
import { getAuth, updateProfile } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private auth = inject(AngularFireAuth);

  login(user: User) {
    return this.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  cadastro(user: User) {
    return this.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  //dizer o usuario que está logado atualmente
  updateUser(user: any) {
    const auth = getAuth();
    return updateProfile(auth.currentUser, user);
  }

  getAuthState() {
    return this.auth.authState;
  }
}
