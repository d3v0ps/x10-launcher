
import { Component, OnInit } from '@angular/core';
import { IpcRenderer } from 'electron';
import { IPCService } from './services/ipc.service';

@Component({
  selector: 'app-sidebar',
  template: `
    <div style="width: 40vw;" class="container pt-4">

      <div class="row text-center" style="font-size: 30px;">

        <div class="col-6">
          <i class="mdi mdi-{{ wifiIcon }}"></i> {{ wifiConnection?.ssid }}
        </div>
        <div class="col-6">
          <i class="mdi mdi-{{ batteryIcon }}"></i> {{ battery * 100 }}%
        </div>

      </div>

      <!-- div class="text-center"  style="font-size: 80px; margin-top: 50px;">
          <i class="mdi mdi-weather-fog"></i>
          <br/>
          18º
      </div -->


      <div class="row text-center" style="
        font-size: 40px;
        position: absolute;
        bottom: 30px;
        width: 100%;
      ">

        <div class="col-4">
          <i class="mdi mdi-power" style="color: #FD7272"
            (click)="sendSystemSignal('shutdown')"></i>
        </div>
        <div class="col-4">
          <i class="mdi mdi-restart" style="color: #58B19F"
            (click)="sendSystemSignal('restart')"></i>
        </div>
        <div class="col-4">
          <i class="mdi mdi-close" style="color: #FEA47F"
            (click)="sendSystemSignal('close')"></i>
        </div>

      </div>

    </div>
  `
})

export class SidebarComponent implements OnInit {

  wifiIcon = 'wifi';
  batteryIcon = 'battery';

  set wifiConnection(value: any) {
    this._wifiConnection = value;
    const roundedSignal = Math.round((value.quality + Number.EPSILON) / 10);

    switch (roundedSignal) {
      case 0:
        this.wifiIcon = 'wifi-strength-outline';
        break;
      case 1:
        this.wifiIcon = 'wifi-strength-1';
        break;
      case 2:
        this.wifiIcon = 'wifi-strength-1';
        break;
      case 3:
        this.wifiIcon = 'wifi-strength-2';
        break;
      case 4:
        this.wifiIcon = 'wifi-strength-2';
        break;
      case 5:
        this.wifiIcon = 'wifi-strength-2';
        break;
      case 6:
        this.wifiIcon = 'wifi-strength-3';
        break;
      case 7:
        this.wifiIcon = 'wifi-strength-3';
        break;
      case 8:
        this.wifiIcon = 'wifi-strength-3';
        break;
      case 9:
        this.wifiIcon = 'wifi-strength-4';
        break;
      case 10:
        this.wifiIcon = 'wifi-strength-4';
        break;
    }

  }

  get wifiConnection() {
    return this._wifiConnection;
  }

  private _wifiConnection = {
    ssid: 'NO WIFI'
  };

  set battery(value: any) {
    this._battery = value;
    const roundedLevel = Math.round((value + Number.EPSILON) * 10) * 10;

    switch (roundedLevel) {
      case 0:
        this.batteryIcon = 'battery-outline';
        break;
      case 100:
        this.batteryIcon = 'battery';
        break;
      default:
        this.batteryIcon = 'battery-' + roundedLevel;
    }
  }

  get battery() {
    return this._battery;
  }

  private _battery = 1;

  constructor(
    private ipc: IPCService
  ) {}

  ngOnInit() {
    this.ipc.send('get system metadata');

    this.ipc.on('system metadata').subscribe(
      metadata => {
        this.wifiConnection = metadata.wifiConnections[0];
        this.battery = metadata.battery;
      }
    );
  }

  sendSystemSignal(signal) {
    this.ipc.send('system signal', signal);
  }
}
