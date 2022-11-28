import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunityComponent } from './community/community.component';
import { ErrorComponent } from './error/error.component';
import { GamesComponent } from './games/games.component';
import { HomeComponent } from './home/home.component';
import { InstantComponent } from './instant/instant.component';

const routes: Routes = [
  {path:'games',component: GamesComponent},
  {path:'',component:HomeComponent},
  {path:'community',component:CommunityComponent},
  {path:'home',component:HomeComponent},
  {path:'instant',component:InstantComponent},
  {path:'**',component:ErrorComponent},
  {path: 'games', redirectTo:'/games', pathMatch: 'full'},
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: 'community', redirectTo:'/community', pathMatch: 'full'},
  {path: 'instant', redirectTo:'/instant', pathMatch: 'full'}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[GamesComponent] 




































