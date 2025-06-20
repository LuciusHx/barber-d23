import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
  standalone: true,
  imports: [
    SharedModule
  ]
})
export class AgendaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
