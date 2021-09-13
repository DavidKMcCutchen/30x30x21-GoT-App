import { NgModule } from '@angular/core';
import { Route, RouterModule } from "@angular/router";
import { CharactersComponent } from './characters/characters.component';
import { LoginComponent, WildComponent } from "@got-app/ui-login";
import { CharacterComponent } from './character/character.component';

const routes: Route[] = [
  {path: '', component: LoginComponent },
  {path: 'wild', component: WildComponent},
  {path: 'characters', component: CharactersComponent},
  {path: 'characters/:id', component: CharacterComponent },
  {path: 'login', component: LoginComponent },
  {path: '**', redirectTo: 'wild', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule { }