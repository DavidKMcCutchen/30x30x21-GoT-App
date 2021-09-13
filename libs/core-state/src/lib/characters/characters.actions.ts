import { createAction, props } from "@ngrx/store";
import {  Character } from "@got-app/api-interfaces";

// Select Entity

export const selectCharacter = createAction(
    '[CHARACTER] Select Character',
    props<{ characterId: string }>()
);

// Load all Entities

export const loadCharacters = createAction(
    '[CHARACTER] Load Characters'
);

export const loadCharactersSuccess = createAction(
    '[CHARACTER] Load Characters Success',
    props<{ characters: Character[]}>()
);

export const loadCharactersFailed = createAction(
    '[CHARACTER] Load Characters Failed',
    props<{ error: any }>()
);

// Load Single Entity

export const loadCharacter = createAction(
    '[CHARACTER] Load Character',
    props<{ characterId: string}>()
);

export const loadCharacterSuccess = createAction(
    '[CHARACTER] Load Character Success',
    props<{ character: Character}>()
);

export const loadCharacterFailed = createAction(
    '[CHARACTER] Load Character Failed',
    props<{ error: any}>()
);

// Load Create Entity

export const createCharacter = createAction(
    '[CHARACTER] Create Character',
    props<{ character: Character}>()
);

export const createCharacterSuccess = createAction(
    '[CHARACTER] Create Character Success',
    props<{ character: Character}>()
);

export const createCharacterFailed = createAction(
    '[CHARACTER] Create Character Failed',
    props<{ error: any}>()
);

// Load Update Entity

export const updateCharacter = createAction(
    '[CHARACTER] Update Character',
    props<{ character: Character}>()
);

export const updateCharacterSuccess = createAction(
    '[CHARACTER] Update Character Success',
    props<{ character: Character}>()
);

export const updateCharacterFailed = createAction(
    '[CHARACTER] Create Character Failed',
    props<{ error: any}>()
);

// Load Delete Entity

export const deleteCharacter = createAction(
    '[CHARACTER] Delete Character',
    props<{ character: Character}>()
);

export const deleteCharacterSuccess = createAction(
    '[CHARACTER] Delete Character Success',
    props<{ character: Character}>()
);

export const deleteCharacterFailed = createAction(
    '[CHARACTER] Create Character Failed',
    props<{ error: any}>()
);