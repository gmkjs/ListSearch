import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterrxComponent } from './counterrx/counterrx.component';
// import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  // {path: '', pathMatch:'full', redirectTo: 'login'}, 
  {path:'', component:HomeComponent},
  // {path: 'login', component: LoginComponent},
  {path:'counter', component:CounterrxComponent},
  {path:'navbar', component:HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
