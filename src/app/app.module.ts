import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnalitycsComponent } from './analitycs/analitycs.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AngularFireModule } from '@angular/fire/compat'
import { environment } from 'enviroments/enviroment';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AnalitycsComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
