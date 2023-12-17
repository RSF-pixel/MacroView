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
    const firebaseConfig = {
      apiKey: environment.firebaseConfig.FIREBASE_API_KEY,
      authDomain: environment.firebaseConfig.FIREBASE_AUTH_DOMAIN,
      projectId: environment.firebaseConfig.FIREBASE_PROJECT_ID,
      storageBucket: environment.firebaseConfig.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: environment.firebaseConfig.FIREBASE_MESSAGING_SENDER_ID,
      appId: environment.firebaseConfig.FIREBASE_APP_ID,
      measurementId: environment.firebaseConfig.FIREBASE_MEASUREMENT_ID
    };
    
    
    // Initialize Firebase
    
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    console.log(analytics);
    
    
  }

  navigateToDefaultComponent() : void {
    this.router.navigate(['/dashboard']);
  }

}
