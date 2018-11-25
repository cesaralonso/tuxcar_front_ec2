webpackJsonp([2,67],{

/***/ 1473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_translation_module__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_nga_module__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_component__ = __webpack_require__(1554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_routing__ = __webpack_require__(1673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__feed__ = __webpack_require__(1675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pieChart__ = __webpack_require__(1676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pieChart_pieChart_service__ = __webpack_require__(1556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__feed_feed_service__ = __webpack_require__(1555);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_translation_module__["a" /* AppTranslationModule */],
            __WEBPACK_IMPORTED_MODULE_4__theme_nga_module__["a" /* NgaModule */],
            __WEBPACK_IMPORTED_MODULE_6__dashboard_routing__["a" /* routing */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__pieChart__["a" /* PieChart */],
            __WEBPACK_IMPORTED_MODULE_5__dashboard_component__["a" /* Dashboard */],
            __WEBPACK_IMPORTED_MODULE_7__feed__["a" /* Feed */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__pieChart_pieChart_service__["a" /* PieChartService */],
            __WEBPACK_IMPORTED_MODULE_10__feed_feed_service__["a" /* FeedService */],
        ]
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 1554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dashboard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Dashboard = (function () {
    function Dashboard() {
    }
    return Dashboard;
}());
Dashboard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dashboard',
        styles: [__webpack_require__(1740)],
        template: __webpack_require__(1819)
    }),
    __metadata("design:paramtypes", [])
], Dashboard);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 1555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_auth_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_constants__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__theme__ = __webpack_require__(86);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FeedService = (function () {
    function FeedService(_http, _configuration, authService, _baConfig) {
        var _this = this;
        this._http = _http;
        this._configuration = _configuration;
        this.authService = authService;
        this._baConfig = _baConfig;
        this.all = function () {
            return _this._http.get(_this.endPoint, _this.options)
                .map(function (response) { return response.json(); })
                .catch(_this.handleError);
        };
        this.getData = function (id) {
            return _this._http.get(_this.endPoint + "/" + id, _this.options)
                .map(function (response) { return response.json(); })
                .catch(_this.handleError);
        };
        this.headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        this.headers.append('Content-Type', 'application/json; charset=UTF-8');
        this.headers.append('Authorization', 'JWT ' + this.authService.token);
        this.options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]({ headers: this.headers });
        this.endPoint = this._configuration.ServerWithApiUrl + "dashboard";
    }
    FeedService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
    };
    return FeedService;
}());
FeedService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__app_constants__["a" /* Configuration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_constants__["a" /* Configuration */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__shared_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__theme__["a" /* BaThemeConfigProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__theme__["a" /* BaThemeConfigProvider */]) === "function" && _d || Object])
], FeedService);

var _a, _b, _c, _d;
//# sourceMappingURL=feed.service.js.map

/***/ }),

/***/ 1556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_auth_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_constants__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__theme__ = __webpack_require__(86);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PieChartService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PieChartService = (function () {
    function PieChartService(_http, _configuration, authService, _baConfig) {
        var _this = this;
        this._http = _http;
        this._configuration = _configuration;
        this.authService = authService;
        this._baConfig = _baConfig;
        this.all = function () {
            return _this._http.get(_this.endPoint, _this.options)
                .map(function (response) { return response.json(); })
                .catch(_this.handleError);
        };
        this.getData = function (id) {
            return _this._http.get(_this.endPoint + "/" + id, _this.options)
                .map(function (response) { return response.json(); })
                .catch(_this.handleError);
        };
        this.headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        this.headers.append('Content-Type', 'application/json; charset=UTF-8');
        this.headers.append('Authorization', 'JWT ' + this.authService.token);
        this.options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]({ headers: this.headers });
        this.endPoint = this._configuration.ServerWithApiUrl + "dashboard";
    }
    /*
    "idchofer":6,
    "licencia":"564543356",
    "chofer":60,
    "deudafianza":500,


        getData() {
            const pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
            return [
              {
                color: pieColor,
                description: 'dashboard.casa1',
                stats: '$ 57,820',
                icon: 'money',
              }, {
                color: pieColor,
                description: 'dashboard.casa2',
                stats: '$ 89,745',
                icon: 'money',
              }, {
                color: pieColor,
                description: 'dashboard.casa3',
                stats: '$ 178,391',
                icon: 'money',
              }, {
                color: pieColor,
                description: 'dashboard.casa4',
                stats: '$ 32,592',
                icon: 'money',
              }
            ];
        }
    "deudaliquidacion":600
    */
    PieChartService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
    };
    return PieChartService;
}());
PieChartService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__app_constants__["a" /* Configuration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_constants__["a" /* Configuration */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__shared_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__theme__["a" /* BaThemeConfigProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__theme__["a" /* BaThemeConfigProvider */]) === "function" && _d || Object])
], PieChartService);

var _a, _b, _c, _d;
//# sourceMappingURL=pieChart.service.js.map

/***/ }),

/***/ 1673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_component__ = __webpack_require__(1554);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });


// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__dashboard_component__["a" /* Dashboard */],
        children: []
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes);
//# sourceMappingURL=dashboard.routing.js.map

/***/ }),

/***/ 1674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__feed_service__ = __webpack_require__(1555);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Feed; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Feed = (function () {
    function Feed(_feedService) {
        this._feedService = _feedService;
    }
    Feed.prototype.ngOnInit = function () {
        this._loadFeed();
    };
    Feed.prototype.expandMessage = function (message) {
        message.expanded = !message.expanded;
    };
    Feed.prototype._loadFeed = function () {
        var _this = this;
        this._feedService.all()
            .subscribe(function (result) { return _this.feed = result.result; });
    };
    return Feed;
}());
Feed = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'feed',
        template: __webpack_require__(1820),
        styles: [__webpack_require__(1741)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__feed_service__["a" /* FeedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__feed_service__["a" /* FeedService */]) === "function" && _a || Object])
], Feed);

var _a;
//# sourceMappingURL=feed.component.js.map

/***/ }),

/***/ 1675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__feed_component__ = __webpack_require__(1674);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__feed_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1676:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pieChart_component__ = __webpack_require__(1677);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__pieChart_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pieChart_service__ = __webpack_require__(1556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_easy_pie_chart_dist_jquery_easypiechart_js__ = __webpack_require__(1727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_easy_pie_chart_dist_jquery_easypiechart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_easy_pie_chart_dist_jquery_easypiechart_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PieChart; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PieChart = (function () {
    function PieChart(_pieChartService) {
        var _this = this;
        this._pieChartService = _pieChartService;
        this._init = false;
        this.color = 'red';
        this._pieChartService.all()
            .subscribe(function (result) { return _this.charts = result.result; });
    }
    PieChart.prototype.ngAfterViewInit = function () {
        if (!this._init) {
            this._loadPieCharts();
            this._updatePieCharts();
            this._init = true;
        }
    };
    PieChart.prototype._loadPieCharts = function () {
        jQuery('.chart').each(function () {
            var chart = jQuery(this);
            chart.easyPieChart({
                easing: 'easeOutBounce',
                onStep: function (from, to, percent) {
                    jQuery(this.el).find('.percent').text(Math.round(percent));
                },
                barColor: jQuery(this).attr('data-rel'),
                trackColor: 'rgba(0,0,0,0)',
                size: 84,
                scaleLength: 0,
                animation: 2000,
                lineWidth: 9,
                lineCap: 'round',
            });
        });
    };
    PieChart.prototype._updatePieCharts = function () {
        var getRandomArbitrary = function (min, max) { return Math.random() * (max - min) + min; };
        jQuery('.pie-charts .chart').each(function (index, chart) {
            jQuery(chart).data('easyPieChart').update(getRandomArbitrary(55, 90));
        });
    };
    return PieChart;
}());
PieChart = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'pie-chart',
        template: __webpack_require__(1821),
        styles: [__webpack_require__(1742)]
    })
    // TODO: move easypiechart to component
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__pieChart_service__["a" /* PieChartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__pieChart_service__["a" /* PieChartService */]) === "function" && _a || Object])
], PieChart);

var _a;
//# sourceMappingURL=pieChart.component.js.map

/***/ }),

/***/ 1727:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**!
 * easy-pie-chart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license 
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.1.7
 **/

(function (root, factory) {
  if (true) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(322)], __WEBPACK_AMD_DEFINE_RESULT__ = function (a0) {
      return (factory(a0));
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require("jquery"));
  } else {
    factory(jQuery);
  }
}(this, function ($) {

/**
 * Renderer to render the chart on a canvas object
 * @param {DOMElement} el      DOM element to host the canvas (root of the plugin)
 * @param {object}     options options object of the plugin
 */
var CanvasRenderer = function(el, options) {
	var cachedBackground;
	var canvas = document.createElement('canvas');

	el.appendChild(canvas);

	if (typeof(G_vmlCanvasManager) === 'object') {
		G_vmlCanvasManager.initElement(canvas);
	}

	var ctx = canvas.getContext('2d');

	canvas.width = canvas.height = options.size;

	// canvas on retina devices
	var scaleBy = 1;
	if (window.devicePixelRatio > 1) {
		scaleBy = window.devicePixelRatio;
		canvas.style.width = canvas.style.height = [options.size, 'px'].join('');
		canvas.width = canvas.height = options.size * scaleBy;
		ctx.scale(scaleBy, scaleBy);
	}

	// move 0,0 coordinates to the center
	ctx.translate(options.size / 2, options.size / 2);

	// rotate canvas -90deg
	ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI);

	var radius = (options.size - options.lineWidth) / 2;
	if (options.scaleColor && options.scaleLength) {
		radius -= options.scaleLength + 2; // 2 is the distance between scale and bar
	}

	// IE polyfill for Date
	Date.now = Date.now || function() {
		return +(new Date());
	};

	/**
	 * Draw a circle around the center of the canvas
	 * @param {strong} color     Valid CSS color string
	 * @param {number} lineWidth Width of the line in px
	 * @param {number} percent   Percentage to draw (float between -1 and 1)
	 */
	var drawCircle = function(color, lineWidth, percent) {
		percent = Math.min(Math.max(-1, percent || 0), 1);
		var isNegative = percent <= 0 ? true : false;

		ctx.beginPath();
		ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, isNegative);

		ctx.strokeStyle = color;
		ctx.lineWidth = lineWidth;

		ctx.stroke();
	};

	/**
	 * Draw the scale of the chart
	 */
	var drawScale = function() {
		var offset;
		var length;

		ctx.lineWidth = 1;
		ctx.fillStyle = options.scaleColor;

		ctx.save();
		for (var i = 24; i > 0; --i) {
			if (i % 6 === 0) {
				length = options.scaleLength;
				offset = 0;
			} else {
				length = options.scaleLength * 0.6;
				offset = options.scaleLength - length;
			}
			ctx.fillRect(-options.size/2 + offset, 0, length, 1);
			ctx.rotate(Math.PI / 12);
		}
		ctx.restore();
	};

	/**
	 * Request animation frame wrapper with polyfill
	 * @return {function} Request animation frame method or timeout fallback
	 */
	var reqAnimationFrame = (function() {
		return  window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				function(callback) {
					window.setTimeout(callback, 1000 / 60);
				};
	}());

	/**
	 * Draw the background of the plugin including the scale and the track
	 */
	var drawBackground = function() {
		if(options.scaleColor) drawScale();
		if(options.trackColor) drawCircle(options.trackColor, options.trackWidth || options.lineWidth, 1);
	};

  /**
    * Canvas accessor
   */
  this.getCanvas = function() {
    return canvas;
  };

  /**
    * Canvas 2D context 'ctx' accessor
   */
  this.getCtx = function() {
    return ctx;
  };

	/**
	 * Clear the complete canvas
	 */
	this.clear = function() {
		ctx.clearRect(options.size / -2, options.size / -2, options.size, options.size);
	};

	/**
	 * Draw the complete chart
	 * @param {number} percent Percent shown by the chart between -100 and 100
	 */
	this.draw = function(percent) {
		// do we need to render a background
		if (!!options.scaleColor || !!options.trackColor) {
			// getImageData and putImageData are supported
			if (ctx.getImageData && ctx.putImageData) {
				if (!cachedBackground) {
					drawBackground();
					cachedBackground = ctx.getImageData(0, 0, options.size * scaleBy, options.size * scaleBy);
				} else {
					ctx.putImageData(cachedBackground, 0, 0);
				}
			} else {
				this.clear();
				drawBackground();
			}
		} else {
			this.clear();
		}

		ctx.lineCap = options.lineCap;

		// if barcolor is a function execute it and pass the percent as a value
		var color;
		if (typeof(options.barColor) === 'function') {
			color = options.barColor(percent);
		} else {
			color = options.barColor;
		}

		// draw bar
		drawCircle(color, options.lineWidth, percent / 100);
	}.bind(this);

	/**
	 * Animate from some percent to some other percentage
	 * @param {number} from Starting percentage
	 * @param {number} to   Final percentage
	 */
	this.animate = function(from, to) {
		var startTime = Date.now();
		options.onStart(from, to);
		var animation = function() {
			var process = Math.min(Date.now() - startTime, options.animate.duration);
			var currentValue = options.easing(this, process, from, to - from, options.animate.duration);
			this.draw(currentValue);
			options.onStep(from, to, currentValue);
			if (process >= options.animate.duration) {
				options.onStop(from, to);
			} else {
				reqAnimationFrame(animation);
			}
		}.bind(this);

		reqAnimationFrame(animation);
	}.bind(this);
};

var EasyPieChart = function(el, opts) {
	var defaultOptions = {
		barColor: '#ef1e25',
		trackColor: '#f9f9f9',
		scaleColor: '#dfe0e0',
		scaleLength: 5,
		lineCap: 'round',
		lineWidth: 3,
		trackWidth: undefined,
		size: 110,
		rotate: 0,
		animate: {
			duration: 1000,
			enabled: true
		},
		easing: function (x, t, b, c, d) { // more can be found here: http://gsgd.co.uk/sandbox/jquery/easing/
			t = t / (d/2);
			if (t < 1) {
				return c / 2 * t * t + b;
			}
			return -c/2 * ((--t)*(t-2) - 1) + b;
		},
		onStart: function(from, to) {
			return;
		},
		onStep: function(from, to, currentValue) {
			return;
		},
		onStop: function(from, to) {
			return;
		}
	};

	// detect present renderer
	if (typeof(CanvasRenderer) !== 'undefined') {
		defaultOptions.renderer = CanvasRenderer;
	} else if (typeof(SVGRenderer) !== 'undefined') {
		defaultOptions.renderer = SVGRenderer;
	} else {
		throw new Error('Please load either the SVG- or the CanvasRenderer');
	}

	var options = {};
	var currentValue = 0;

	/**
	 * Initialize the plugin by creating the options object and initialize rendering
	 */
	var init = function() {
		this.el = el;
		this.options = options;

		// merge user options into default options
		for (var i in defaultOptions) {
			if (defaultOptions.hasOwnProperty(i)) {
				options[i] = opts && typeof(opts[i]) !== 'undefined' ? opts[i] : defaultOptions[i];
				if (typeof(options[i]) === 'function') {
					options[i] = options[i].bind(this);
				}
			}
		}

		// check for jQuery easing
		if (typeof(options.easing) === 'string' && typeof(jQuery) !== 'undefined' && jQuery.isFunction(jQuery.easing[options.easing])) {
			options.easing = jQuery.easing[options.easing];
		} else {
			options.easing = defaultOptions.easing;
		}

		// process earlier animate option to avoid bc breaks
		if (typeof(options.animate) === 'number') {
			options.animate = {
				duration: options.animate,
				enabled: true
			};
		}

		if (typeof(options.animate) === 'boolean' && !options.animate) {
			options.animate = {
				duration: 1000,
				enabled: options.animate
			};
		}

		// create renderer
		this.renderer = new options.renderer(el, options);

		// initial draw
		this.renderer.draw(currentValue);

		// initial update
		if (el.dataset && el.dataset.percent) {
			this.update(parseFloat(el.dataset.percent));
		} else if (el.getAttribute && el.getAttribute('data-percent')) {
			this.update(parseFloat(el.getAttribute('data-percent')));
		}
	}.bind(this);

	/**
	 * Update the value of the chart
	 * @param  {number} newValue Number between 0 and 100
	 * @return {object}          Instance of the plugin for method chaining
	 */
	this.update = function(newValue) {
		newValue = parseFloat(newValue);
		if (options.animate.enabled) {
			this.renderer.animate(currentValue, newValue);
		} else {
			this.renderer.draw(newValue);
		}
		currentValue = newValue;
		return this;
	}.bind(this);

	/**
	 * Disable animation
	 * @return {object} Instance of the plugin for method chaining
	 */
	this.disableAnimation = function() {
		options.animate.enabled = false;
		return this;
	};

	/**
	 * Enable animation
	 * @return {object} Instance of the plugin for method chaining
	 */
	this.enableAnimation = function() {
		options.animate.enabled = true;
		return this;
	};

	init();
};

$.fn.easyPieChart = function(options) {
	return this.each(function() {
		var instanceOptions;

		if (!$.data(this, 'easyPieChart')) {
			instanceOptions = $.extend({}, options, $(this).data());
			$.data(this, 'easyPieChart', new EasyPieChart(this, instanceOptions));
		}
	});
};


}));


/***/ }),

/***/ 1740:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "@media screen and (min-width: 1620px) {\n  .row.shift-up > * {\n    margin-top: -573px; } }\n\n@media screen and (max-width: 1620px) {\n  .card.feed-panel.large-card {\n    height: 824px; } }\n\n.user-stats-card .card-title {\n  padding: 0 0 15px; }\n\n.blurCalendar {\n  height: 475px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1741:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ":host /deep/ .feed-messages-container .feed-message {\n  padding: 10px 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.12); }\n  :host /deep/ .feed-messages-container .feed-message:first-child {\n    padding-top: 0; }\n  :host /deep/ .feed-messages-container .feed-message .hidden {\n    display: none !important; }\n  :host /deep/ .feed-messages-container .feed-message .message-icon {\n    cursor: pointer;\n    width: 60px;\n    height: 60px;\n    float: left;\n    position: relative;\n    margin-left: 20px; }\n    :host /deep/ .feed-messages-container .feed-message .message-icon > img, :host /deep/ .feed-messages-container .feed-message .message-icon .media-icon {\n      border-radius: 30px;\n      width: 100%;\n      height: 100%; }\n    :host /deep/ .feed-messages-container .feed-message .message-icon .sub-photo-icon {\n      display: inline-block;\n      padding: 4px; }\n      :host /deep/ .feed-messages-container .feed-message .message-icon .sub-photo-icon:after {\n        content: '';\n        display: inline-block;\n        width: 22px;\n        height: 22px;\n        background-size: contain; }\n      :host /deep/ .feed-messages-container .feed-message .message-icon .sub-photo-icon.video-message {\n        background: #e85656; }\n        :host /deep/ .feed-messages-container .feed-message .message-icon .sub-photo-icon.video-message:after {\n          background-image: url(\"/assets/img/theme/icon/feed/feed-video.svg\"); }\n      :host /deep/ .feed-messages-container .feed-message .message-icon .sub-photo-icon.image-message {\n        background: #90b900; }\n        :host /deep/ .feed-messages-container .feed-message .message-icon .sub-photo-icon.image-message:after {\n          width: 21px;\n          height: 21px;\n          margin-top: 1px;\n          margin-left: 1px;\n          border-radius: 5px;\n          background-image: url(\"/assets/img/theme/icon/feed/feed-image.svg\"); }\n      :host /deep/ .feed-messages-container .feed-message .message-icon .sub-photo-icon.geo-message {\n        background: #209e91; }\n        :host /deep/ .feed-messages-container .feed-message .message-icon .sub-photo-icon.geo-message:after {\n          width: 22px;\n          height: 22px;\n          background-image: url(\"/assets/img/theme/icon/feed/feed-location.svg\"); }\n    :host /deep/ .feed-messages-container .feed-message .message-icon .sub-photo-icon {\n      position: absolute;\n      width: 30px;\n      height: 30px;\n      right: -2px;\n      bottom: -4px;\n      border-radius: 15px; }\n  :host /deep/ .feed-messages-container .feed-message .text-block {\n    cursor: pointer;\n    position: relative;\n    border-radius: 5px;\n    margin: 0 0 0 80px;\n    padding: 5px 20px;\n    color: #666666;\n    width: 280px;\n    height: 70px; }\n    :host /deep/ .feed-messages-container .feed-message .text-block.text-message {\n      font-size: 12px;\n      width: inherit;\n      max-width: calc(100% - 80px);\n      height: inherit;\n      min-height: 60px; }\n      :host /deep/ .feed-messages-container .feed-message .text-block.text-message:before {\n        display: block; }\n      :host /deep/ .feed-messages-container .feed-message .text-block.text-message .message-content {\n        font-size: 12px;\n        line-height: 15px;\n        font-weight: 300; }\n    :host /deep/ .feed-messages-container .feed-message .text-block.small-message {\n      width: 155px;\n      height: 145px; }\n      :host /deep/ .feed-messages-container .feed-message .text-block.small-message .preview {\n        bottom: 0;\n        top: initial;\n        height: 87px; }\n        :host /deep/ .feed-messages-container .feed-message .text-block.small-message .preview img {\n          width: 155px;\n          height: 87px;\n          border-radius: 0 0 5px 5px; }\n  :host /deep/ .feed-messages-container .feed-message .message-header {\n    font-size: 12px;\n    padding-bottom: 5px; }\n    :host /deep/ .feed-messages-container .feed-message .message-header .author {\n      font-size: 13px;\n      padding-right: 5px; }\n  :host /deep/ .feed-messages-container .feed-message .message-content {\n    font-size: 18px;\n    line-height: 20px; }\n  :host /deep/ .feed-messages-container .feed-message .preview {\n    transition: 0s linear all;\n    display: inline-block; }\n    :host /deep/ .feed-messages-container .feed-message .preview img {\n      padding-top: 10px;\n      width: 100%;\n      height: auto;\n      float: none !important; }\n  :host /deep/ .feed-messages-container .feed-message .message-time {\n    width: 100%;\n    left: 0;\n    font-size: 11px;\n    padding-top: 10px;\n    color: #949494;\n    margin-bottom: 5px; }\n    :host /deep/ .feed-messages-container .feed-message .message-time .post-time {\n      float: left; }\n    :host /deep/ .feed-messages-container .feed-message .message-time .ago-time {\n      float: right; }\n\n:host /deep/ .feed-messages-container .line-clamp {\n  display: block;\n  display: -webkit-box;\n  position: relative;\n  line-height: 1.2;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 0 !important; }\n\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  :host /deep/ .feed-messages-container .line-clamp:after {\n    content: '...';\n    text-align: right;\n    bottom: 0;\n    right: 0;\n    width: 25%;\n    display: block;\n    position: absolute;\n    height: calc(1em * 1.2); } }\n\n@supports (-webkit-line-clamp: 1) {\n  :host /deep/ .feed-messages-container .line-clamp:after {\n    display: none !important; } }\n\n:host /deep/ .feed-messages-container .line-clamp-1 {\n  -webkit-line-clamp: 1;\n  height: calc(1em * 1.2 * 1); }\n\n:host /deep/ .feed-messages-container .line-clamp-2 {\n  -webkit-line-clamp: 2;\n  height: calc(1em * 1.2 * 2); }\n\n:host /deep/ .feed-messages-container .line-clamp-3 {\n  -webkit-line-clamp: 3;\n  height: calc(1em * 1.2 * 3); }\n\n:host /deep/ .feed-messages-container .line-clamp-4 {\n  -webkit-line-clamp: 4;\n  height: calc(1em * 1.2 * 4); }\n\n:host /deep/ .feed-messages-container .line-clamp-5 {\n  -webkit-line-clamp: 5;\n  height: calc(1em * 1.2 * 5); }\n\n/deep/.feed-panel .card-body {\n  padding: 10px 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1742:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ":host /deep/ .pie-charts {\n  color: #666666; }\n  :host /deep/ .pie-charts .pie-chart-item-container {\n    position: relative;\n    padding: 0 15px;\n    float: left;\n    box-sizing: border-box; }\n    :host /deep/ .pie-charts .pie-chart-item-container .card {\n      height: 114px; }\n  @media screen and (min-width: 1325px) {\n    :host /deep/ .pie-charts .pie-chart-item-container {\n      max-width: 25%;\n      -ms-flex: 0 0 25%;\n          flex: 0 0 25%; } }\n  @media screen and (min-width: 700px) and (max-width: 1325px) {\n    :host /deep/ .pie-charts .pie-chart-item-container {\n      max-width: 50%;\n      -ms-flex: 0 0 50%;\n          flex: 0 0 50%; } }\n  @media screen and (max-width: 700px) {\n    :host /deep/ .pie-charts .pie-chart-item-container {\n      max-width: 100%;\n      -ms-flex: 0 0 100%;\n          flex: 0 0 100%; } }\n  :host /deep/ .pie-charts .pie-chart-item {\n    position: relative; }\n    :host /deep/ .pie-charts .pie-chart-item .chart-icon {\n      position: absolute;\n      right: 0;\n      top: 3px; }\n  @media screen and (min-width: 1325px) and (max-width: 1650px), (min-width: 700px) and (max-width: 830px), (max-width: 400px) {\n    :host /deep/ .pie-charts .chart-icon {\n      display: none; } }\n  :host /deep/ .pie-charts .chart {\n    position: relative;\n    display: inline-block;\n    width: 84px;\n    height: 84px;\n    text-align: center;\n    float: left; }\n  :host /deep/ .pie-charts .chart canvas {\n    position: absolute;\n    top: 0;\n    left: 0; }\n  :host /deep/ .pie-charts .percent {\n    display: inline-block;\n    line-height: 84px;\n    z-index: 2;\n    font-size: 16px; }\n  :host /deep/ .pie-charts .percent:after {\n    content: '%';\n    margin-left: 0.1em;\n    font-size: .8em; }\n  :host /deep/ .pie-charts .description {\n    display: inline-block;\n    padding: 20px 0 0 20px;\n    font-size: 18px;\n    opacity: 0.9; }\n    :host /deep/ .pie-charts .description .description-stats {\n      padding-top: 8px;\n      font-size: 24px; }\n  :host /deep/ .pie-charts .angular {\n    margin-top: 100px; }\n  :host /deep/ .pie-charts .angular .chart {\n    margin-top: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1819:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div class=\"col-xlg-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12\">\r\n    <!--<ba-card cardTitle=\"Pagos Atrasados\"\r\n             baCardClass=\"large-card with-scroll feed-panel\">\r\n      <feed></feed>\r\n    </ba-card>-->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 1820:
/***/ (function(module, exports) {

module.exports = "<div class=\"feed-messages-container\">\r\n  <div class=\"feed-message\" *ngFor=\"let message of feed\">\r\n    <div class=\"message-icon\">\r\n      <img src=\"./assets/img/theme/no-photo.png\" class=\"photo-icon\" >\r\n      <span class=\"sub-photo-icon\" [ngClass]=\"message.type\"></span>\r\n    </div>\r\n    <div class=\"text-block text-message\">\r\n      <div class=\"message-header\">\r\n        <span class=\"author\">Chofer <strong>{{ message.nombre }} </strong></span>\r\n      </div>\r\n      <div class=\"message-content\">\r\n        <span *ngIf=\"message.preview\">\r\n          <i class=\"fa fa-down\"></i>\r\n        </span>\r\n      </div>\r\n      <div >\r\n        <div class=\"post-time\">\r\n          Deuda Liquidación: <strong>{{ message.deudaliquidacion | currency: 'MXN' }}</strong>\r\n        </div>\r\n        <div class=\"ago-time\">\r\n          Fianza Pagada: {{ message.deudafianza | currency: 'MXN' }}\r\n        </div>\r\n      </div>\r\n      <div class=\"message-time\" >\r\n          <br>\r\n        <div class=\"post-time\">\r\n          Permiso: <strong>{{ message.numero }}</strong>\r\n        </div>\r\n        <div class=\"ago-time\">\r\n          Licencia: {{ message.licencia }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>  "

/***/ }),

/***/ 1821:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12\">\r\n    <h1>Choferes Morosos</h1>\r\n  </div>\r\n</div>\r\n<div class=\"row pie-charts\">\r\n  \r\n  <ba-card *ngFor=\"let chart of charts\" class=\"pie-chart-item-container col-xlg-4 col-lg-4 col-md-6 col-sm-12 col-12\">\r\n\r\n    <div class=\"pie-chart-item\">\r\n      <div class=\"description\">\r\n        <div><small>Nombre:</small> <strong>{{ chart.nombre }}</strong></div>\r\n        <br>\r\n        <div><small>Deuda Liquidación:</small> <strong>$ {{ chart.deudaliquidacion }}</strong></div>\r\n        <br>\r\n        <div><small>Fianza Pagada:</small> <strong>$ {{ chart.fianza - chart.deudafianza }}</strong></div>\r\n      </div>\r\n      <i class=\"chart-icon i-money\"></i>\r\n    </div>\r\n\r\n  </ba-card>\r\n</div>\r\n"

/***/ })

});
//# sourceMappingURL=2.chunk.js.map