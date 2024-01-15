import { Component } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-wrapper',
  standalone: true,
  imports: [ CommonModule,ListComponent],
  templateUrl: './list-wrapper.component.html',
  styleUrl: './list-wrapper.component.scss'
})
export class ListWrapperComponent {
  expectedNumberOfPage = 50
  listParts = [...Array(this.expectedNumberOfPage).keys()]
}
