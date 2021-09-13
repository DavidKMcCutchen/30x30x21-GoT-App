import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { Character, emptyCharacter } from '@got-app/api-interfaces';
import { CharacterFacade } from '@got-app/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'got-app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  allCharacters$: Observable<Character[]> = this.characterFacade.allCharacters$;
  selectedCharacter$: Observable<Character> = this.characterFacade.selectedCharacters$;

  form: FormGroup;

  constructor(
    private characterFacade: CharacterFacade,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.characterFacade.mutations$.subscribe((_) => this.resetCharacter());
  }

  ngOnInit() {
    this.initForm();
    this.characterFacade.loadCharacters();
    this.resetCharacter()

    const characterRouteId = this.route.snapshot.params['id'];

    if (characterRouteId) {
      this.loadCharacter((characterRouteId))
    }
  }

  viewCharacter(characterId: string) {
    this.router.navigate(["characters", characterId])
  }

  loadCharacter(characterId: string) {
    this.characterFacade.selectCharacter(characterId);
    this.characterFacade.loadCharacter(characterId);
  }

  selectCharacter(character: Character) {
    this.characterFacade.selectCharacter(character.url)
    this.form.patchValue(character);
  }

  saveCharacter(character: Character) {
    this.characterFacade.saveCharacter(character);
  }

  deleteCharacter(character: Character) {
    this.characterFacade.deleteCharacter(character);
  }

  resetCharacter() {
    this.form.reset();
    this.selectCharacter(emptyCharacter)
  }

  private initForm() {
    this.form = this.formBuilder.group({
      url: [''],
      name: [''],
      gender: [''],
      culture: [''],
      born: [''],
      died: [''],
      titles: [],
      aliases: [],
      father: [''],
      mother: [''],
      spouse: [''],
      allegiances: [],
      books: [],
      povBooks: [],
      tvSeries: [],
      playedBy: []
    })
  }
}
