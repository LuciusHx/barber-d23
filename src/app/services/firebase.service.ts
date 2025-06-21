import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../models/user.model';
import { getAuth, updateProfile } from 'firebase/auth';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(
    private auth: AngularFireAuth,
    private utilsService: UtilsService
  ) {}

  login(user: User) {
    return this.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  cadastro(user: User) {
    return this.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  async logout() {
    await this.auth.signOut();
    this.utilsService.routerLink('/auth');
    localStorage.removeItem('user');
    this.utilsService.presentToast({
      message: 'Logout efetuado com sucesso!',
      duration: 4000,
      color: 'warning',
      icon: 'checkmark-outline',
    });
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
