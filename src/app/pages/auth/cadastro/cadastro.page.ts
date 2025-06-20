import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { SharedModule } from 'src/app/shared/shared.module';

import { CustomValidators } from 'src/app/utils/custom-validators';

import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class CadastroPage implements OnInit {
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    confirmPassword: new FormControl('', [Validators.required]),
  });
  constructor(
    private firebaseService: FirebaseService,
    private utilsService: UtilsService
  ) {}

  ngOnInit() {
    this.confirmPasswordValidator();
  }

  confirmPasswordValidator() {
    this.form.controls.confirmPassword.setValidators([
      Validators.required,
      CustomValidators.matchValues(this.form.controls.password),
    ]);
    this.form.controls.confirmPassword.updateValueAndValidity();
  }

  submit() {
    if (this.form.valid) {
      this.utilsService.presentLoading({ message: 'Registrando...' });
      //then é uma promise, ele é chamado depois que o cadastro é concluído
      this.firebaseService.cadastro(this.form.value as User).then(
        async (res) => {
          console.log(res);
          await this.firebaseService.updateUser({
            displayName: this.form.value.name,
          });

          let user: User = {
            uid: res.user.uid,
            name: res.user.displayName,
            email: res.user.email,
          };
          this.utilsService.setElementInLocalStorage('user', user);
          this.utilsService.routerLink('/tabs/home');
          this.utilsService.dismissLoading();
          this.utilsService.presentToast({
            message: `Seja Bem vindo(a) ${user.name} !`,
            duration: 5000,
            color: 'primary',
            icon: 'checkmark-outline',
          });
        },
        (error) => {
          console.log('o cadastro deu errado.');
        }
      );
    }
  }
}
