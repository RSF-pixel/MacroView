import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/compat/auth'
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'macroview';

  constructor(private router: Router, private firestore: AngularFirestore, private afAuth: AngularFireAuth) {
    this.navigateToDefaultComponent()
  }

  ngOnInit(): void {


    // Check if Firestore is initialized
    this.firestore.firestore.enablePersistence()
      .then(() => {
        console.log('Firestore is initialized');
      })
      .catch(() => {
        console.error('Error initializing Firestore:');
      });

  }

  navigateToDefaultComponent(): void {
    this.router.navigate(['/dashboard']);
  }

}
