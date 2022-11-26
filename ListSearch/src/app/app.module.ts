import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //Forms for template driven, Reactive forms for reactive forms
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
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
import { FirstdirDirective } from './directive/firstdir.directive';
import { InnerComponent } from './inner/inner.component';
import { ContactComponent } from './contact/contact.component';
import { OuterComponent } from './outer/outer.component';
import { PostapiService } from './postapi.service';
import { RestComponent } from './rest/rest.component';
import { ViewencapComponent } from './viewencap/viewencap.component';
import { Login2Component } from './login2/login2.component';
import { CarrersComponent } from './carrers/carrers.component';
import { AboutComponent } from './about/about.component';
import { QueryparamComponent } from './queryparam/queryparam.component';
import { ComponenAComponent } from './siblinmodul/componen-a/componen-a.component';
import { ComponenBComponent } from './siblinmodul/componen-b/componen-b.component';
import { ReactiveValidComponent } from './reactive-valid/reactive-valid.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ObservcompComponent,
    PromiscompComponent,
    UsdInrPipe,
    SubjComponent,
    BehsubjComponent,
    BackGroundDirective,
    FirstdirDirective,
    InnerComponent,
    ContactComponent,
    OuterComponent,
    RestComponent,
    ViewencapComponent,
    
    Login2Component,
    CarrersComponent,
    AboutComponent,
    QueryparamComponent,
    ComponenAComponent,
    ComponenBComponent,
    ReactiveValidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,

    
  ],
  providers: [subjectService, CurrencyPipe, PostapiService,
  {provide: HTTP_INTERCEPTORS, useClass:HeaderInterceptor, multi:true},
  {provide: HTTP_INTERCEPTORS, useClass:LoggingInterceptor, multi:true},
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
