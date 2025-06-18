import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChangeThemeService } from 'src/app/services/change-theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class LogoComponent implements OnInit {
  darkMode$ = this.changethemeService.darkMode$
  constructor(private changethemeService: ChangeThemeService) {}

  ngOnInit() {}
}
