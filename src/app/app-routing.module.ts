import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PostComponent} from './post/post.component';





const routes: Routes = [
  {path: 'signup' , component: SignUpComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'post', component: PostComponent},
  {path: '', redirectTo: 'register', pathMatch: 'full'},
  {path: 'dashboard' , component: DashboardComponent},
 
 
  
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const root = [
  SignUpComponent,LoginComponent,DashboardComponent

]
