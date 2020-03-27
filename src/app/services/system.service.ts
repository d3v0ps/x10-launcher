import { Injectable } from '@angular/core';
import { IPCService } from './ipc.service';
import { BehaviorSubject } from 'rxjs';

import { WifiConnection } from '../models/wifi-connection';
import { Battery } from '../models/battery';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  wifi$ = new BehaviorSubject<WifiConnection>(new WifiConnection({
    ssid: 'NO WIFI',
    quality: 0
  }));
  battery$ = new BehaviorSubject<Battery>(new Battery(1));

  constructor(
    private ipc: IPCService
  ) {
    this.ipc.send('get system metadata');

    this.ipc.on('system metadata').subscribe(
      metadata => {
        this.wifi$.next(new WifiConnection(metadata.wifiConnections[0]));
        this.battery$.next(new Battery(metadata.battery));
      }
    );
  }

  openApp(app: { url: string }) {
    if (this.ipc.isDefined()) {
      this.ipc.send('open app', app);
    } else {
      window.open(app.url, 'blank');
    }
  }

  sendSignal(signal) {
    this.ipc.send('system signal', signal);
  }


}
