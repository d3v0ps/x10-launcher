import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { Howl } from 'howler';

@Injectable({
  providedIn: 'root'
})
export class SoundService {

  sounds$ = new BehaviorSubject<{
    [key: string]: string
  }>({});

  constructor(
    private http: HttpClient
  ) {
    this.http.get<any>('assets/data/sounds.json').subscribe(
      sounds => {
        this.sounds$.next(sounds);
      }
    );
  }

  play(soundName: string) {
    const sound = new Howl({
      src: [this.sounds$.value[soundName]],
      autoplay: true
    });

    return fromEvent(sound, 'end');
  }
}
