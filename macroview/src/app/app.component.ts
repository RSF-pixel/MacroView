import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'macroview';

  constructor(private router: Router) {
    this.navigateToDefaultComponent()
  }

  navigateToDefaultComponent() {
    this.router.navigate(['/dashboard']);
  }

}
