import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms'; 

// Project imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './theme/shared/shared.module';
import { RegisterComponent } from './demo/authentication/register/register.component'; 

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
    FormsModule 
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
