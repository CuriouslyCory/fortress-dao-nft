import { CssSelector } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import { Gender } from 'src/app/models/gender';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-gender-selector',
  templateUrl: './gender-selector.component.html',
  styleUrls: ['./gender-selector.component.scss']
})
export class GenderSelectorComponent implements OnInit {

  gender: Gender = Gender.MALE;

  constructor(private cs: CharacterService) {
    cs.character_state$.subscribe((character: Character) => this.gender = character.gender);
  }

  ngOnInit(): void {
  }

  setGender(gender: Gender){
    this.cs.setGender(gender);
  }

}
