import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-change-theme',
  templateUrl: './change-theme.component.html',
  styleUrls: ['./change-theme.component.scss'],
})
export class ChangeThemeComponent implements OnInit {
  theme: string = 'white';
  themeOptions: string | null = localStorage.getItem('bgcolor');

  constructor() {}

  ngOnInit(): void {
    if (this.themeOptions === 'grey') {
      this.changeTheme('grey');
    } else {
      this.changeTheme('white');
    }
  }

  lightTheme() {
    this.changeTheme('white');
    localStorage.setItem('bgcolor', this.theme);
  }

  greyScaleTheme() {
    this.changeTheme('grey');
    localStorage.setItem('bgcolor', this.theme);
  }

  changeTheme(theme: string) {
    this.theme = theme;
    document.body.style.backgroundColor = theme;
  }
}
