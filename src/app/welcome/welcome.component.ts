import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  HelloWorldBean,
  WelcomeDataService,
} from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  message = 'Some Welcome Message';
  welcomeMessageFromService: string | undefined;
  name = '';

  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
  ) {}

  ngOnInit() {
    console.log(this.route.snapshot.params['name']);
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    //    console.log(this.service.executeHelloWorldBeanService());
    this.service
      .executeHelloWorldBeanService()
      .subscribe((response) =>
        this.handleSuccessfullResponse(response.message)
      );
    //
    console.log('get welcome message');
  }

  handleSuccessfullResponse(response: any) {
    console.log(response);
    console.log(response.message);
  }

  runAutomatedTests() {
    //    console.log(this.service.executeHelloWorldBeanService());
    this.service
      .executeRunAutomatedTestService()
      .subscribe((response) =>
        this.handleSuccessfullResponse(response.message)
      );
    //
    console.log('Test Execution Started');
  }
}
