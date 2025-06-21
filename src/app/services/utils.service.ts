import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  AlertController,
  LoadingController,
  ToastController,
  ToastOptions,
} from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor(
    private loadingController: LoadingController,
    private router: Router,
    private toastController: ToastController,
    private alertController: AlertController
  ) {}

  // -------- LOADING ---------
  async presentLoading(options) {
    const loading = await this.loadingController.create(options);
    await loading.present();
  }

  async dismissLoading() {
    return await this.loadingController.dismiss();
  }

  // --------- localStorage -----------
  setElementInLocalStorage(key: string, element: any) {
    localStorage.setItem(key, JSON.stringify(element));
  }

  getElementFromLocalStorage(key: string) {
    //parse funciona transformando uma string em um json
    return JSON.parse(localStorage.getItem(key));
  }

  // ---------- router Link ------------
  routerLink(url: string) {
    return this.router.navigateByUrl(url);
  }

  // -------- toast controller ------
  async presentToast(options: ToastOptions) {
    const toast = await this.toastController.create(options);
    toast.present();
  }

  // -------- Alert Controll -----------
  async presentAlert(options) {
    const alert = await this.alertController.create(options);
    await alert.present();
  }
}
