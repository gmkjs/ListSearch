import { NgModule } from '@angular/core';
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



import { RestComponent } from './rest/rest.component';
import { ViewencapComponent } from './viewencap/viewencap.component';
import { ReactiveValidComponent } from './reactive-valid/reactive-valid.component';


const routes: Routes = [
 
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'login2', component: Login2Component},
  {path: 'home', component:HomeComponent, canActivate:[CactivateGuard]},
  {path: 'register', component:RegisterComponent},
  {path:'viewencap',component:ViewencapComponent},
  {path: 'rest', component:RestComponent},
  {path: 'carrers', component:CarrersComponent},
  {path: 'about', component:AboutComponent},
  {path: 'query', component:QueryparamComponent},
  {path: 'compA', component:ComponenAComponent},
  {path: 'compB', component:ComponenBComponent},
  {path:'rvalid', component:ReactiveValidComponent}


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),SiblingmodulModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
