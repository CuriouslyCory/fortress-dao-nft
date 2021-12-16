import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/character';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character-display',
  templateUrl: './character-display.component.html',
  styleUrls: ['./character-display.component.scss']
})
export class CharacterDisplayComponent implements OnInit {

  public character: Character = {gender: 0};
  
  constructor( characterService: CharacterService) { 
    characterService.character_state$.subscribe((character: Character) => {
      this.character = character;
    });
  }

  ngOnInit(): void {
  }

}
