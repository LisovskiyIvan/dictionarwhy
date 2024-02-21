export type Meaning = [
    {
      definitions: [
        {
          definition: string;
        }
      ];
      partOfSpeech: string;
      synonyms: [string];
    }
  ];

  export interface User {
    name: string,
    password: string
  }

  export type AllWords = [{
    id: number,
    word: string,
    translation: string,
    language: string,
    user_id: number
  }]
  export interface Mode {
    mode: string
  }