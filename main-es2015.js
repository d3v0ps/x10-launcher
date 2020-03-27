(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_gamepad_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/gamepad.service */ "./src/app/services/gamepad.service.ts");
/* harmony import */ var _services_card_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/card.service */ "./src/app/services/card.service.ts");
/* harmony import */ var _services_icon_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/icon.service */ "./src/app/services/icon.service.ts");






let AppComponent = class AppComponent {
    constructor(cd, gamepad, card, icon) {
        this.cd = cd;
        this.gamepad = gamepad;
        this.card = card;
        this.icon = icon;
        this.sidebarOpened = false;
        this.swiperConfig = {
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
        this.shortcuts = [
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
    onWheel(event) {
        if (event.deltaY > 0) {
            this.card.selectNext();
        }
        else {
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
    listenToGamepad() {
        this.gamepad.connect()
            .subscribe(() => {
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["bufferCount"])(10))
                .subscribe(() => this.onGamepadRight());
            this.gamepad.on('right0')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["bufferCount"])(10))
                .subscribe(() => this.onGamepadRight());
            this.gamepad.on('right1')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["bufferCount"])(10))
                .subscribe(() => this.onGamepadRight());
            this.gamepad.on('left')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["bufferCount"])(10))
                .subscribe(() => this.onGamepadLeft());
            this.gamepad.on('left0')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["bufferCount"])(10))
                .subscribe(() => this.onGamepadLeft());
            this.gamepad.on('left1')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["bufferCount"])(10))
                .subscribe(() => this.onGamepadLeft());
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _services_gamepad_service__WEBPACK_IMPORTED_MODULE_3__["GamepadService"] },
    { type: _services_card_service__WEBPACK_IMPORTED_MODULE_4__["CardService"] },
    { type: _services_icon_service__WEBPACK_IMPORTED_MODULE_5__["IconService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
/* harmony import */ var ng_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-keyboard-shortcuts */ "./node_modules/ng-keyboard-shortcuts/fesm2015/ng-keyboard-shortcuts.js");
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-sidebar */ "./node_modules/ng-sidebar/lib/index.js");
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng_sidebar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sidebar.component */ "./src/app/sidebar.component.ts");










const DEFAULT_SWIPER_CONFIG = {
    direction: 'horizontal',
    slidesPerView: 'auto'
};
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_5__["SwiperModule"],
            ng_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_6__["KeyboardShortcutsModule"].forRoot(),
            ng_sidebar__WEBPACK_IMPORTED_MODULE_7__["SidebarModule"].forRoot(),
        ],
        providers: [
            {
                provide: ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_5__["SWIPER_CONFIG"],
                useValue: DEFAULT_SWIPER_CONFIG
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/models/battery.ts":
/*!***********************************!*\
  !*** ./src/app/models/battery.ts ***!
  \***********************************/
/*! exports provided: Battery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Battery", function() { return Battery; });
class Battery {
    constructor(value) {
        this.value = value;
        this.icon = 'battery-outline';
        const roundedLevel = Math.round((value + Number.EPSILON) * 10) * 10;
        switch (roundedLevel) {
            case 0:
                this.icon = 'battery-outline';
                break;
            case 100:
                this.icon = 'battery';
                break;
            default:
                this.icon = `battery-${roundedLevel}`;
        }
    }
}
Battery.ctorParameters = () => [
    { type: Number }
];


/***/ }),

/***/ "./src/app/models/wifi-connection.ts":
/*!*******************************************!*\
  !*** ./src/app/models/wifi-connection.ts ***!
  \*******************************************/
/*! exports provided: WifiConnection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WifiConnection", function() { return WifiConnection; });
const wifiIcons = {
    0: 'strength-outline',
    1: 'strength-1',
    2: 'strength-1',
    3: 'strength-2',
    4: 'strength-2',
    5: 'strength-2',
    6: 'strength-2',
    7: 'strength-3',
    8: 'strength-3',
    9: 'strength-4',
    10: 'strength-4',
};
class WifiConnection {
    constructor(data) {
        this.ssid = 'NO WIFI CONNECTION';
        this.icon = 'wifi-strength-outline';
        Object.assign(this, data);
        const roundedSignal = Math.round((data.quality + Number.EPSILON) / 10);
        this.icon = `wifi-${wifiIcons[roundedSignal]}`;
    }
}
WifiConnection.ctorParameters = () => [
    { type: undefined }
];


/***/ }),

/***/ "./src/app/services/card.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/card.service.ts ***!
  \******************************************/
/*! exports provided: CardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardService", function() { return CardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _sound_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sound.service */ "./src/app/services/sound.service.ts");
/* harmony import */ var _system_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./system.service */ "./src/app/services/system.service.ts");






let CardService = class CardService {
    constructor(http, sound, system) {
        this.http = http;
        this.sound = sound;
        this.system = system;
        this.selectedIndex = 0;
        this.selectedCard = null;
        this.cards$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.http.get('assets/data/cards.json').subscribe(cards => {
            this.selectedCard = cards[this.selectedIndex];
            this.cards$.next(cards);
        });
    }
    select(card) {
        this.selectedIndex = this.cards$.value.indexOf(card);
    }
    selectNext() {
        if (this.selectedIndex < this.cards$.value.length - 1) {
            this.selectedIndex = this.selectedIndex + 1;
        }
    }
    selectPrevious() {
        if (this.selectedIndex > 0) {
            this.selectedIndex = this.selectedIndex - 1;
        }
    }
    onSelectedIndexChange() {
        this.sound.play('cardSelect')
            .subscribe(() => this.selectedCard = this.cards$.value[this.selectedIndex]);
    }
    open(card) {
        this.cards$.value.forEach(valueCard => valueCard.opening = false);
        card.opening = true;
        this.sound.play('cardOpen')
            .subscribe(() => {
            this.system.openApp(card);
            card.opening = false;
        });
    }
    openSelected() {
        return this.open(this.selectedCard);
    }
};
CardService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _sound_service__WEBPACK_IMPORTED_MODULE_4__["SoundService"] },
    { type: _system_service__WEBPACK_IMPORTED_MODULE_5__["SystemService"] }
];
CardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CardService);



/***/ }),

/***/ "./src/app/services/gamepad.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/gamepad.service.ts ***!
  \*********************************************/
/*! exports provided: GamepadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamepadService", function() { return GamepadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let GamepadService = class GamepadService {
    constructor() {
        if (window.gameControl) {
            this.gameControl = window.gameControl;
        }
    }
    connect() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.gameControl, 'connect')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(gamepad => this.gamepad = gamepad));
    }
    after(event) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEventPattern"])(handler => this.gamepad.after(event, handler));
    }
    on(event) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.gamepad, event);
    }
};
GamepadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GamepadService);



/***/ }),

/***/ "./src/app/services/icon.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/icon.service.ts ***!
  \******************************************/
/*! exports provided: IconService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconService", function() { return IconService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _sound_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sound.service */ "./src/app/services/sound.service.ts");
/* harmony import */ var _system_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./system.service */ "./src/app/services/system.service.ts");






let IconService = class IconService {
    constructor(http, sound, system) {
        this.http = http;
        this.sound = sound;
        this.system = system;
        this.icons$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.http.get('assets/data/icons.json').subscribe(icons => {
            this.icons$.next(icons);
        });
    }
    open(icon) {
        this.icons$.value.forEach(valueCard => valueCard.opening = false);
        icon.opening = true;
        this.sound.play('cardOpen')
            .subscribe(() => {
            this.system.openApp(icon);
            icon.opening = false;
        });
    }
    openByName(name) {
        const icon = this.icons$.value.find(iconValue => iconValue.container === name);
        return this.open(icon);
    }
};
IconService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _sound_service__WEBPACK_IMPORTED_MODULE_4__["SoundService"] },
    { type: _system_service__WEBPACK_IMPORTED_MODULE_5__["SystemService"] }
];
IconService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], IconService);



/***/ }),

/***/ "./src/app/services/ipc.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/ipc.service.ts ***!
  \*****************************************/
/*! exports provided: IPCService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IPCService", function() { return IPCService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let IPCService = class IPCService {
    constructor() {
        if (window.require) {
            try {
                this.ipc = window.require('electron').ipcRenderer;
            }
            catch (e) {
                throw e;
            }
        }
        else {
            console.warn('Electron\'s IPC was not loaded');
        }
    }
    isDefined() {
        return this.ipc ? true : false;
    }
    send(event, ...params) {
        if (this.ipc) {
            this.ipc.send(event, ...params);
        }
    }
    on(event) {
        if (this.ipc) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.ipc, event);
        }
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]();
    }
};
IPCService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], IPCService);



/***/ }),

/***/ "./src/app/services/sound.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/sound.service.ts ***!
  \*******************************************/
/*! exports provided: SoundService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundService", function() { return SoundService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! howler */ "./node_modules/howler/dist/howler.js");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_4__);





let SoundService = class SoundService {
    constructor(http) {
        this.http = http;
        this.sounds$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
        this.http.get('assets/data/sounds.json').subscribe(sounds => {
            this.sounds$.next(sounds);
        });
    }
    play(soundName) {
        const sound = new howler__WEBPACK_IMPORTED_MODULE_4__["Howl"]({
            src: [this.sounds$.value[soundName]],
            autoplay: true
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(sound, 'end');
    }
};
SoundService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SoundService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SoundService);



/***/ }),

/***/ "./src/app/services/system.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/system.service.ts ***!
  \********************************************/
/*! exports provided: SystemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemService", function() { return SystemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ipc_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ipc.service */ "./src/app/services/ipc.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_wifi_connection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/wifi-connection */ "./src/app/models/wifi-connection.ts");
/* harmony import */ var _models_battery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/battery */ "./src/app/models/battery.ts");






let SystemService = class SystemService {
    constructor(ipc) {
        this.ipc = ipc;
        this.wifi$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](new _models_wifi_connection__WEBPACK_IMPORTED_MODULE_4__["WifiConnection"]({
            ssid: 'NO WIFI',
            quality: 0
        }));
        this.battery$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](new _models_battery__WEBPACK_IMPORTED_MODULE_5__["Battery"](1));
        this.ipc.send('get system metadata');
        this.ipc.on('system metadata').subscribe(metadata => {
            this.wifi$.next(new _models_wifi_connection__WEBPACK_IMPORTED_MODULE_4__["WifiConnection"](metadata.wifiConnections[0]));
            this.battery$.next(new _models_battery__WEBPACK_IMPORTED_MODULE_5__["Battery"](metadata.battery));
        });
    }
    openApp(app) {
        if (this.ipc.isDefined()) {
            this.ipc.send('open app', app);
        }
        else {
            window.open(app.url, 'blank');
        }
    }
    sendSignal(signal) {
        this.ipc.send('system signal', signal);
    }
};
SystemService.ctorParameters = () => [
    { type: _ipc_service__WEBPACK_IMPORTED_MODULE_2__["IPCService"] }
];
SystemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SystemService);



/***/ }),

/***/ "./src/app/sidebar.component.ts":
/*!**************************************!*\
  !*** ./src/app/sidebar.component.ts ***!
  \**************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_system_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/system.service */ "./src/app/services/system.service.ts");



let SidebarComponent = class SidebarComponent {
    constructor(system) {
        this.system = system;
    }
    onSystemIconClick(signal) {
        this.system.sendSignal(signal);
    }
};
SidebarComponent.ctorParameters = () => [
    { type: _services_system_service__WEBPACK_IMPORTED_MODULE_2__["SystemService"] }
];
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
], SidebarComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/x10-launcher/x10-launcher/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map