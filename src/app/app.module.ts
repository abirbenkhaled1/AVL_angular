import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'; 
import { ReactiveFormsModule } from '@angular/forms'; // Remplacez FormsModule par ReactiveFormsModule

// Project imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './theme/shared/shared.module';
import { RegisterComponent } from './demo/authentication/register/register.component'; 
import { LoginComponent } from './demo/authentication/login/login.component';
// import { LoginComponent } from './demo/authentication/login/login.component'; 

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule, 
    LoginComponent ,

    ReactiveFormsModule // Assurez-vous d'utiliser ReactiveFormsModule ici
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
