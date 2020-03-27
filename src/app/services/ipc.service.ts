import { Injectable } from '@angular/core';
import { IpcRenderer } from 'electron';
import { fromEvent, of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IPCService {

  private ipc: IpcRenderer | undefined;

  isDefined() {
    return this.ipc ? true : false;
  }

  constructor() {
    if (window.require) {
      try {
        this.ipc = window.require('electron').ipcRenderer;
      } catch (e) {
        throw e;
      }
    } else {
      console.warn('Electron\'s IPC was not loaded');
    }
  }

  send(event: string, ...params: any[]) {
    if (this.ipc) {
      this.ipc.send(event, ...params);
    }
  }

  on<Type = any>(event: string) {
    if (this.ipc) {
      return fromEvent<Type>(this.ipc, event);
    }

    return new Observable<Type>();
  }
}
