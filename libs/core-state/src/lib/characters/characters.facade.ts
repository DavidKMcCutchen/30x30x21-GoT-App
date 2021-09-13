import { Injectable } from "@angular/core";
import { Character } from "@got-app/api-interfaces";
import { Action, ActionsSubject, select, Store } from "@ngrx/store";
import { map, filter } from "rxjs/operators";
import * as CharacterActions from './characters.actions';
import * as CharacterSelectors from './characters.selectors';
import * as fromCharacters from './characters.reducer';


@Injectable({
    providedIn: 'root'
})

export class CharacterFacade {
    allCharacters$ = this.store.pipe(
        map((state) => CharacterSelectors.getAllCharacters(state)),
    )
    selectedCharacters$ = this.store.pipe(select(CharacterSelectors.getSelectedCharacter));
    loaded$ = this.store.pipe(select(CharacterSelectors.getCharactersLoaded));

    mutations$ = this.actions$.pipe(
        filter((action: Action) =>
        action.type === CharacterActions.createCharacter({} as any) .type ||
        action.type === CharacterActions.updateCharacter({} as any) .type ||
        action.type === CharacterActions.deleteCharacter({} as any) .type
        ))

        selectCharacter(characterId: string) {
            this.dispatch(CharacterActions.selectCharacter({ characterId }));
        };

        loadCharacters() {
            this.dispatch(CharacterActions.loadCharacters())
        };

        loadCharacter(characterId: string) {
            this.dispatch(CharacterActions.loadCharacter({ characterId }))
        };

        saveCharacter(character: Character) {
            character.url ? this.updateCharacter(character) : this.createCharacter(character)
        };

        createCharacter(character: Character) {
            this.dispatch(CharacterActions.createCharacter({ character }))
        };

        updateCharacter(character: Character) {
            this.dispatch(CharacterActions.updateCharacter({ character }))
        };

        deleteCharacter(character: Character) {
            this.dispatch(CharacterActions.deleteCharacter({ character }))
        };

        dispatch(action: Action) {
            this.store.dispatch(action)
        };

        constructor(
            private store: Store<fromCharacters.CharacterPartialState>,
            private actions$: ActionsSubject
        ) {}
}