webpackJsonp([0],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_chats_chats__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    // @ViewChild('map') mapElement: ElementRef;
    // map: any;
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.goToChats = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_chats_chats__["a" /* ChatsPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/sam/Projects/ionic/saa/xxx123-002-/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="no-scroll">\n\n  <!-- <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n<ion-list>\n  <ion-item *ngFor="let item of items">\n    {{ item }}\n  </ion-item>\n</ion-list>\n\n<ion-card >\n\n</ion-card> -->\n  <div class="map-wrapper">\n    <map></map>\n    <!--REMOVE LATER-->\n    <ion-row style="position: absolute;bottom: 0;">\n      <ion-col col-12>\n        <button ion-button block (click)="goToChats(ChatsPage)">Request Rider</button>\n      </ion-col>\n    </ion-row>\n    <!--REMOVE LATER-->\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/sam/Projects/ionic/saa/xxx123-002-/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ChatsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ChatsPage = (function () {
    function ChatsPage(navCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.messages = [];
        this.socketHost = "http://localhost:3000/";
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__["connect"](this.socketHost);
        this.zone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]({ enableLongStackTrace: false });
        this.socket.on("chat message", function (msg) {
            _this.zone.run(function () {
                _this.messages.push(msg);
                _this.content.scrollToBottom();
            });
        });
    }
    ChatsPage.prototype.chatSend = function (v) {
        var data = {
            message: v.chatText,
            username: this.username
        };
        this.socket.emit('new message', data);
        this.chat = '';
    };
    ChatsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatsPage');
    };
    return ChatsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* Content */])
], ChatsPage.prototype, "content", void 0);
ChatsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-chats',template:/*ion-inline-start:"/home/sam/Projects/ionic/saa/xxx123-002-/src/pages/chats/chats.html"*/'<!--\n  Generated template for the ChatsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>chats</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-input [(ngModel)]="username" type="text" id="username" value="Client1" disabled></ion-input>\n  <hr>\n  <ion-list>\n    <div *ngFor="let data of messages">\n      <ion-item *ngIf="username === data.username">\n        <p class="chat-text" item-left>\n          <strong>{{data.username}}:</strong>\n          {{data.message}}\n        </p>\n        <p class="chat-time" item-right>\n          {{data.date | date:\'dd/MM/yyyy\'}}\n        </p>\n      </ion-item>\n      <ion-item *ngIf="username !== data.username">\n        <p class="chat-text" item-left>\n          <strong>{{data.username}}:</strong>\n          {{data.message}}\n        </p>\n        <p class="chat-time" item-right>\n          {{data.date | date:\'dd/MM/yyyy\'}}\n        </p>\n      </ion-item>\n    </div>\n  </ion-list>\n  <!-- <h6>Rider</h6><hr>\n  <ion-grid>\n    <form (ngSubmit)="onSubmit()">\n    <ion-row padding-right>\n      <ion-col col-12>\n        <div id="status"></div>\n        <ion-item id="chat">\n\n          <div id="messages"></div>\n        </ion-item>\n      </ion-col>\n      <ion-col col-8>\n        <ion-item>\n          <ion-label></ion-label>\n          <ion-textarea id="msg-block" type="password" placeholder="Enter Message....."></ion-textarea>\n        </ion-item>\n      </ion-col>\n      <ion-col col-4>\n        <button ion-button block type="submit">LOGIN</button>\n      </ion-col>\n    </ion-row>\n    </form>\n  </ion-grid> -->\n</ion-content>\n<ion-footer>\n  <form #f="ngForm">\n    <ion-grid>\n      <ion-row>\n        <ion-col width-80>\n          <ion-input [(ngModel)]="chat" name="chatText" required placeholder="Enter message"></ion-input>\n        </ion-col>\n        <ion-col width-20 center>\n          <button (click)="chatSend(f.value, f.valid)" ion-button color="light" full [disabled]="f.valid=== false">Send</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-footer>\n\n\n<script>\n  (function(){\n    var element = function(id){\n      return document.getElementById(id);\n    }\n\n    //Get Elements\n    var status = element(\'status\');\n    var messages = element(\'messages\');\n    var textarea = element(\'msg-block\');\n    var username = element(\'username\');\n\n    //Set Default Status\n    var statusDefault = status.textContent;\n\n    var setStatus = function(s){\n      //Set Status\n      status.textContent = s;\n\n      if(s !== statusDefault){\n        var delay = setTimeout(function(){\n          setStatus(statusDefault);\n        }, 4000);\n      }\n    }\n\n    //connect to socket.io\n    var socket = io.connect(\'http:127.0.0.1:8101\');\n\n    //Check for connection\n    if (socket !== undefined) {\n      console.log(\'connected to Socket......\');\n\n      socket.on(\'output\',function(data){\n        console.log(data);\n        if (data.length) {\n          for (var i = 0; i < data.length; i++) {\n            // Build Out Message Div\n            var message = document.createElement(\'div\');\n            message.setAttribute(\'class\',\'chat-message\');\n            message.textContent = data[i].name+": "+data[i].message;\n            messages.appendChild(message);\n            messages.insertBefore(message,messages.firstChild)\n          }\n        }\n      });\n\n      //Get Status From Server\n      socket.on(\'status\', function(data){\n        //get Message status\n        setStatus((typeof data === \'object\')? data.message : data);\n\n\n      });\n\n      //Handle Input\n      textarea.addEventListener(\'keydown\')\n    } else {\n      console.log(\'Not connected to Socket......\');\n    }\n\n\n  })();\n</script>\n'/*ion-inline-end:"/home/sam/Projects/ionic/saa/xxx123-002-/src/pages/chats/chats.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */]])
], ChatsPage);

// export class ChatsPage {
//
//   @ViewChild(Content) content:Content;
//   messages: any[];
//   socketHost:string = "http://localhost:8900/";
//   socket:any;
//   chat: any;
//   username: string;
//   zone: any;
//
//   constructor(public navCtrl: NavController, public navParams: NavParams) {
//     this.socket = io.connect(this.socketHost);
//     this.zone = new NgZone({enableLongStackTrace: false});
//     this.socket.on("chat message", msg=>{
//       this.zone.run(() =>{
//         this.messages.push(msg);
//         this.content.scrollToBottom();
//       })
//     })
//   }
//
//   chatSend(v){
//     let data = {
//       message: v.chatText,
//       username: this.username
//     }
//     this.socket.emit('new message',data);
//     this.chat = '';
//   }
//
//   ionViewDidLoad() {
//     console.log('ionViewDidLoad ChatsPage');
//   }
//
//   submitted = false;
//
//   onSubmit() { this.submitted = true; }
//
// }
//# sourceMappingURL=chats.js.map

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 157;

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PaymentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PaymentPage = (function () {
    function PaymentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PaymentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentPage');
    };
    return PaymentPage;
}());
PaymentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-payment',template:/*ion-inline-start:"/home/sam/Projects/ionic/saa/xxx123-002-/src/pages/payment/payment.html"*/'<!--\n  Generated template for the PaymentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Choose Payment Method</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Enter Promotion code</ion-label>\n      <ion-input type="text"></ion-input>\n      <button ion-button outline item-end icon-left>\n      <ion-icon name="star"></ion-icon>\n    </button>\n    </ion-item>\n</ion-list>\n\n<ion-card>\n  <ion-list>\n    <button ion-item>\n      <ion-icon name="cart" item-start></ion-icon>\n      Lipa na Mpesa\n    </button>\n  </ion-list>\n</ion-card>\n\n<ion-card>\n  <ion-list>\n    <button ion-item>\n      <ion-icon name="cart" item-start></ion-icon>\n      Credit/Debit\n    </button>\n  </ion-list>\n</ion-card>\n\n<ion-card>\n  <ion-list>\n    <button ion-item>\n      <ion-icon name="cart" item-start></ion-icon>\n      Lipa na Mpesa\n    </button>\n  </ion-list>\n</ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/sam/Projects/ionic/saa/xxx123-002-/src/pages/payment/payment.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], PaymentPage);

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_signup_signup__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
    }
    LoginPage.prototype.goToHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.goToRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_signup_signup__["a" /* SignupPage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/home/sam/Projects/ionic/saa/xxx123-002-/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding class="background no-scroll">\n  <!--  <div class="login-logo">\n      <img src="../assets/saafigo.png" alt="saafigo logo" />\n    </div> -->\n\n    <h1>Login</h1><hr>\n\n    <ion-grid>\n      <ion-row padding-right>\n        <ion-col col-12>\n          <ion-item>\n            <ion-label></ion-label>\n            <ion-input type="text" placeholder="Phone number or Email"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12>\n          <ion-item>\n            <ion-label></ion-label>\n            <ion-input type="password" placeholder="password"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n          <button ion-button block>google</button>\n        </ion-col>\n        <ion-col col-6>\n          <button ion-button block>facebook</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-row>\n      <ion-col col-12>\n        <button ion-button block (click)="goToHome(HomePage)">LOGIN</button>\n      </ion-col>\n    </ion-row>\n    \n    <ion-grid>\n      <ion-row>\n        <ion-col col-4>\n          <button ion-button clear  (click)="goToRegister(Signup)">Register</button>\n        </ion-col>\n        <ion-col col-8>\n          <button ion-button clear (click)="goToForgot(Forgot)">Forgot Password</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/sam/Projects/ionic/saa/xxx123-002-/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"/home/sam/Projects/ionic/saa/xxx123-002-/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar >\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="no-scroll">\n<h1>Create Account</h1><hr>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6>\n        <ion-item>\n          <ion-label></ion-label>\n          <ion-input type="text" placeholder="First Name"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-6>\n        <ion-item>\n          <ion-label></ion-label>\n          <ion-input type="text" placeholder="Last Name"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12>\n        <ion-item>\n          <ion-label></ion-label>\n          <ion-input type="text" placeholder="Email"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label></ion-label>\n          <ion-input type="text"placeholder="Mobile Number"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label></ion-label>\n          <ion-input type="Password" placeholder="Password"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12>\n        <button ion-button full nextbutton>Next</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/home/sam/Projects/ionic/saa/xxx123-002-/src/pages/signup/signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_payment_payment__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_chats_chats__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_map_map__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__directives_map_map__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_payment_payment__["a" /* PaymentPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_chats_chats__["a" /* ChatsPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_11__components_map_map__["a" /* MapComponent */],
            __WEBPACK_IMPORTED_MODULE_12__directives_map_map__["a" /* MapDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_chats_chats__["a" /* ChatsPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_payment_payment__["a" /* PaymentPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_payment_payment__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_chats_chats__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Chats', component: __WEBPACK_IMPORTED_MODULE_7__pages_chats_chats__["a" /* ChatsPage */] },
            { title: 'Payment', component: __WEBPACK_IMPORTED_MODULE_5__pages_payment_payment__["a" /* PaymentPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.show();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/sam/Projects/ionic/saa/xxx123-002-/src/app/app.html"*/'<ion-menu [content]="content" class="custom no-scroll">\n  <ion-header>\n    <div class="image">\n      <img src="../../assets/avatar.png">\n    </div>\n\n    <h2>Nicholas Gichana</h2>\n    <p>Active</p>\n\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/sam/Projects/ionic/saa/xxx123-002-/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 305:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the MapComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var MapComponent = (function () {
    function MapComponent() {
        console.log('Hello MapComponent Component');
        this.text = 'Hello World';
    }
    MapComponent.prototype.ngOnInit = function () {
        this.map = this.createMap();
    };
    // getCurrentLocation(){
    //
    //   let options = {timeout: 10000, enableHighAccuracy: true};
    //
    //   Geolocation.getCurrentPosition(options);
    // }
    MapComponent.prototype.createMap = function (location) {
        if (location === void 0) { location = new google.maps.LatLng(-4.036878, 39.669571); }
        var mapOptions = {
            center: location,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true
        };
        var MapEl = document.getElementById('map');
        var map = new google.maps.Map(MapEl, mapOptions);
    };
    return MapComponent;
}());
MapComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'map',template:/*ion-inline-start:"/home/sam/Projects/ionic/saa/xxx123-002-/src/components/map/map.html"*/'<!-- Generated template for the MapComponent component -->\n<div class="wrapper">\n  <div id="map"></div>\n</div>\n'/*ion-inline-end:"/home/sam/Projects/ionic/saa/xxx123-002-/src/components/map/map.html"*/
    }),
    __metadata("design:paramtypes", [])
], MapComponent);

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the MapDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
var MapDirective = (function () {
    function MapDirective() {
    }
    MapDirective.prototype.ngOnInit = function () {
        this.map = this.createMap();
    };
    MapDirective.prototype.createMap = function (location) {
        if (location === void 0) { location = new google.maps.LatLng(-4.036878, 39.669571); }
        var mapOptions = {
            center: location,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true
        };
        var MapEl = document.getElementById('map');
        var map = new google.maps.Map(MapEl, mapOptions);
    };
    return MapDirective;
}());
MapDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
        selector: '[map]' // Attribute selector
    }),
    __metadata("design:paramtypes", [])
], MapDirective);

//# sourceMappingURL=map.js.map

/***/ })

},[216]);
//# sourceMappingURL=main.js.map