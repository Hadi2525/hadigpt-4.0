import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppAuthComponent } from './components/app-auth/app-auth.component';
import { AppChatPageComponent } from './components/app-chat-page/app-chat-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  {path: 'auth', component: AppAuthComponent},
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {path: 'chat', component: AppChatPageComponent},
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
