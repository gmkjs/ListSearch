import { NgModule, ViewChild } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CactivateGuard } from './cactivate.guard';
import { Login2Component } from './login2/login2.component';
import { CarrersComponent } from './carrers/carrers.component';
import { AboutComponent } from './about/about.component';
import { QueryparamComponent } from './queryparam/queryparam.component';
import { SiblingmodulModule } from './siblingmodul/siblingmodul.module';
import { ComponenAComponent } from './siblinmodul/componen-a/componen-a.component';
import { ComponenBComponent } from './siblinmodul/componen-b/componen-b.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { RestComponent } from './rest/rest.component';
import { ViewencapComponent } from './viewencap/viewencap.component';
import { ChangdetecComponent } from './changdetec/changdetec.component';
import { ReactiveValidComponent } from './reactive-valid/reactive-valid.component';
import { OuterComponent } from './outer/outer.component';
import { SiblingmodulComponent } from './siblingmodul/siblingmodul/siblingmodul.component';
import { OfferComponent } from './offers/offer/offer.component';
import { OffersModule } from './offers/offers.module';
import { InnerComponent } from './inner/inner.component';
import { Ng4TrackbyComponent } from './ng4-trackby/ng4-trackby.component';
import { RresolveService } from './rresolve.service';



const routes: Routes = [
 
  {path: '', component:Login2Component},
  {path: 'home', component: HomeComponent},
  {path: 'vchild', component:ViewchildComponent },
  {path: 'offer', loadChildren:()=>import('./offers/offers.module').then(m=>m.OffersModule)},
  {path: 'viewchild', component:ViewchildComponent },
  {path: 'login', component: LoginComponent},
  {path: 'login2', component: Login2Component},
  {path: 'home', component:HomeComponent, canActivate:[CactivateGuard]},
  {path: 'register', component:RegisterComponent},
  {path: 'trackby', component:Ng4TrackbyComponent, resolve:{users: RresolveService}},
  {path:'viewencap',component:ViewencapComponent},
  {path: 'rest', component:RestComponent},
  {path: 'carrers', component:CarrersComponent},
  {path: 'about', component:AboutComponent},
  {path: 'query', component:QueryparamComponent},
  {path: 'compA', component:ComponenAComponent},
  {path: 'compB', component:ComponenBComponent},
  {path:'changdetec',component:ChangdetecComponent},
  {path:'rvalid', component:ReactiveValidComponent},
  {path:'outer', component:OuterComponent},
  {path:'offer', component:OfferComponent},
  // {path:'offer', component:OfferComponent},
  {path:'inner', component:InnerComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes),SiblingmodulModule,OffersModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }
