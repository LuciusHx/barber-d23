import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
import { User } from 'src/app/models/User.model';
import { UtilsService } from 'src/app/services/utils.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: true,
  imports: [SharedModule, RouterLink],
})
export class AuthPage implements OnInit {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  constructor(
    private firebaseService: FirebaseService,
    private utilsService: UtilsService
  ) {}

  ngOnInit() {}

  submit() {
    if (this.form.valid) {
      this.utilsService.presentLoading({ message: 'Entrando...' });
      this.firebaseService.login(this.form.value as User).then(
        async (res) => {
          this.utilsService.dismissLoading();
          this.form.reset();
        },
        (error) => {
          this.utilsService.dismissLoading();
        }
      );
    }
  }
}
