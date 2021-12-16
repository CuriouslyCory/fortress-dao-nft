import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Character } from '../models/character';
import { Gender } from '../models/gender';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  character_state: Character;
  character_state$: BehaviorSubject<Character>;

  constructor() { 
    this.character_state = {gender: 0, head: 0, body: 0};
    this.character_state$ = new BehaviorSubject<Character>(this.character_state);
  }

  setGender(gender: Gender){
    this.character_state.gender = gender;
    this.character_state$.next(this.character_state);
  }

  setTrait(trait: string, val: number){
    switch(trait){
      case 'head':
        this.character_state.head = val;
        break;
      case 'body':
        this.character_state.body = val;
        break;
      case 'left-arm':
        this.character_state.left_arm = val;
        break;
      case 'right-arm':
        this.character_state.right_arm = val;
        break;
      case 'legs':
        this.character_state.legs = val;
        break;
      case 'feet':
        this.character_state.feet = val;
        break;
    }
    this.character_state$.next(this.character_state);
  }
}
