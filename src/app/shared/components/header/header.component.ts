import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ChangeThemeService } from 'src/app/services/change-theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @Input() backButton: string;
  @Input() isModal: string;
  @Input() color: string;
  @Input() centerTitle: boolean;

  darkMode$ = this.changethemeService.darkMode$;

  constructor(
    private changethemeService: ChangeThemeService
  ) {}

  ngOnInit() {}

  toggleTheme(){
    this.changethemeService.toggleTheme()
  }
}
