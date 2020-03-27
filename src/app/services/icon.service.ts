import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { SoundService } from './sound.service';
import { SystemService } from './system.service';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  icons$ = new BehaviorSubject([]);

  constructor(
    private http: HttpClient,
    private sound: SoundService,
    private system: SystemService,
  ) {
    this.http.get<any>('assets/data/icons.json').subscribe(
      icons => {
        this.icons$.next(icons);
      }
    );
  }

  open(icon: { url: string, opening?: boolean }) {
    this.icons$.value.forEach(
      valueCard => valueCard.opening = false
    );

    icon.opening = true;

    this.sound.play('cardOpen')
      .subscribe(
        () => {
          this.system.openApp(icon);
          icon.opening = false;
        }
      );
  }

  openByName(name: string) {
    const icon = this.icons$.value.find(iconValue => iconValue.container === name);
    return this.open(icon);
  }
}
