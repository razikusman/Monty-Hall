import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { getFirestore, provideFirestore } from '@angular/fire/firestore'; // Example: importing Firestore module
import { environment } from '../environments/environment';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MontyHalldashBoardComponent } from './Monty-Hall-DashBoard/Monty-Hall-dashBoard.component';

@NgModule({
  declarations: [
    AppComponent,
    MontyHalldashBoardComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule
    
    
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
