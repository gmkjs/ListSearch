import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //Forms for template driven, Reactive forms for reactive forms
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ObservcompComponent } from './observcomp/observcomp.component';
import { PromiscompComponent } from './promiscomp/promiscomp.component';
import { HttpClientModule } from '@angular/common/http';
import { subjectService } from './subject.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ObservcompComponent,
    PromiscompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,

    
  ],
  providers: [subjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
