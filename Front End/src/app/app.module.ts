import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MontyHalldashBoardComponent } from './Monty-Hall-DashBoard/Monty-Hall-dashBoard.component';
import { MontyHallUserInputFormComponent } from './Monty-Hall-DashBoard/UserInputForm/Monty-Hall-UserInputForm.component';
import { MatButtonModule } from '@angular/material/button';
import { LoaderComponent } from './Loader/Loader.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';



@NgModule({
  declarations: [
    AppComponent,
    MontyHalldashBoardComponent,
    MontyHallUserInputFormComponent,
    LoaderComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    
    
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
