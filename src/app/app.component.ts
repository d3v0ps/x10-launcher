import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SwiperConfig } from 'ngx-swiper-wrapper';
import { Howl, Howler } from 'howler';
import { ShortcutInput } from 'ng-keyboard-shortcuts';
import { IpcRenderer } from 'electron';
import { Subject, BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';

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

  private ipc: IpcRenderer | undefined;

  constructor(
    private http: HttpClient
  ) {
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

  ngOnInit() {
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
        if (this.ipc) {
          this.ipc.send('open app', event);
        }
        event.opening = false;
      }
    });
  }
}
