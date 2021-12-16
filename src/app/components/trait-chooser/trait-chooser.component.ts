import { Component, Input, OnInit } from '@angular/core';
import { BodyItem } from 'src/app/models/body-item';
import { HeadItem } from 'src/app/models/head-item';
import { LeftArmItem } from 'src/app/models/left-arm-item';
import { RightArmItem } from 'src/app/models/right-arm-item';
import { LegItem } from 'src/app/models/leg-item';
import { FeetItem } from 'src/app/models/feet-item';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-trait-chooser',
  templateUrl: './trait-chooser.component.html',
  styleUrls: ['./trait-chooser.component.scss']
})
export class TraitChooserComponent implements OnInit {

  @Input() trait: string = '';
  trait_options: Array<string> = [];
  current_option: number = 0;

  constructor(private cs: CharacterService) { 
    console.log(this.trait);
  }

  ngOnInit(): void {
    switch(this.trait){
      case 'head':
        this.trait_options = new HeadItem().options;
        break;
      case 'body':
        this.trait_options = new BodyItem().options;
        break;
      case 'left-arm':
        this.trait_options = new LeftArmItem().options;
        break;
      case 'right-arm':
        this.trait_options = new RightArmItem().options;
        break;
      case 'legs':
        this.trait_options = new LegItem().options;
        break;
      case 'feet':
        this.trait_options = new FeetItem().options;
        break;
    }
  }

  updateOption(val: number){
    if(this.current_option + val > this.trait_options.length - 1){
      this.current_option = 0;
    }else if(this.current_option + val < 0){
      this.current_option = this.trait_options.length - 1;
    }else{
      this.current_option = this.current_option + val;
    }
    this.cs.setTrait(this.trait, this.current_option);

  }




}
