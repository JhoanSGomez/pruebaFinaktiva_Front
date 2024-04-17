import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthLoginGuard } from './pages/auth/guards/authLogin.guard';

import { RegisterEvent } from './pages/register-event/register-event.component';
import { ConsultEvent } from './pages/consult-event/consult-event.component';


const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/auth/sign-in/sign-in.module').then(m => m.SignInModule), canActivate: [AuthLoginGuard] },
  { path: 'sign-in', loadChildren: () => import('./pages/auth/sign-in/sign-in.module').then(m => m.SignInModule), canActivate: [AuthLoginGuard] },
  //{ path: 'sign-up', loadChildren: () => import('./pages/auth/sign-up/sign-up.module').then(m => m.SignUpModule), canActivate: [AuthLoginGuard] },
  { path: 'register', component: RegisterEvent },
  { path: 'consult', component: ConsultEvent},
  { path: '**', redirectTo: 'client', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
