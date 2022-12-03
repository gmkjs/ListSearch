import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CounterrxComponent } from './counterrx/counterrx.component';
import { GetcompComponent } from './getcomp/getcomp.component';
import { InnerComponent } from './inner/inner.component';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';
import { RegisterComponent } from './register/register.component';
import { RestComponent } from './rest/rest.component';
import { RoleLoginComponent } from './role-login/role-login.component';
import { SearchBoxComponent } from './search-box/search-box.component';


const routes: Routes = [
  // {path: '', pathMatch:'full', redirectTo: 'searchbox'}, ///anything will direct from app component to login component
  {path:'',component:RoleLoginComponent},
  {path:'login2',component:Login2Component},
  {path: 'login', component: LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'rest', component:RestComponent},
  {path: 'getcomp', component:GetcompComponent},
  {path:'inner',component:InnerComponent},
  {path:'searchbox', component:SearchBoxComponent},
  {path:'ngrx', component:CounterrxComponent},
  {path:'rLogin',component:RoleLoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
