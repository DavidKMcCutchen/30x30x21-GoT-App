import { Character } from "..";


export interface CharacterPagination {
  count: number;
  next?: string;
  previous?: string;
  results: Character[];
}