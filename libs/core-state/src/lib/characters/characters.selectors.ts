import { emptyCharacter } from "@got-app/api-interfaces";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { characterAdapter, CharacterState, CHARACTER_FEATURE_KEY } from "./characters.reducer";

export const getCharacterState = createFeatureSelector<CharacterState>(CHARACTER_FEATURE_KEY);

const { selectAll, selectEntities } = characterAdapter.getSelectors();

export const getCharactersLoaded = createSelector(
    getCharacterState,
    (state: CharacterState) => state.loaded
);

export const getCharacterError = createSelector(
    getCharacterState,
    (state: CharacterState) => state.error
);

export const getAllCharacters = createSelector(
    getCharacterState,
    (state: CharacterState) => selectAll(state)
);

export const getCharacterEntities = createSelector(
    getCharacterState,
    (state: CharacterState) => selectEntities(state)
);

export const getSelectedCharacterId = createSelector(
    getCharacterState,
    (state: CharacterState) => state.selectedId
);

export const getSelectedCharacter = createSelector(
    getCharacterEntities,
    getSelectedCharacterId,
    (entities, selectedId) => (selectedId && entities[selectedId]) || emptyCharacter
);