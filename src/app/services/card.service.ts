import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { SoundService } from './sound.service';
import { SystemService } from './system.service';

export interface Card {
  name: string;
  image: string;
  url: string;
  opening?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CardService {

  selectedIndex = 0;
  selectedCard = null;

  cards$ = new BehaviorSubject<Card[]>([]);

  constructor(
    private http: HttpClient,
    private sound: SoundService,
    private system: SystemService,
  ) {
    this.http.get<any>('assets/data/cards.json').subscribe(
      cards => {
        this.selectedCard = cards[this.selectedIndex];
        this.cards$.next(cards);
      }
    );
  }

  select(card: Card) {
    this.selectedIndex = this.cards$.value.indexOf(card);
  }

  selectNext() {
    if (this.selectedIndex < this.cards$.value.length - 1) {
      this.selectedIndex = this.selectedIndex + 1;
    }
  }

  selectPrevious() {
    if (this.selectedIndex > 0) {
      this.selectedIndex = this.selectedIndex - 1;
    }
  }

  onSelectedIndexChange() {
    this.sound.play('cardSelect')
      .subscribe(
        () => this.selectedCard = this.cards$.value[this.selectedIndex]
      );
  }

  open(card: Card) {
    this.cards$.value.forEach(
      valueCard => valueCard.opening = false
    );

    card.opening = true;

    this.sound.play('cardOpen')
      .subscribe(
        () => {
          this.system.openApp(card);
          card.opening = false;
        }
      );
  }

  openSelected() {
    return this.open(this.selectedCard);
  }

}
