import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class CustomInputComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
