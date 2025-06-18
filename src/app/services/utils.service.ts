import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private loadingController: LoadingController
  ) { }

  // -------- LOADING ---------
  async presentLoading(options){
    const loading = await this.loadingController.create(options)
    await loading.present()
  }
  
  async dismissLoading(){
    return await this.loadingController.dismiss()
  }
}
