import { Component } from '@angular/core';
import { HardcodeAuthenticationService } from '../service/hardcode-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent {
  constructor(
    private hardcodedAuthenticationService: HardcodeAuthenticationService
  ) {}

  ngOnInit() {
    this.hardcodedAuthenticationService.logout();
  }
}
