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
    RestComponent
    
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
  {provide: HTTP_INTERCEPTORS, useClass:LoggingInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
