import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { CardsComponent } from './components/cards/cards.component';


const routes: Routes = [
  { path: 'usersTable', component: UsersComponent },
  { path: 'usersCard', component: CardsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
