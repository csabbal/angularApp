import { Component, Input } from '@angular/core';
import { character } from '../../types/rickAndMorty';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
