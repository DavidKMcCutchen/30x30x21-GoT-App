export interface Character {
  id: string;
  url: string;
  name: string;
  gender: string;
  culture: string;
  born: string;
  died: string;
  titles: string[];
  aliases: string[];
  father: string;
  mother: string;
  spouse: string;
  allegiances: string[];
  books: string[];
  povBooks: string[];
  tvSeries: string[];
  playedBy: string[];
};


export const emptyCharacter = {
  id: '',
  url: '',
  name: '',
  gender: '',
  culture: '',
  born: '',
  died: '',
  titles: [],
  aliases: [],
  father: '',
  mother: '',
  spouse: '',
  allegiances: [],
  books: [],
  povBooks: [],
  tvSeries: [],
  playedBy: []
};