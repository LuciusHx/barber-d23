import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class ProfilePage implements OnInit {
  user = {} as User;
  constructor(
    private utilsService: UtilsService,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.getUser();
  }
  getUser() {
    return (this.user = this.utilsService.getElementFromLocalStorage('user'));
  }

  async logout() {
    this.utilsService.presentAlert({
      header: 'Encerrar sessão',
      message: 'Deseja encerrar a sessão?',
      mode: 'md',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Sim',
          handler: () => {
            this.firebaseService.logout();
          },
        },
      ],
    });
  }
}
