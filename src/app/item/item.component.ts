import { Component, Input } from '@angular/core';
import { character } from '../types/rickAndMorty';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  @Input({ required: true }) data!: character;
}
