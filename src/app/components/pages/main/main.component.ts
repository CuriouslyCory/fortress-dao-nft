import { Component, OnInit } from '@angular/core';
import { HeadItem } from 'src/app/models/head-item';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  headItem = HeadItem;
  
  constructor() { }

  ngOnInit(): void {
  }

}
