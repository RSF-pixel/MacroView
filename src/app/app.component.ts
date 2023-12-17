import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../../enviroments/enviroment';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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

  ngOnInit(): void {

    
  }

  navigateToDefaultComponent() : void {
    this.router.navigate(['/dashboard']);
  }

}
