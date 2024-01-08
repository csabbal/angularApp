import { Component, OnInit } from '@angular/core';
import { CharacterListService } from '../../services/characterList.service';
import { character } from '../../types/rickAndMorty';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { ListItemComponent } from '../listItem/listItem.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HttpClientModule,
    ListItemComponent
  ],
  providers:[CharacterListService],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {

  listElements:character[] = []

  constructor(protected characterService: CharacterListService) {

  }

  ngOnInit() {
    this.characterService.getCharacterList().subscribe((it) => {
      this.listElements = it
    })
  }
}
