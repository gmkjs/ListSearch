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




const routes: Routes = [
 
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'login2', component: Login2Component},
  {path: 'home', component:HomeComponent, canActivate:[CactivateGuard]},
  {path: 'register', component:RegisterComponent},
  {path: 'carrers', component:CarrersComponent},
  {path: 'about', component:AboutComponent},


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
