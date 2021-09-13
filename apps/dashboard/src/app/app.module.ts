import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CharactersComponent } from './characters/characters.component';
import { CharacterDetailsComponent } from './characters/character-details/character-details.component';
import { CharacterListComponent } from './characters/character-list/character-list.component';
import { MaterialModule } from "@got-app/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreDataModule } from "@got-app/core-data";
import { CoreStateModule } from "@got-app/core-state";
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment';
import { EnvironmentModule } from '@got-app/environment';
import { UiLoginModule } from '@got-app/ui-login';
import { CharacterComponent } from './character/character.component';
import { CharacterInfoComponent } from './character/character-info/character-info.component';

@NgModule({
  declarations: [AppComponent, CharactersComponent, CharacterDetailsComponent, CharacterListComponent, CharacterInfoComponent, CharacterComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    UiLoginModule,
    EnvironmentModule.withEnvironment(environment),
    FormsModule,
    ReactiveFormsModule,
    CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
