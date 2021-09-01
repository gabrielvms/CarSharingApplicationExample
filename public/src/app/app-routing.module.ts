import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterestsComponent } from './components/interests/interests.component';
import { LoginComponent } from './components/login/login.component';
import { RidesComponent } from './components/rides/rides.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'rides', component: RidesComponent},
  {path: 'interests', component: InterestsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
