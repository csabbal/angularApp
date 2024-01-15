import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { character } from '../../types/rickAndMorty';


@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './listItem.component.html',
  styleUrl: './listItem.component.scss'
})
export class ListItemComponent {
  @Input({ required: true }) data!: character;
}
