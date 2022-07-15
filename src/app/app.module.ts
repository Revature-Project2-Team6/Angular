import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { LandingComponent } from './components/landing/landing.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterModalComponent } from './components/register-modal/register-modal.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PlanetSelectComponent } from './components/planet-select/planet-select.component';
import { PlanetLevelSelectComponent } from './components/planet-level-select/planet-level-select.component';
import { CombatComponent } from './components/combat/combat.component';
import { CharacterCreationComponent } from './components/character-creation/character-creation.component';
import { InfoMenuComponent } from './components/info-menu/info-menu.component';
import { PlayPageComponent } from './components/play-page/play-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LandingComponent,
    RegisterModalComponent,
    HomepageComponent,
    PlanetSelectComponent,
    PlanetLevelSelectComponent,
    CombatComponent,
    CharacterCreationComponent,
    InfoMenuComponent,
    PlayPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
