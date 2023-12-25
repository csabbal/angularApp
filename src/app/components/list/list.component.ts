import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { character } from '../../types/rickAndMorty';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { ItemComponent } from '../../item/item.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HttpClientModule,
    ItemComponent
  ],
  providers:[CharacterService],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {

  listElements:character[] = []

  constructor(protected characterService: CharacterService) {

  }

  ngOnInit() {
    this.characterService.getCharacter().subscribe((it) => {
      this.listElements = it
    })
  }
}
