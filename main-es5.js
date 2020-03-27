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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_gamepad_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/gamepad.service */ "./src/app/services/gamepad.service.ts");
/* harmony import */ var _services_card_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/card.service */ "./src/app/services/card.service.ts");
/* harmony import */ var _services_icon_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/icon.service */ "./src/app/services/icon.service.ts");






var AppComponent = /** @class */ (function () {
    function AppComponent(cd, gamepad, card, icon) {
        var _this = this;
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
                command: function (e) { return _this.card.openSelected(); }
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
                command: function (e) { return _this.icon.openByName('spotify'); }
            },
            {
                key: ['cmd + c'],
                label: 'Apps',
                preventDefault: true,
                description: 'Open Code',
                command: function (e) { return _this.icon.openByName('code'); }
            },
            {
                key: ['cmd + e'],
                label: 'Apps',
                preventDefault: true,
                description: 'Open Explorer',
                command: function (e) { return _this.icon.openByName('explorer'); }
            },
            {
                key: ['cmd + b'],
                label: 'Apps',
                preventDefault: true,
                description: 'Open Browser',
                command: function (e) { return _this.icon.openByName('edge'); }
            },
            {
                key: ['cmd + w'],
                label: 'Apps',
                preventDefault: true,
                description: 'Open Whatsapp',
                command: function (e) { return _this.icon.openByName('whatsapp'); }
            }
        ];
        this.listenToGamepad();
    }
    AppComponent.prototype.onGamepadLeft = function () {
        this.card.selectPrevious();
        this.cd.detectChanges();
    };
    AppComponent.prototype.onGamepadRight = function () {
        this.card.selectNext();
        this.cd.detectChanges();
    };
    AppComponent.prototype.onWheel = function (event) {
        if (event.deltaY > 0) {
            this.card.selectNext();
        }
        else {
            this.card.selectPrevious();
        }
    };
    AppComponent.prototype.onSwipeChange = function (event) {
        this.card.onSelectedIndexChange();
    };
    AppComponent.prototype.onCardClick = function (event) {
        this.card.select(event);
    };
    AppComponent.prototype.onCardDblClick = function (event) {
        this.card.open(event);
    };
    AppComponent.prototype.onIconClick = function (event) {
        this.icon.open(event);
    };
    AppComponent.prototype.listenToGamepad = function () {
        var _this = this;
        this.gamepad.connect()
            .subscribe(function () {
            _this.gamepad.after('button0')
                .subscribe(function () { return _this.card.openSelected(); });
            _this.gamepad.after('button1')
                .subscribe(function () { return console.log('button1'); });
            _this.gamepad.after('button2')
                .subscribe(function () { return console.log('button2'); });
            _this.gamepad.after('button3')
                .subscribe(function () { return console.log('button3'); });
            _this.gamepad.after('button4')
                .subscribe(function () { return console.log('button4'); });
            _this.gamepad.after('button5')
                .subscribe(function () { return console.log('button5'); });
            _this.gamepad.after('button6')
                .subscribe(function () { return console.log('button6'); });
            _this.gamepad.after('start')
                .subscribe(function () { return console.log('start'); });
            _this.gamepad.after('select')
                .subscribe(function () { return function () {
                _this.sidebarOpened = !_this.sidebarOpened;
                _this.cd.detectChanges();
            }; });
            _this.gamepad.on('right')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["bufferCount"])(10))
                .subscribe(function () { return _this.onGamepadRight(); });
            _this.gamepad.on('right0')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["bufferCount"])(10))
                .subscribe(function () { return _this.onGamepadRight(); });
            _this.gamepad.on('right1')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["bufferCount"])(10))
                .subscribe(function () { return _this.onGamepadRight(); });
            _this.gamepad.on('left')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["bufferCount"])(10))
                .subscribe(function () { return _this.onGamepadLeft(); });
            _this.gamepad.on('left0')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["bufferCount"])(10))
                .subscribe(function () { return _this.onGamepadLeft(); });
            _this.gamepad.on('left1')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["bufferCount"])(10))
                .subscribe(function () { return _this.onGamepadLeft(); });
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _services_gamepad_service__WEBPACK_IMPORTED_MODULE_3__["GamepadService"] },
        { type: _services_card_service__WEBPACK_IMPORTED_MODULE_4__["CardService"] },
        { type: _services_icon_service__WEBPACK_IMPORTED_MODULE_5__["IconService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: "\n    <ng-sidebar-container style=\"height: 100vh;\">\n\n      <!-- A sidebar -->\n      <ng-sidebar [(opened)]=\"sidebarOpened\" position=\"right\" showBackdrop=\"true\" closeOnClickBackdrop=\"true\">\n        <app-sidebar></app-sidebar>\n      </ng-sidebar>\n\n      <!-- Page content -->\n      <div ng-sidebar-content>\n\n        <ng-keyboard-shortcuts [shortcuts]=\"shortcuts\"></ng-keyboard-shortcuts>\n        <ng-keyboard-shortcuts-help [key]=\"'?'\" [closeKey]=\"'escape'\" [title]=\"'Help'\"></ng-keyboard-shortcuts-help>\n        <!-- app-header></app-header -->\n\n        <i class=\"sidebar-button mdi mdi-backburger\"\n          (click)=\"sidebarOpened = !sidebarOpened\"></i>\n\n        <div class=\"container-fluid\" (wheel)=\"onWheel($event)\">\n\n          <div class=\"cards-container\">\n            <h2>{{ card.selectedCard?.name }}</h2>\n            <swiper [config]=\"swiperConfig\" [(index)]=\"card.selectedIndex\" (indexChange)=\"onSwipeChange($event)\">\n              <div class=\"card\" *ngFor=\"let item of card.cards$ | async; let i = index\"\n                (click)=\"onCardClick(item)\"\n                (dblclick)=\"onCardDblClick(item)\"\n                [ngClass]=\"{\n                  'active': i === card.selectedIndex,\n                  'animated pulse': item.opening\n                }\">\n                <img [src]=\"item.image\">\n              </div>\n            </swiper>\n          </div>\n\n          <div class=\"swiper-pagination\"></div>\n\n        </div>\n\n        <footer class=\"footer navbar pt-4 justify-content-between\">\n            <div *ngFor=\"let icon of icon.icons$ | async\"\n              class=\"icon-container {{ icon.container }}\"\n              (click)=\"onIconClick(icon)\">\n              <i class=\"mdi mdi-{{ icon.icon }}\"></i>\n            </div>\n        </footer>\n\n      </div>\n    </ng-sidebar-container>\n  "
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

/***/ "./src/app/models/battery.ts":
/*!***********************************!*\
  !*** ./src/app/models/battery.ts ***!
  \***********************************/
/*! exports provided: Battery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Battery", function() { return Battery; });
var Battery = /** @class */ (function () {
    function Battery(value) {
        this.value = value;
        this.icon = 'battery-outline';
        var roundedLevel = Math.round((value + Number.EPSILON) * 10) * 10;
        switch (roundedLevel) {
            case 0:
                this.icon = 'battery-outline';
                break;
            case 100:
                this.icon = 'battery';
                break;
            default:
                this.icon = "battery-" + roundedLevel;
        }
    }
    Battery.ctorParameters = function () { return [
        { type: Number }
    ]; };
    return Battery;
}());



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
var wifiIcons = {
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
var WifiConnection = /** @class */ (function () {
    function WifiConnection(data) {
        this.ssid = 'NO WIFI CONNECTION';
        this.icon = 'wifi-strength-outline';
        Object.assign(this, data);
        var roundedSignal = Math.round((data.quality + Number.EPSILON) / 10);
        this.icon = "wifi-" + wifiIcons[roundedSignal];
    }
    WifiConnection.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return WifiConnection;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _sound_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sound.service */ "./src/app/services/sound.service.ts");
/* harmony import */ var _system_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./system.service */ "./src/app/services/system.service.ts");






var CardService = /** @class */ (function () {
    function CardService(http, sound, system) {
        var _this = this;
        this.http = http;
        this.sound = sound;
        this.system = system;
        this.selectedIndex = 0;
        this.selectedCard = null;
        this.cards$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.http.get('assets/data/cards.json').subscribe(function (cards) {
            _this.selectedCard = cards[_this.selectedIndex];
            _this.cards$.next(cards);
        });
    }
    CardService.prototype.select = function (card) {
        this.selectedIndex = this.cards$.value.indexOf(card);
    };
    CardService.prototype.selectNext = function () {
        if (this.selectedIndex < this.cards$.value.length - 1) {
            this.selectedIndex = this.selectedIndex + 1;
        }
    };
    CardService.prototype.selectPrevious = function () {
        if (this.selectedIndex > 0) {
            this.selectedIndex = this.selectedIndex - 1;
        }
    };
    CardService.prototype.onSelectedIndexChange = function () {
        var _this = this;
        this.sound.play('cardSelect')
            .subscribe(function () { return _this.selectedCard = _this.cards$.value[_this.selectedIndex]; });
    };
    CardService.prototype.open = function (card) {
        var _this = this;
        this.cards$.value.forEach(function (valueCard) { return valueCard.opening = false; });
        card.opening = true;
        this.sound.play('cardOpen')
            .subscribe(function () {
            _this.system.openApp(card);
            card.opening = false;
        });
    };
    CardService.prototype.openSelected = function () {
        return this.open(this.selectedCard);
    };
    CardService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _sound_service__WEBPACK_IMPORTED_MODULE_4__["SoundService"] },
        { type: _system_service__WEBPACK_IMPORTED_MODULE_5__["SystemService"] }
    ]; };
    CardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CardService);
    return CardService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var GamepadService = /** @class */ (function () {
    function GamepadService() {
        if (window.gameControl) {
            this.gameControl = window.gameControl;
        }
    }
    GamepadService.prototype.connect = function () {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.gameControl, 'connect')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (gamepad) { return _this.gamepad = gamepad; }));
    };
    GamepadService.prototype.after = function (event) {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEventPattern"])(function (handler) { return _this.gamepad.after(event, handler); });
    };
    GamepadService.prototype.on = function (event) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.gamepad, event);
    };
    GamepadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], GamepadService);
    return GamepadService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _sound_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sound.service */ "./src/app/services/sound.service.ts");
/* harmony import */ var _system_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./system.service */ "./src/app/services/system.service.ts");






var IconService = /** @class */ (function () {
    function IconService(http, sound, system) {
        var _this = this;
        this.http = http;
        this.sound = sound;
        this.system = system;
        this.icons$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.http.get('assets/data/icons.json').subscribe(function (icons) {
            _this.icons$.next(icons);
        });
    }
    IconService.prototype.open = function (icon) {
        var _this = this;
        this.icons$.value.forEach(function (valueCard) { return valueCard.opening = false; });
        icon.opening = true;
        this.sound.play('cardOpen')
            .subscribe(function () {
            _this.system.openApp(icon);
            icon.opening = false;
        });
    };
    IconService.prototype.openByName = function (name) {
        var icon = this.icons$.value.find(function (iconValue) { return iconValue.container === name; });
        return this.open(icon);
    };
    IconService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _sound_service__WEBPACK_IMPORTED_MODULE_4__["SoundService"] },
        { type: _system_service__WEBPACK_IMPORTED_MODULE_5__["SystemService"] }
    ]; };
    IconService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], IconService);
    return IconService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var IPCService = /** @class */ (function () {
    function IPCService() {
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
    IPCService.prototype.isDefined = function () {
        return this.ipc ? true : false;
    };
    IPCService.prototype.send = function (event) {
        var _a;
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        if (this.ipc) {
            (_a = this.ipc).send.apply(_a, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"]([event], params));
        }
    };
    IPCService.prototype.on = function (event) {
        if (this.ipc) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.ipc, event);
        }
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]();
    };
    IPCService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], IPCService);
    return IPCService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! howler */ "./node_modules/howler/dist/howler.js");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_4__);





var SoundService = /** @class */ (function () {
    function SoundService(http) {
        var _this = this;
        this.http = http;
        this.sounds$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
        this.http.get('assets/data/sounds.json').subscribe(function (sounds) {
            _this.sounds$.next(sounds);
        });
    }
    SoundService.prototype.play = function (soundName) {
        var sound = new howler__WEBPACK_IMPORTED_MODULE_4__["Howl"]({
            src: [this.sounds$.value[soundName]],
            autoplay: true
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(sound, 'end');
    };
    SoundService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    SoundService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], SoundService);
    return SoundService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ipc_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ipc.service */ "./src/app/services/ipc.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_wifi_connection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/wifi-connection */ "./src/app/models/wifi-connection.ts");
/* harmony import */ var _models_battery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/battery */ "./src/app/models/battery.ts");






var SystemService = /** @class */ (function () {
    function SystemService(ipc) {
        var _this = this;
        this.ipc = ipc;
        this.wifi$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](new _models_wifi_connection__WEBPACK_IMPORTED_MODULE_4__["WifiConnection"]({
            ssid: 'NO WIFI',
            quality: 0
        }));
        this.battery$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](new _models_battery__WEBPACK_IMPORTED_MODULE_5__["Battery"](1));
        this.ipc.send('get system metadata');
        this.ipc.on('system metadata').subscribe(function (metadata) {
            _this.wifi$.next(new _models_wifi_connection__WEBPACK_IMPORTED_MODULE_4__["WifiConnection"](metadata.wifiConnections[0]));
            _this.battery$.next(new _models_battery__WEBPACK_IMPORTED_MODULE_5__["Battery"](metadata.battery));
        });
    }
    SystemService.prototype.openApp = function (app) {
        if (this.ipc.isDefined()) {
            this.ipc.send('open app', app);
        }
        else {
            window.open(app.url, 'blank');
        }
    };
    SystemService.prototype.sendSignal = function (signal) {
        this.ipc.send('system signal', signal);
    };
    SystemService.ctorParameters = function () { return [
        { type: _ipc_service__WEBPACK_IMPORTED_MODULE_2__["IPCService"] }
    ]; };
    SystemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], SystemService);
    return SystemService;
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
/* harmony import */ var _services_system_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/system.service */ "./src/app/services/system.service.ts");



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(system) {
        this.system = system;
    }
    SidebarComponent.prototype.onSystemIconClick = function (signal) {
        this.system.sendSignal(signal);
    };
    SidebarComponent.ctorParameters = function () { return [
        { type: _services_system_service__WEBPACK_IMPORTED_MODULE_2__["SystemService"] }
    ]; };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: "\n    <div style=\"width: 40vw;\" class=\"container pt-4\">\n\n      <div class=\"row text-center\" style=\"font-size: 30px;\">\n\n        <div class=\"col-6\" *ngIf=\"system.wifi$ | async as wifi\">\n          <i class=\"mdi mdi-{{ wifi.icon }}\"></i> {{ wifi?.ssid }}\n        </div>\n        <div class=\"col-6\" *ngIf=\"system.battery$ | async as battery\">\n          <i class=\"mdi mdi-{{ battery.icon }}\"></i> {{ battery.value * 100 }}%\n        </div>\n\n      </div>\n\n      <!-- div class=\"text-center\"  style=\"font-size: 80px; margin-top: 50px;\">\n          <i class=\"mdi mdi-weather-fog\"></i>\n          <br/>\n          18\u00BA\n      </div -->\n\n\n      <div class=\"row text-center\" style=\"\n        font-size: 40px;\n        position: absolute;\n        bottom: 30px;\n        width: 100%;\n      \">\n\n        <div class=\"col-4\">\n          <i class=\"mdi mdi-power\" style=\"color: #FD7272\"\n            (click)=\"onSystemIconClick('shutdown')\"></i>\n        </div>\n        <div class=\"col-4\">\n          <i class=\"mdi mdi-restart\" style=\"color: #58B19F\"\n            (click)=\"onSystemIconClick('restart')\"></i>\n        </div>\n        <div class=\"col-4\">\n          <i class=\"mdi mdi-close\" style=\"color: #FEA47F\"\n            (click)=\"onSystemIconClick('close')\"></i>\n        </div>\n\n      </div>\n\n    </div>\n  "
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