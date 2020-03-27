import { Injectable } from '@angular/core';
import { fromEvent, fromEventPattern } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GamepadService {

  private _gameControl: any;
  private _gamepad: any;

  constructor() {
    if ((window as any).gameControl) {
      this._gameControl = (window as any).gameControl;
    }

  }

  connect() {
    return fromEvent(this._gameControl, 'connect')
      .pipe(
        tap(gamepad => this._gamepad = gamepad)
      );
  }

  after(event: string) {
    return fromEventPattern(
      handler => this._gamepad.after(event, handler)
    );
  }

  on(event: string) {
    return fromEvent(this._gamepad, event);
  }
}
