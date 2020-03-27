import { Injectable } from '@angular/core';
import { fromEvent, fromEventPattern } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GamepadService {

  private gameControl: any;
  private gamepad: any;

  constructor() {
    if ((window as any).gameControl) {
      this.gameControl = (window as any).gameControl;
    }

  }

  connect() {
    return fromEvent(this.gameControl, 'connect')
      .pipe(
        tap(gamepad => this.gamepad = gamepad)
      );
  }

  after(event: string) {
    return fromEventPattern(
      handler => this.gamepad.after(event, handler)
    );
  }

  on(event: string) {
    return fromEvent(this.gamepad, event);
  }
}
