import { Component, ChangeDetectorRef } from '@angular/core';
import { bufferCount } from 'rxjs/operators';

import { SwiperConfig } from 'ngx-swiper-wrapper';
import { ShortcutInput } from 'ng-keyboard-shortcuts';

import { GamepadService } from './services/gamepad.service';
import { CardService } from './services/card.service';
import { IconService } from './services/icon.service';

@Component({
  selector: 'app-root',
  template: `
    <ng-sidebar-container style="height: 100vh;">

      <!-- A sidebar -->
      <ng-sidebar [(opened)]="sidebarOpened" position="right" showBackdrop="true" closeOnClickBackdrop="true">
        <app-sidebar></app-sidebar>
      </ng-sidebar>

      <!-- Page content -->
      <div ng-sidebar-content>

        <ng-keyboard-shortcuts [shortcuts]="shortcuts"></ng-keyboard-shortcuts>
        <ng-keyboard-shortcuts-help [key]="'?'" [closeKey]="'escape'" [title]="'Help'"></ng-keyboard-shortcuts-help>
        <!-- app-header></app-header -->

        <i class="sidebar-button mdi mdi-backburger"
          (click)="sidebarOpened = !sidebarOpened"></i>

        <div class="container-fluid" (wheel)="onWheel($event)">

          <div class="cards-container">
            <h2>{{ card.selectedCard?.name }}</h2>
            <swiper [config]="swiperConfig" [(index)]="card.selectedIndex" (indexChange)="onSwipeChange($event)">
              <div class="card" *ngFor="let item of card.cards$ | async; let i = index"
                (click)="onCardClick(item)"
                (dblclick)="onCardDblClick(item)"
                [ngClass]="{
                  'active': i === card.selectedIndex,
                  'animated pulse': item.opening
                }">
                <img [src]="item.image">
              </div>
            </swiper>
          </div>

          <div class="swiper-pagination"></div>

        </div>

        <footer class="footer navbar pt-4 justify-content-between">
            <div *ngFor="let icon of icon.icons$ | async"
              class="icon-container {{ icon.container }}"
              (click)="onIconClick(icon)">
              <i class="mdi mdi-{{ icon.icon }}"></i>
            </div>
        </footer>

      </div>
    </ng-sidebar-container>
  `
})
export class AppComponent {

  sidebarOpened = false;

  swiperConfig: Partial<SwiperConfig> = {
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,
    // centerInsufficientSlides: true,
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },
    keyboard: {
      enabled: true,
    },

  };

  shortcuts: ShortcutInput[] = [
    {
      key: ['enter'],
      label: 'Menu',
      preventDefault: true,
      description: 'Select Game or Application',
      command: e => this.card.openSelected()
    },
    {
      key: ['space'],
      label: 'Menu',
      preventDefault: true,
      description: 'Show Menu',
      command: e => this.sidebarOpened = !this.sidebarOpened
    },
    {
      key: ['cmd + s'],
      label: 'Apps',
      preventDefault: true,
      description: 'Open Spotify',
      command: e => this.icon.openByName('spotify')
    },
    {
      key: ['cmd + c'],
      label: 'Apps',
      preventDefault: true,
      description: 'Open Code',
      command: e => this.icon.openByName('code')
    },
    {
      key: ['cmd + e'],
      label: 'Apps',
      preventDefault: true,
      description: 'Open Explorer',
      command: e => this.icon.openByName('explorer')
    },
    {
      key: ['cmd + b'],
      label: 'Apps',
      preventDefault: true,
      description: 'Open Browser',
      command: e => this.icon.openByName('edge')
    },
    {
      key: ['cmd + w'],
      label: 'Apps',
      preventDefault: true,
      description: 'Open Whatsapp',
      command: e => this.icon.openByName('whatsapp')
    }
  ];

  constructor(
    private cd: ChangeDetectorRef,
    private gamepad: GamepadService,
    public card: CardService,
    public icon: IconService,
  ) {
    this.listenToGamepad();
  }

  onGamepadLeft() {
    this.card.selectPrevious();
    this.cd.detectChanges();
  }

  onGamepadRight() {
    this.card.selectNext();
    this.cd.detectChanges();
  }

  onWheel(event: WheelEvent) {
    if (event.deltaY > 0) {
      this.card.selectNext();
    } else {
      this.card.selectPrevious();
    }
  }

  onSwipeChange(event) {
    this.card.onSelectedIndexChange();
  }

  onCardClick(event) {
    this.card.select(event);
  }

  onCardDblClick(event) {
    this.card.open(event);
  }

  onIconClick(event) {
    this.icon.open(event);
  }

  private listenToGamepad() {
    this.gamepad.connect()
      .subscribe(
        () => {

          this.gamepad.after('button0')
            .subscribe(() => this.card.openSelected());

          this.gamepad.after('button1')
            .subscribe(() => console.log('button1'));

          this.gamepad.after('button2')
            .subscribe(() => console.log('button2'));

          this.gamepad.after('button3')
            .subscribe(() => console.log('button3'));

          this.gamepad.after('button4')
            .subscribe(() => console.log('button4'));

          this.gamepad.after('button5')
            .subscribe(() => console.log('button5'));

          this.gamepad.after('button6')
            .subscribe(() => console.log('button6'));

          this.gamepad.after('start')
            .subscribe(() => console.log('start'));

          this.gamepad.after('select')
            .subscribe(() => () => {
              this.sidebarOpened = !this.sidebarOpened;
              this.cd.detectChanges();
            });

          this.gamepad.on('right')
            .pipe(bufferCount(10))
            .subscribe(
              () => this.onGamepadRight()
            );
          this.gamepad.on('right0')
            .pipe(bufferCount(10))
            .subscribe(
              () => this.onGamepadRight()
            );
          this.gamepad.on('right1')
            .pipe(bufferCount(10))
            .subscribe(
              () => this.onGamepadRight()
            );

          this.gamepad.on('left')
            .pipe(bufferCount(10))
            .subscribe(
              () => this.onGamepadLeft()
            );
          this.gamepad.on('left0')
            .pipe(bufferCount(10))
            .subscribe(
              () => this.onGamepadLeft()
            );
          this.gamepad.on('left1')
            .pipe(bufferCount(10))
            .subscribe(
              () => this.onGamepadLeft()
            );


        }
      );
  }
}
