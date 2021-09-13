import { Character } from "@got-app/api-interfaces";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import * as CharacterActions from './characters.actions';

export const CHARACTER_FEATURE_KEY = 'characters';

export interface CharacterState extends EntityState<Character> {
    selectedId?: string | number;
    loaded: boolean;
    error?: string | null;
};

export interface CharacterPartialState {
    readonly [CHARACTER_FEATURE_KEY]: CharacterState
};

export const characterAdapter: EntityAdapter<Character> = createEntityAdapter<Character>({ selectId: (r) => r.url });;

export const initialCharacterState: CharacterState = characterAdapter.getInitialState(
    {
        loaded: false
    }
);

const onFailed = (state, { error }): CharacterState => ({ ...state, error});

const onDispatch = (state, action): CharacterState => ({
    ...state,
    loaded: false,
    error: null
});

const _characterReducer = createReducer(
    initialCharacterState,
    on(
        CharacterActions.loadCharacterFailed,
        CharacterActions.loadCharactersFailed,
        CharacterActions.createCharacterFailed,
        CharacterActions.updateCharacterFailed,
        CharacterActions.deleteCharacterFailed,
        onFailed
    ),
    on(
        CharacterActions.loadCharacter,
        CharacterActions.loadCharacters,
        CharacterActions.createCharacter,
        CharacterActions.updateCharacter,
        CharacterActions.deleteCharacter,
        onDispatch
    ),
    on(
        CharacterActions.loadCharacterSuccess, (state, { character }) =>
        characterAdapter.upsertOne(character, {...state, loaded: true})
    ),
    on(
        CharacterActions.selectCharacter, (state, { characterId }) => ({
            ...state,
            selectedId: characterId
        })
    ),
    on(
        CharacterActions.loadCharactersSuccess, (state, { characters }) =>
        characterAdapter.setAll(characters, {...state, loaded: true})
    ),
    on(
        CharacterActions.deleteCharacterSuccess, (state, { character }) =>
        characterAdapter.removeOne(character.url, {...state, loaded: true})
    ),
    on(
        CharacterActions.updateCharacterSuccess, (state, { character }) =>
        characterAdapter.updateOne(
            {id: character.url, changes: character},
            {...state, loaded: true}
        )
    ),
    on(
        CharacterActions.createCharacterSuccess, (state, {character }) =>
        characterAdapter.addOne(character, {...state, loaded: true})
    ),
)

export function characterReducer(
    state: CharacterState | undefined,
    action: Action
) {
    return _characterReducer(state, action)
}