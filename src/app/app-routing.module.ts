import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from "./components/landing/landing.component";
import {AuthComponent} from "./components/auth/auth.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'login', component: AuthComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
