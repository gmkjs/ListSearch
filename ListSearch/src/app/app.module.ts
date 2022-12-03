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
import { FirstdirDirective } from './directive/firstdir.directive';
import { InnerComponent } from './inner/inner.component';
import { ContactComponent } from './contact/contact.component';
import { OuterComponent } from './outer/outer.component';
import { PostapiService } from './postapi.service';
import { RestComponent } from './rest/rest.component';
import { GetcompComponent } from './getcomp/getcomp.component';
import { FilteredPipe } from './filter.pipe';
import { SearchBoxComponent } from './search-box/search-box.component';
import { MergeapiService } from './mergeapi.service';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counterrx/act.reducer';
import { CounterrxComponent } from './counterrx/counterrx.component';
import { Login2Component } from './login2/login2.component';
import { RoleLoginComponent } from './role-login/role-login.component';

// import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
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
    GetcompComponent,
    FilteredPipe,
    SearchBoxComponent,
    Login2Component,
    CounterrxComponent,
    RoleLoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    StoreModule.forRoot({count:counterReducer}, {}),
 
 

    
  ],
  providers: [subjectService, CurrencyPipe, PostapiService,MergeapiService,
  {provide: HTTP_INTERCEPTORS, useClass:HeaderInterceptor, multi:true},
  {provide: HTTP_INTERCEPTORS, useClass:LoggingInterceptor, multi:true}
  ],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
