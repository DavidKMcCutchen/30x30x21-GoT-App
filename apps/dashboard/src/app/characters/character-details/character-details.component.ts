import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Character } from "@got-app/api-interfaces";

@Component({
  selector: 'got-app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent {
  currentCharacter: Character;
  originalTitle: string;
  

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set character(value) {
    if (value) this.originalTitle = value.name;
    this.currentCharacter = {...value}
  }

  @Input() form: FormGroup;

  save(formDirective: FormGroupDirective) {
    this.saved.emit(formDirective.value);
    formDirective.resetForm();
  };

  cancel() {
    this.cancelled.emit();
  }
}
