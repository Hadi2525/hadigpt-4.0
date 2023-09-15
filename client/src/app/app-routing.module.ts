import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppAuthComponent } from './components/app-auth/app-auth.component';


const routes: Routes = [
  {path: 'auth', component: AppAuthComponent},
  {path: '', redirectTo: 'auth', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
