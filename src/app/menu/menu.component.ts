import { Component } from '@angular/core';
import { HardcodeAuthenticationService } from '../service/hardcode-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  isUserLoggedIn: boolean = false;

  constructor(
    public hardcodedAuthenticationService: HardcodeAuthenticationService
  ) {}

  ngOnInit() {
    this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();
  }
}
