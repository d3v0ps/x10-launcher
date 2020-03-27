import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SwiperConfig } from 'ngx-swiper-wrapper';
import { Howl, Howler } from 'howler';
import { ShortcutInput } from 'ng-keyboard-shortcuts';
import { IpcRenderer } from 'electron';
import { Subject, BehaviorSubject, fromEvent } from 'rxjs';
import { take, debounceTime, bufferCount } from 'rxjs/operators';
import { GamepadService } from './services/gamepad.service';
import { IPCService } from './services/ipc.service';

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
            <h2>{{ selectedCard?.name }}</h2>
            <swiper [config]="swiperConfig" [(index)]="selectedIndex" (indexChange)="onSwipeChange($event)">
              <div class="card" *ngFor="let card of cards$ | async; let i = index"
                (click)="onCardClick(card)"
                (dblclick)="onCardDblClick(card)"
                [ngClass]="{
                  'active': i === selectedIndex,
                  'animated pulse': card.opening
                }">
                <img [src]="card.image">
              </div>
            </swiper>
          </div>

          <div class="swiper-pagination"></div>

        </div>

        <footer class="footer navbar pt-4 justify-content-between">
            <div *ngFor="let icon of icons$ | async"
              class="icon-container {{ icon.container }}"
              (click)="onCardDblClick(icon)">
              <i class="mdi mdi-{{ icon.icon }}"></i>
            </div>
        </footer>

      </div>
    </ng-sidebar-container>
  `
})
export class AppComponent implements OnInit {

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
      command: e => this.onCardDblClick(this.selectedCard)
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
      command: e => this.onCardDblClick(this.icons$.value.find(icon => icon.container === 'spotify'))
    },
    {
      key: ['cmd + c'],
      label: 'Apps',
      preventDefault: true,
      description: 'Open Code',
      command: e => this.onCardDblClick(this.icons$.value.find(icon => icon.container === 'code'))
    },
    {
      key: ['cmd + e'],
      label: 'Apps',
      preventDefault: true,
      description: 'Open Explorer',
      command: e => this.onCardDblClick(this.icons$.value.find(icon => icon.container === 'explorer'))
    },
    {
      key: ['cmd + b'],
      label: 'Apps',
      preventDefault: true,
      description: 'Open Browser',
      command: e => this.onCardDblClick(this.icons$.value.find(icon => icon.container === 'edge'))
    },
    {
      key: ['cmd + w'],
      label: 'Apps',
      preventDefault: true,
      description: 'Open Whatsapp',
      command: e => this.onCardDblClick(this.icons$.value.find(icon => icon.container === 'whatsapp'))
    }
  ];

  cards$ = new BehaviorSubject<{
    name: string;
    image: string;
    url?: string;
    opening?: boolean;
  }[]>([]);

  icons$ = new BehaviorSubject([]);
  sounds$ = new BehaviorSubject<{ [key: string]: string; }>({});

  selectedIndex = 0;
  selectedCard = null;

  constructor(
    private http: HttpClient,
    private cd: ChangeDetectorRef,
    private ipc: IPCService,
    private gamepad: GamepadService,
  ) {
    this.fetchData();
    this.listenToGamepad();
  }

  ngOnInit() {
  }

  onGamepadLeft() {
    if (this.selectedIndex > 0) {
      this.selectedIndex = this.selectedIndex - 1;
      this.cd.detectChanges();
    }
  }

  onGamepadRight() {
    if (this.selectedIndex < this.cards$.value.length - 1) {
      this.selectedIndex = this.selectedIndex + 1;
      this.cd.detectChanges();
    }
  }

  onWheel(event: WheelEvent) {
    if (event.deltaY > 0) {
      if (this.selectedIndex < this.cards$.value.length - 1) {
        this.selectedIndex = this.selectedIndex + 1;
      }
    } else {
      if (this.selectedIndex > 0) {
        this.selectedIndex = this.selectedIndex - 1;
      }
    }
  }

  onSwipeChange(event) {
    const sound = new Howl({
      src: [this.sounds$.value.cardSelect],
      autoplay: true,
      onend: () => {
        this.selectedCard = this.cards$.value[event];
      }
    });
  }

  onCardClick(event) {
    this.selectedIndex = this.cards$.value.indexOf(event);
  }

  onCardDblClick(event) {
    this.cards$.value.forEach(
      card => card.opening = false
    );
    this.icons$.value.forEach(
      card => card.opening = false
    );

    event.opening = true;

    const sound = new Howl({
      src: [this.sounds$.value.cardOpen],
      autoplay: true,
      onend: () => {
        if (this.ipc.isDefined()) {
          this.ipc.send('open app', event);
        } else {
          window.open(event.url, 'blank');
        }
        event.opening = false;
      }
    });
  }

  private fetchData() {
    this.http.get<any>('assets/data/cards.json').subscribe(
      cards => {
        this.selectedCard = cards[this.selectedIndex];
        this.cards$.next(cards);
      }
    );
    this.http.get<any>('assets/data/icons.json').subscribe(
      icons => {
        this.icons$.next(icons);
      }
    );
    this.http.get<any>('assets/data/sounds.json').subscribe(
      sounds => {
        this.sounds$.next(sounds);
      }
    );
  }

  private listenToGamepad() {
    this.gamepad.connect()
      .subscribe(
        () => {

          this.gamepad.after('button0')
            .subscribe(() => this.onCardDblClick(this.selectedCard));

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
