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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { subjectService } from './subject.service';
import { SubjComponent } from './subj/subj.component';
import { BehsubjComponent } from './behsubj/behsubj.component';
import { CurrencyPipe } from './login/currency.pipe';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import { HeaderInterceptor } from './header.interceptor';
import { LoggingInterceptor } from './logging.interceptor';
import { BackGroundDirective } from './directives/back-ground.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ObservcompComponent,
    PromiscompComponent,
    
    SubjComponent,
    BehsubjComponent,
    UsdInrPipe,
    BackGroundDirective
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,

    
  ],
  providers: [subjectService, CurrencyPipe,
  {provide: HTTP_INTERCEPTORS, useClass:HeaderInterceptor, multi:true},
  {provide: HTTP_INTERCEPTORS, useClass:LoggingInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
