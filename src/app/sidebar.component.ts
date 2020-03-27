
import { Component } from '@angular/core';

import { SystemService } from './services/system.service';

@Component({
  selector: 'app-sidebar',
  template: `
    <div style="width: 40vw;" class="container pt-4">

      <div class="row text-center" style="font-size: 30px;">

        <div class="col-6" *ngIf="system.wifi$ | async as wifi">
          <i class="mdi mdi-{{ wifi.icon }}"></i> {{ wifi?.ssid }}
        </div>
        <div class="col-6" *ngIf="system.battery$ | async as battery">
          <i class="mdi mdi-{{ battery.icon }}"></i> {{ battery.value * 100 }}%
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
            (click)="onSystemIconClick('shutdown')"></i>
        </div>
        <div class="col-4">
          <i class="mdi mdi-restart" style="color: #58B19F"
            (click)="onSystemIconClick('restart')"></i>
        </div>
        <div class="col-4">
          <i class="mdi mdi-close" style="color: #FEA47F"
            (click)="onSystemIconClick('close')"></i>
        </div>

      </div>

    </div>
  `
})

export class SidebarComponent {

  constructor(
    public system: SystemService
  ) {}

  onSystemIconClick(signal) {
    this.system.sendSignal(signal);
  }
}
