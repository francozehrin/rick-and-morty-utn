import { Component, OnInit } from '@angular/core';
import { CharactersService } from './characters.services';

@Component({
  selector: 'app-characters',
  imports: [],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent implements OnInit {

  characters: any = [];

  constructor(
    private charactersService: CharactersService) {}
  
  ngOnInit() {
    this.charactersService.getCharacters().then(data => {
      this.characters = data;
      console.log(this.characters)
    })
  }

}
