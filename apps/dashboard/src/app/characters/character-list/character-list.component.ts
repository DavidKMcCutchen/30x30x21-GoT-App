import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from "@got-app/api-interfaces";

@Component({
  selector: 'got-app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent {
  @Input() characters: Character[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() characterViewed = new EventEmitter();
}
