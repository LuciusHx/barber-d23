import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  exports: [
    HeaderComponent,
    CustomInputComponent,
    IonicModule,
    ReactiveFormsModule,
    LogoComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HeaderComponent,
    CustomInputComponent,
    LogoComponent
  ],
})
export class SharedModule {}
