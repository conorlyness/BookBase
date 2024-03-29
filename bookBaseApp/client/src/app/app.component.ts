import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthenticateService } from './services/authenticate.service';
import { NavbarService } from './services/navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  darkThemePref: string = localStorage.getItem('sliderVal')!;
  @HostBinding('class')
  className = '';
  constructor(private overlay: OverlayContainer, public nav: NavbarService, private authService: AuthenticateService) {}

  ngOnInit(): void {

    const authenticated = this.authService.getUserId()
    if (authenticated) {
      console.log("Authenticated user");
      this.nav.showNav();
    }
    const darkModeClass = 'darkMode';
    const lightModeClass = '';
    if (this.darkThemePref === 'true') {
      this.className = darkModeClass;
      this.overlay.getContainerElement().classList.add(darkModeClass);
    } else {
      this.className = lightModeClass;
      this.overlay.getContainerElement().classList.add(lightModeClass);
    }
  }

  onChange(e: any) {
    if (e.checked) {
      localStorage.setItem('sliderVal', 'true');
      this.className = 'darkMode';
    } else {
      localStorage.setItem('sliderVal', 'false');
      this.className = '';
    }
  }

  displaySearchTerm(searchInput: string) {
    console.log(searchInput);
  }
}
