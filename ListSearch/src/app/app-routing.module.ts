import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterrxComponent } from './counterrx/counterrx.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo: 'login'}, ///anything will direct from app component to login component
  {path: 'login', component: LoginComponent},
  {path:'login/counter',component:CounterrxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
