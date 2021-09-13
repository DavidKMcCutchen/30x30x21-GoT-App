import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { Character } from "@got-app/api-interfaces";
import { CharactersService } from "@got-app/core-data";
import * as CharacterActions from './characters.actions';
import { map } from "rxjs/operators";
import { fetch, pessimisticUpdate } from "@nrwl/angular";

@Injectable()
export class CharacterEffects{
    loadCharacter$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CharacterActions.loadCharacter),
            fetch({
                run: (action) =>
                    this.charactersService
                        .getOne(action.characterId)
                        .pipe(map((character: Character) => CharacterActions.loadCharacterSuccess({ character }))),
                    onError: (action, error) => CharacterActions.loadCharacterFailed({ error })    
            })
        ));
    loadCharacters$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CharacterActions.loadCharacters),
            fetch({
                run: () =>
                    this.charactersService
                    .getAll()
                    .pipe(
                        map((characters: Character[]) => CharacterActions.loadCharactersSuccess({ characters }))
                    ),
                onError: (action, error) => CharacterActions.loadCharactersFailed({ error })    
            })
        ));
    //     createCharacter$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(CharacterActions.createCharacter),
    //         pessimisticUpdate({
    //             run: (action) =>
    //                 this.charactersService
    //                     .create(action.character)
    //                     .pipe(map((character: Character) => CharacterActions.createCharacterSuccess({ character }))),
    //                 onError: (action, error) => CharacterActions.createCharacterFailed({ error })    
    //         })
    // ));

    // updateCharacter$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(CharacterActions.updateCharacter),
    //         pessimisticUpdate({
    //             run: (action) =>
    //                 this.charactersService
    //                     .update(action.character)
    //                     .pipe(map((character: Character) => CharacterActions.updateCharacterSuccess({ character}))),
    //                 onError: (action, error) => CharacterActions.updateCharacterFailed({ error })    
    //         })
    // ));

    // deleteCharacter$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(CharacterActions.deleteCharacter),
    //         pessimisticUpdate({
    //             run: (action) =>
    //                 this.charactersService
    //                     .delete(action.character)
    //                     .pipe(
    //                         map(() => CharacterActions.deleteCharacterSuccess({ character: action.character }))
    //                     ),
    //                 onError: (action, error) => CharacterActions.deleteCharacterFailed({ error })    
    //         })
    //     ));    


    constructor(
        private actions$: Actions,
        private charactersService: CharactersService
    ) {}    
}