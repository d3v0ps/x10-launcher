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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! howler */ "./node_modules/howler/dist/howler.js");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let AppComponent = class AppComponent {
    constructor(http) {
        this.http = http;
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
        this.cards$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.icons$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.sounds$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({});
        this.selectedIndex = 0;
        this.selectedCard = null;
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
    ngOnInit() {
        this.http.get('assets/data/cards.json').subscribe(cards => {
            this.selectedCard = cards[this.selectedIndex];
            this.cards$.next(cards);
        });
        this.http.get('assets/data/icons.json').subscribe(icons => {
            this.icons$.next(icons);
        });
        this.http.get('assets/data/sounds.json').subscribe(sounds => {
            this.sounds$.next(sounds);
        });
    }
    onWheel(event) {
        if (event.deltaY > 0) {
            if (this.selectedIndex < this.cards$.value.length - 1) {
                this.selectedIndex = this.selectedIndex + 1;
            }
        }
        else {
            if (this.selectedIndex > 0) {
                this.selectedIndex = this.selectedIndex - 1;
            }
        }
    }
    onSwipeChange(event) {
        const sound = new howler__WEBPACK_IMPORTED_MODULE_3__["Howl"]({
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
        this.cards$.value.forEach(card => card.opening = false);
        this.icons$.value.forEach(card => card.opening = false);
        event.opening = true;
        const sound = new howler__WEBPACK_IMPORTED_MODULE_3__["Howl"]({
            src: [this.sounds$.value.cardOpen],
            autoplay: true,
            onend: () => {
                if (this.ipc) {
                    this.ipc.send('open app', event);
                }
                else {
                    window.open(event.url, 'blank');
                }
                event.opening = false;
            }
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
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


let SidebarComponent = class SidebarComponent {
    constructor() {
        this.wifiIcon = 'wifi';
        this.batteryIcon = 'battery';
        this._wifiConnection = {
            ssid: 'NO WIFI'
        };
        this._battery = 1;
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
    set wifiConnection(value) {
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
    set battery(value) {
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
    ngOnInit() {
        if (this.ipc) {
            this.ipc.send('get system metadata');
            this.ipc.on('system metadata', (event, metadata) => {
                this.wifiConnection = metadata.wifiConnections[0];
                this.battery = metadata.battery;
            });
        }
    }
    sendSystemSignal(signal) {
        if (this.ipc) {
            this.ipc.send('system signal', signal);
        }
    }
};
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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