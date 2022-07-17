import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombatComponent } from './components/combat/combat.component';

const routes: Routes = [
  {path: 'combat', component:CombatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
