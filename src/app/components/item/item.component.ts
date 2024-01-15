import { Component, Input } from '@angular/core';
import { character } from '../../types/rickAndMorty';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [
    CommonModule
  ],
  providers: [CharacterService],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  macska:any
  id!: string;
  data!: character;
  constructor(private route: ActivatedRoute, private characterService: CharacterService) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!
    this.characterService.getCharacter(parseInt(this.id)).subscribe((data) => {
      this.data = data
    })
  }
}
