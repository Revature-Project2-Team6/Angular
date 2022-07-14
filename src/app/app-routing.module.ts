import { InfoMenuComponent } from './components/info-menu/info-menu.component';
import { CharacterCreationComponent } from './components/character-creation/character-creation.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PlanetSelectComponent } from './components/planet-select/planet-select.component';
const routes: Routes = [
  {path: "homepage", component: HomepageComponent},
  {path: "character", component: CharacterCreationComponent},
  {path: "info", component: InfoMenuComponent},
  {path: "planet", component: PlanetSelectComponent},
   // a WildCard Route is used to handle unknown paths (ALWAYS goes last)
   {path: '**', component:HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
