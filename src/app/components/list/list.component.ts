import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, ElementRef, Input, NgZone, OnDestroy, OnInit, effect, signal } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Subject, of } from 'rxjs';
import { delay, filter, switchMap, tap } from 'rxjs/operators';
import { CharacterListService } from '../../services/characterList.service';
import { character } from '../../types/rickAndMorty';
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
  providers: [
    CharacterListService
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit, OnDestroy {
  @Input('listPart') listPart: number = 0
  readonly page = signal(1);
  readonly visibleSignal = signal(true);
  readonly downloadDoneSignal = signal(false);
  observer!: IntersectionObserver;
  visibile = new Subject<Boolean>()

  listElements: character[] = []

  addEffect() {
    console.log('addEffect')
    effect((onCleanup) => {
      console.log('visibleSignal:', this.visibleSignal())
      this.fetchData()
      onCleanup(() => {
        console.log("Perform cleanup action here");
      });
    });
  }

  constructor(
    private el: ElementRef<HTMLElement>,
    private route: ActivatedRoute,
    protected characterService: CharacterListService,
    private ngZone: NgZone) {

    this.addEffect()
  }
  ngOnDestroy(): void {

  }

  setPage(direction: number) {
    this.page.set(this.page() + direction)
  }

  checkVisibility() {
    this.ngZone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          this.visibleSignal.set(e.isIntersecting)
          if (!e.isIntersecting)
            this.visibile.next(false);
        });
      });
      this.observer.observe(this.el.nativeElement);
    });
  }

  ngOnInit() {
    const pageNumber = this.listPart.toString() ?? this.route.snapshot.paramMap.get('page')

    pageNumber && this.page.set(parseInt(pageNumber))

    this.checkVisibility()
  }

  fetchData() {
    of(this.downloadDoneSignal()).pipe(
      filter(it => !it),
      tap((it) => {
        console.log('fetchData with page:' + it)
      }),
      delay(100),
      filter(() => !!this.visibleSignal()),
      switchMap(it => this.characterService.getCharacterList(this.page())),
      tap(() => {
        console.log('FETCH END')
        this.downloadDoneSignal.set(true)
      })
    ).subscribe((it) => {
      // this.location.replaceState("/list/" + this.page())
      this.listElements = it
    })
  }


}
