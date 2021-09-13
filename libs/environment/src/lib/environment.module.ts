import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CHARACTER_ENVIRONMENT } from './characters.token';
import { CharacterEnvironment } from "./characters.model";


@NgModule({})
export class EnvironmentModule {
  static withEnvironment(environment: CharacterEnvironment): ModuleWithProviders<EnvironmentModule> {
    return {
      ngModule: EnvironmentModule,
      providers: [
        {
          provide: CHARACTER_ENVIRONMENT,
          useValue: environment
        }
      ]
    }
  }
}
