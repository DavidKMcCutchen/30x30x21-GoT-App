import { ActionReducerMap } from "@ngrx/store";
import * as fromCharacter from './characters/characters.reducer';

export interface AppState {
    [fromCharacter.CHARACTER_FEATURE_KEY]: fromCharacter.CharacterState
};

export const reducers: ActionReducerMap<AppState> = {
    [fromCharacter.CHARACTER_FEATURE_KEY]: fromCharacter.characterReducer
};