import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChangeThemeService {
  private darkModeSubject = new BehaviorSubject<boolean>(false);
  //o darkMode$ vai ser observado
  public darkMode$ = this.darkModeSubject.asObservable();

  constructor() {
    this.initTheme();
  }

  private initTheme() {
    //pegar o tema do localStorage e do sistema
    const savedTheme = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    const initialMode = savedTheme
      ? //parse transforma string para booleano
        JSON.parse(savedTheme)
      : prefersDark.matches;
    this.setTheme(initialMode);

    prefersDark.addEventListener('change', (mediaQuery) => {
      if (!savedTheme) {
        //só vai pro sistema se não tiver preferência salva
        this.setTheme(mediaQuery.matches);
      }
    });
  }

  public setTheme(darkMode: boolean) {
    //next para emitir um novo valor pra todos que estiverem inscritos, notifica components que a var mudou
    this.darkModeSubject.next(darkMode);
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    document.body.classList.toggle('dark', darkMode);
  }

  public toggleTheme() {
    this.setTheme(!this.darkModeSubject.value);
  }
}