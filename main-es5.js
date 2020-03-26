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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! howler */ "./node_modules/howler/dist/howler.js");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var AppComponent = /** @class */ (function () {
    function AppComponent(http, cd) {
        var _this = this;
        this.http = http;
        this.cd = cd;
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
                command: function (e) { return _this.onCardDblClick(_this.selectedCard); }
            },
            {
                key: ['space'],
                label: 'Menu',
                preventDefault: true,
                description: 'Show Menu',
                command: function (e) { return _this.sidebarOpened = !_this.sidebarOpened; }
            },
            {
                key: ['cmd + s'],
                label: 'Apps',
                preventDefault: true,
                description: 'Open Spotify',
                command: function (e) { return _this.onCardDblClick(_this.icons$.value.find(function (icon) { return icon.container === 'spotify'; })); }
            },
            {
                key: ['cmd + c'],
                label: 'Apps',
                preventDefault: true,
                description: 'Open Code',
                command: function (e) { return _this.onCardDblClick(_this.icons$.value.find(function (icon) { return icon.container === 'code'; })); }
            },
            {
                key: ['cmd + e'],
                label: 'Apps',
                preventDefault: true,
                description: 'Open Explorer',
                command: function (e) { return _this.onCardDblClick(_this.icons$.value.find(function (icon) { return icon.container === 'explorer'; })); }
            },
            {
                key: ['cmd + b'],
                label: 'Apps',
                preventDefault: true,
                description: 'Open Browser',
                command: function (e) { return _this.onCardDblClick(_this.icons$.value.find(function (icon) { return icon.container === 'edge'; })); }
            },
            {
                key: ['cmd + w'],
                label: 'Apps',
                preventDefault: true,
                description: 'Open Whatsapp',
                command: function (e) { return _this.onCardDblClick(_this.icons$.value.find(function (icon) { return icon.container === 'whatsapp'; })); }
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
        this.http.get('assets/data/cards.json').subscribe(function (cards) {
            _this.selectedCard = cards[_this.selectedIndex];
            _this.cards$.next(cards);
        });
        this.http.get('assets/data/icons.json').subscribe(function (icons) {
            _this.icons$.next(icons);
        });
        this.http.get('assets/data/sounds.json').subscribe(function (sounds) {
            _this.sounds$.next(sounds);
        });
        if (window.gameControl) {
            window.gameControl.on('connect', function (gamepad) {
                gamepad.after('button0', function () { return _this.onCardDblClick(_this.selectedCard); });
                gamepad.after('button1', function () { return console.log('button1'); });
                gamepad.after('button2', function () { return console.log('button2'); });
                gamepad.after('button3', function () { return console.log('button3'); });
                gamepad.after('button4', function () { return console.log('button4'); });
                gamepad.after('button5', function () { return console.log('button5'); });
                gamepad.after('button6', function () { return console.log('button6'); });
                gamepad.after('start', function () { return console.log('start'); });
                gamepad.after('select', function () {
                    _this.sidebarOpened = !_this.sidebarOpened;
                    _this.cd.detectChanges();
                });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(gamepad, 'right')
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["bufferCount"])(10))
                    .subscribe(function () { return _this.onGamepadRight(); });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(gamepad, 'right0')
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["bufferCount"])(10))
                    .subscribe(function () { return _this.onGamepadRight(); });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(gamepad, 'right1')
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["bufferCount"])(10))
                    .subscribe(function () { return _this.onGamepadRight(); });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(gamepad, 'left')
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["bufferCount"])(10))
                    .subscribe(function () { return _this.onGamepadLeft(); });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(gamepad, 'left0')
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["bufferCount"])(10))
                    .subscribe(function () { return _this.onGamepadLeft(); });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(gamepad, 'left1')
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["bufferCount"])(10))
                    .subscribe(function () { return _this.onGamepadLeft(); });
            });
        }
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.onGamepadLeft = function () {
        if (this.selectedIndex > 0) {
            this.selectedIndex = this.selectedIndex - 1;
            this.cd.detectChanges();
        }
    };
    AppComponent.prototype.onGamepadRight = function () {
        if (this.selectedIndex < this.cards$.value.length - 1) {
            this.selectedIndex = this.selectedIndex + 1;
            this.cd.detectChanges();
        }
    };
    AppComponent.prototype.onWheel = function (event) {
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
    };
    AppComponent.prototype.onSwipeChange = function (event) {
        var _this = this;
        var sound = new howler__WEBPACK_IMPORTED_MODULE_3__["Howl"]({
            src: [this.sounds$.value.cardSelect],
            autoplay: true,
            onend: function () {
                _this.selectedCard = _this.cards$.value[event];
            }
        });
    };
    AppComponent.prototype.onCardClick = function (event) {
        this.selectedIndex = this.cards$.value.indexOf(event);
    };
    AppComponent.prototype.onCardDblClick = function (event) {
        var _this = this;
        this.cards$.value.forEach(function (card) { return card.opening = false; });
        this.icons$.value.forEach(function (card) { return card.opening = false; });
        event.opening = true;
        var sound = new howler__WEBPACK_IMPORTED_MODULE_3__["Howl"]({
            src: [this.sounds$.value.cardOpen],
            autoplay: true,
            onend: function () {
                if (_this.ipc) {
                    _this.ipc.send('open app', event);
                }
                else {
                    window.open(event.url, 'blank');
                }
                event.opening = false;
            }
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: "\n    <ng-sidebar-container style=\"height: 100vh;\">\n\n      <!-- A sidebar -->\n      <ng-sidebar [(opened)]=\"sidebarOpened\" position=\"right\" showBackdrop=\"true\" closeOnClickBackdrop=\"true\">\n        <app-sidebar></app-sidebar>\n      </ng-sidebar>\n\n      <!-- Page content -->\n      <div ng-sidebar-content>\n\n        <ng-keyboard-shortcuts [shortcuts]=\"shortcuts\"></ng-keyboard-shortcuts>\n        <ng-keyboard-shortcuts-help [key]=\"'?'\" [closeKey]=\"'escape'\" [title]=\"'Help'\"></ng-keyboard-shortcuts-help>\n        <!-- app-header></app-header -->\n\n        <i class=\"sidebar-button mdi mdi-backburger\"\n          (click)=\"sidebarOpened = !sidebarOpened\"></i>\n\n        <div class=\"container-fluid\" (wheel)=\"onWheel($event)\">\n\n          <div class=\"cards-container\">\n            <h2>{{ selectedCard?.name }}</h2>\n            <swiper [config]=\"swiperConfig\" [(index)]=\"selectedIndex\" (indexChange)=\"onSwipeChange($event)\">\n              <div class=\"card\" *ngFor=\"let card of cards$ | async; let i = index\"\n                (click)=\"onCardClick(card)\"\n                (dblclick)=\"onCardDblClick(card)\"\n                [ngClass]=\"{\n                  'active': i === selectedIndex,\n                  'animated pulse': card.opening\n                }\">\n                <img [src]=\"card.image\">\n              </div>\n            </swiper>\n          </div>\n\n          <div class=\"swiper-pagination\"></div>\n\n        </div>\n\n        <footer class=\"footer navbar pt-4 justify-content-between\">\n            <div *ngFor=\"let icon of icons$ | async\"\n              class=\"icon-container {{ icon.container }}\"\n              (click)=\"onCardDblClick(icon)\">\n              <i class=\"mdi mdi-{{ icon.icon }}\"></i>\n            </div>\n        </footer>\n\n      </div>\n    </ng-sidebar-container>\n  "
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
/* harmony import */ var ng_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-keyboard-shortcuts */ "./node_modules/ng-keyboard-shortcuts/fesm5/ng-keyboard-shortcuts.js");
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-sidebar */ "./node_modules/ng-sidebar/lib/index.js");
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng_sidebar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sidebar.component */ "./src/app/sidebar.component.ts");










var DEFAULT_SWIPER_CONFIG = {
    direction: 'horizontal',
    slidesPerView: 'auto'
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
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
    return AppModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
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
    Object.defineProperty(SidebarComponent.prototype, "wifiConnection", {
        get: function () {
            return this._wifiConnection;
        },
        set: function (value) {
            this._wifiConnection = value;
            var roundedSignal = Math.round((value.quality + Number.EPSILON) / 10);
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarComponent.prototype, "battery", {
        get: function () {
            return this._battery;
        },
        set: function (value) {
            this._battery = value;
            var roundedLevel = Math.round((value + Number.EPSILON) * 10) * 10;
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
        },
        enumerable: true,
        configurable: true
    });
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.ipc) {
            this.ipc.send('get system metadata');
            this.ipc.on('system metadata', function (event, metadata) {
                _this.wifiConnection = metadata.wifiConnections[0];
                _this.battery = metadata.battery;
            });
        }
    };
    SidebarComponent.prototype.sendSystemSignal = function (signal) {
        if (this.ipc) {
            this.ipc.send('system signal', signal);
        }
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: "\n    <div style=\"width: 40vw;\" class=\"container pt-4\">\n\n      <div class=\"row text-center\" style=\"font-size: 30px;\">\n\n        <div class=\"col-6\">\n          <i class=\"mdi mdi-{{ wifiIcon }}\"></i> {{ wifiConnection?.ssid }}\n        </div>\n        <div class=\"col-6\">\n          <i class=\"mdi mdi-{{ batteryIcon }}\"></i> {{ battery * 100 }}%\n        </div>\n\n      </div>\n\n      <!-- div class=\"text-center\"  style=\"font-size: 80px; margin-top: 50px;\">\n          <i class=\"mdi mdi-weather-fog\"></i>\n          <br/>\n          18\u00BA\n      </div -->\n\n\n      <div class=\"row text-center\" style=\"\n        font-size: 40px;\n        position: absolute;\n        bottom: 30px;\n        width: 100%;\n      \">\n\n        <div class=\"col-4\">\n          <i class=\"mdi mdi-power\" style=\"color: #FD7272\"\n            (click)=\"sendSystemSignal('shutdown')\"></i>\n        </div>\n        <div class=\"col-4\">\n          <i class=\"mdi mdi-restart\" style=\"color: #58B19F\"\n            (click)=\"sendSystemSignal('restart')\"></i>\n        </div>\n        <div class=\"col-4\">\n          <i class=\"mdi mdi-close\" style=\"color: #FEA47F\"\n            (click)=\"sendSystemSignal('close')\"></i>\n        </div>\n\n      </div>\n\n    </div>\n  "
        })
    ], SidebarComponent);
    return SidebarComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


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
//# sourceMappingURL=main-es5.js.map