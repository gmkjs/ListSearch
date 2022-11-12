import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RestComponent } from './rest/rest.component';
import { SearchBoxComponent } from './search-box/search-box.component';


const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo: 'login'}, ///anything will direct from app component to login component
  {path: 'login', component: LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'rest', component:RestComponent},
  {path:'searchbox', component:SearchBoxComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
