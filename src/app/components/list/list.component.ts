import { Component, Input, OnInit, effect, importProvidersFrom, signal } from '@angular/core';
import { CharacterListService } from '../../services/characterList.service';
import { character } from '../../types/rickAndMorty';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { ListItemComponent } from '../listItem/listItem.component';
import { Location } from '@angular/common';
import { routes } from '../../app.routes';
import { debounceTime, mergeMap, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HttpClientModule,
    ListItemComponent
  ],
  providers: [
    CharacterListService
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {
  @Input('listPart') listPart:number = 0
  readonly page = signal(1);

  listElements: character[] = []

  addEffect() {
    console.log('addEffect')
    effect((onCleanup) => {
      this.fetchData()
      onCleanup(() => {
        console.log("Perform cleanup action here");
      });
    });
  }

  constructor(private route: ActivatedRoute, protected characterService: CharacterListService, private location: Location) {

    this.addEffect()
  }

  setPage(direction: number) {
    this.page.set(this.page() + direction)
  }

  ngOnInit() {
    const pageNumber = this.listPart.toString() ?? this.route.snapshot.paramMap.get('page')

    pageNumber && this.page.set(parseInt(pageNumber))
  }

  fetchData() {
    of(this.page()).pipe(
      tap((it)=>{
        console.log('fetchData with page:' +it)
      }),
      debounceTime(1000),
      mergeMap(it=>this.characterService.getCharacterList(it))
    ).subscribe((it) => {
     // this.location.replaceState("/list/" + this.page())
      this.listElements = it
    })
  }
}
