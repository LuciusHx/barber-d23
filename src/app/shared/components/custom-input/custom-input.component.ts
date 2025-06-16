import { Component, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule],
})
export class CustomInputComponent implements OnInit {
  @Input() control: FormControl;
  @Input() type: string;
  @Input() autocomplete: string;
  @Input() title: string;
  @Input() icon: string;

  isPassword: boolean;

  constructor() {}

  ngOnInit() {
    if (this.type == 'password') {
      this.isPassword = true;
    }
  }
}
