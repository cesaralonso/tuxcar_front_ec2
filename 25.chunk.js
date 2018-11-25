webpackJsonp([25,67],{

/***/ 1496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_bootstrap_modal__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_translation_module__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__theme_nga_module__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_datatable__ = __webpack_require__(1527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__permisotaxiasignados_routing__ = __webpack_require__(1700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__permisotaxiasignados_component__ = __webpack_require__(1600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_permisotaxiasignados_table_permisotaxiasignados_service__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_permisotaxiasignados_table_permisotaxiasignados_table_component__ = __webpack_require__(1599);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermisotaxiasignadosModule", function() { return PermisotaxiasignadosModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var PermisotaxiasignadosModule = (function () {
    function PermisotaxiasignadosModule() {
    }
    return PermisotaxiasignadosModule;
}());
PermisotaxiasignadosModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_translation_module__["a" /* AppTranslationModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__theme_nga_module__["a" /* NgaModule */],
            __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["b" /* NgbRatingModule */],
            __WEBPACK_IMPORTED_MODULE_8__permisotaxiasignados_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_7_angular2_datatable__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["c" /* NgbModalModule */],
            __WEBPACK_IMPORTED_MODULE_0_ng2_bootstrap_modal__["BootstrapModalModule"].forRoot({ container: document.body })
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__permisotaxiasignados_component__["a" /* PermisotaxiasignadosComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_permisotaxiasignados_table_permisotaxiasignados_table_component__["a" /* PermisotaxiasignadosTableComponent */],
        ],
        entryComponents: [],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__components_permisotaxiasignados_table_permisotaxiasignados_service__["a" /* PermisotaxiasignadosService */]
        ]
    })
], PermisotaxiasignadosModule);

//# sourceMappingURL=permisotaxiasignados.module.js.map

/***/ }),

/***/ 1523:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var _ = __webpack_require__(9);
var Rx_1 = __webpack_require__(607);
var DataTable = (function () {
    function DataTable(differs) {
        this.differs = differs;
        this.inputData = [];
        this.sortBy = "";
        this.sortOrder = "asc";
        this.sortByChange = new core_1.EventEmitter();
        this.sortOrderChange = new core_1.EventEmitter();
        this.rowsOnPage = 1000;
        this.activePage = 1;
        this.mustRecalculateData = false;
        this.onSortChange = new Rx_1.ReplaySubject(1);
        this.onPageChange = new core_1.EventEmitter();
        this.diff = differs.find([]).create(null);
    }
    DataTable.prototype.getSort = function () {
        return { sortBy: this.sortBy, sortOrder: this.sortOrder };
    };
    DataTable.prototype.setSort = function (sortBy, sortOrder) {
        if (this.sortBy !== sortBy || this.sortOrder !== sortOrder) {
            this.sortBy = sortBy;
            this.sortOrder = _.includes(["asc", "desc"], sortOrder) ? sortOrder : "asc";
            this.mustRecalculateData = true;
            this.onSortChange.next({ sortBy: sortBy, sortOrder: sortOrder });
            this.sortByChange.emit(this.sortBy);
            this.sortOrderChange.emit(this.sortOrder);
        }
    };
    DataTable.prototype.getPage = function () {
        return { activePage: this.activePage, rowsOnPage: this.rowsOnPage, dataLength: this.inputData.length };
    };
    DataTable.prototype.setPage = function (activePage, rowsOnPage) {
        if (this.rowsOnPage !== rowsOnPage || this.activePage !== activePage) {
            this.activePage = this.activePage !== activePage ? activePage : this.calculateNewActivePage(this.rowsOnPage, rowsOnPage);
            this.rowsOnPage = rowsOnPage;
            this.mustRecalculateData = true;
            this.onPageChange.emit({
                activePage: this.activePage,
                rowsOnPage: this.rowsOnPage,
                dataLength: this.inputData ? this.inputData.length : 0
            });
        }
    };
    DataTable.prototype.calculateNewActivePage = function (previousRowsOnPage, currentRowsOnPage) {
        var firstRowOnPage = (this.activePage - 1) * previousRowsOnPage + 1;
        var newActivePage = Math.ceil(firstRowOnPage / currentRowsOnPage);
        return newActivePage;
    };
    DataTable.prototype.recalculatePage = function () {
        var lastPage = Math.ceil(this.inputData.length / this.rowsOnPage);
        this.activePage = lastPage < this.activePage ? lastPage : this.activePage;
        this.activePage = this.activePage || 1;
        this.onPageChange.emit({
            activePage: this.activePage,
            rowsOnPage: this.rowsOnPage,
            dataLength: this.inputData.length
        });
    };
    DataTable.prototype.ngOnChanges = function (changes) {
        if (changes["rowsOnPage"]) {
            this.rowsOnPage = changes["rowsOnPage"].previousValue;
            this.setPage(this.activePage, changes["rowsOnPage"].currentValue);
            this.mustRecalculateData = true;
        }
        if (changes["sortBy"] || changes["sortOrder"]) {
            if (!_.includes(["asc", "desc"], this.sortOrder)) {
                console.warn("angular2-datatable: value for input mfSortOrder must be one of ['asc', 'desc'], but is:", this.sortOrder);
                this.sortOrder = "asc";
            }
            if (this.sortBy) {
                this.onSortChange.next({ sortBy: this.sortBy, sortOrder: this.sortOrder });
            }
            this.mustRecalculateData = true;
        }
        if (changes["inputData"]) {
            this.inputData = changes["inputData"].currentValue || [];
            this.recalculatePage();
            this.mustRecalculateData = true;
        }
    };
    DataTable.prototype.ngDoCheck = function () {
        var changes = this.diff.diff(this.inputData);
        if (changes) {
            this.recalculatePage();
            this.mustRecalculateData = true;
        }
        if (this.mustRecalculateData) {
            this.fillData();
            this.mustRecalculateData = false;
        }
    };
    DataTable.prototype.fillData = function () {
        this.activePage = this.activePage;
        this.rowsOnPage = this.rowsOnPage;
        var offset = (this.activePage - 1) * this.rowsOnPage;
        var data = this.inputData;
        var sortBy = this.sortBy;
        if (typeof sortBy === 'string' || sortBy instanceof String) {
            data = _.orderBy(data, this.caseInsensitiveIteratee(sortBy), [this.sortOrder]);
        }
        else {
            data = _.orderBy(data, sortBy, [this.sortOrder]);
        }
        data = _.slice(data, offset, offset + this.rowsOnPage);
        this.data = data;
    };
    DataTable.prototype.caseInsensitiveIteratee = function (sortBy) {
        return function (row) {
            var value = row;
            for (var _i = 0, _a = sortBy.split('.'); _i < _a.length; _i++) {
                var sortByProperty = _a[_i];
                if (value) {
                    value = value[sortByProperty];
                }
            }
            if (value && typeof value === 'string' || value instanceof String) {
                return value.toLowerCase();
            }
            return value;
        };
    };
    return DataTable;
}());
__decorate([
    core_1.Input("mfData"),
    __metadata("design:type", Array)
], DataTable.prototype, "inputData", void 0);
__decorate([
    core_1.Input("mfSortBy"),
    __metadata("design:type", Object)
], DataTable.prototype, "sortBy", void 0);
__decorate([
    core_1.Input("mfSortOrder"),
    __metadata("design:type", Object)
], DataTable.prototype, "sortOrder", void 0);
__decorate([
    core_1.Output("mfSortByChange"),
    __metadata("design:type", Object)
], DataTable.prototype, "sortByChange", void 0);
__decorate([
    core_1.Output("mfSortOrderChange"),
    __metadata("design:type", Object)
], DataTable.prototype, "sortOrderChange", void 0);
__decorate([
    core_1.Input("mfRowsOnPage"),
    __metadata("design:type", Object)
], DataTable.prototype, "rowsOnPage", void 0);
__decorate([
    core_1.Input("mfActivePage"),
    __metadata("design:type", Object)
], DataTable.prototype, "activePage", void 0);
DataTable = __decorate([
    core_1.Directive({
        selector: 'table[mfData]',
        exportAs: 'mfDataTable'
    }),
    __metadata("design:paramtypes", [core_1.IterableDiffers])
], DataTable);
exports.DataTable = DataTable;
//# sourceMappingURL=DataTable.js.map

/***/ }),

/***/ 1524:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var DataTable_1 = __webpack_require__(1523);
var _ = __webpack_require__(9);
var BootstrapPaginator = (function () {
    function BootstrapPaginator() {
        this.rowsOnPageSet = [];
        this.minRowsOnPage = 0;
    }
    BootstrapPaginator.prototype.ngOnChanges = function (changes) {
        if (changes.rowsOnPageSet) {
            this.minRowsOnPage = _.min(this.rowsOnPageSet);
        }
    };
    return BootstrapPaginator;
}());
__decorate([
    core_1.Input("rowsOnPageSet"),
    __metadata("design:type", Object)
], BootstrapPaginator.prototype, "rowsOnPageSet", void 0);
__decorate([
    core_1.Input("mfTable"),
    __metadata("design:type", DataTable_1.DataTable)
], BootstrapPaginator.prototype, "mfTable", void 0);
BootstrapPaginator = __decorate([
    core_1.Component({
        selector: "mfBootstrapPaginator",
        template: "\n    <mfPaginator #p [mfTable]=\"mfTable\">\n        <ul class=\"pagination\" *ngIf=\"p.dataLength > p.rowsOnPage\">\n            <li class=\"page-item\" [class.disabled]=\"p.activePage <= 1\" (click)=\"p.setPage(1)\">\n                <a class=\"page-link\" style=\"cursor: pointer\">&laquo;</a>\n            </li>\n            <li class=\"page-item\" *ngIf=\"p.activePage > 4 && p.activePage + 1 > p.lastPage\" (click)=\"p.setPage(p.activePage - 4)\">\n                <a class=\"page-link\" style=\"cursor: pointer\">{{p.activePage-4}}</a>\n            </li>\n            <li class=\"page-item\" *ngIf=\"p.activePage > 3 && p.activePage + 2 > p.lastPage\" (click)=\"p.setPage(p.activePage - 3)\">\n                <a class=\"page-link\" style=\"cursor: pointer\">{{p.activePage-3}}</a>\n            </li>\n            <li class=\"page-item\" *ngIf=\"p.activePage > 2\" (click)=\"p.setPage(p.activePage - 2)\">\n                <a class=\"page-link\" style=\"cursor: pointer\">{{p.activePage-2}}</a>\n            </li>\n            <li class=\"page-item\" *ngIf=\"p.activePage > 1\" (click)=\"p.setPage(p.activePage - 1)\">\n                <a class=\"page-link\" style=\"cursor: pointer\">{{p.activePage-1}}</a>\n            </li>\n            <li class=\"page-item active\">\n                <a class=\"page-link\" style=\"cursor: pointer\">{{p.activePage}}</a>\n            </li>\n            <li class=\"page-item\" *ngIf=\"p.activePage + 1 <= p.lastPage\" (click)=\"p.setPage(p.activePage + 1)\">\n                <a class=\"page-link\" style=\"cursor: pointer\">{{p.activePage+1}}</a>\n            </li>\n            <li class=\"page-item\" *ngIf=\"p.activePage + 2 <= p.lastPage\" (click)=\"p.setPage(p.activePage + 2)\">\n                <a class=\"page-link\" style=\"cursor: pointer\">{{p.activePage+2}}</a>\n            </li>\n            <li class=\"page-item\" *ngIf=\"p.activePage + 3 <= p.lastPage && p.activePage < 3\" (click)=\"p.setPage(p.activePage + 3)\">\n                <a class=\"page-link\" style=\"cursor: pointer\">{{p.activePage+3}}</a>\n            </li>\n            <li class=\"page-item\" *ngIf=\"p.activePage + 4 <= p.lastPage && p.activePage < 2\" (click)=\"p.setPage(p.activePage + 4)\">\n                <a class=\"page-link\" style=\"cursor: pointer\">{{p.activePage+4}}</a>\n            </li>\n            <li class=\"page-item\" [class.disabled]=\"p.activePage >= p.lastPage\" (click)=\"p.setPage(p.lastPage)\">\n                <a class=\"page-link\" style=\"cursor: pointer\">&raquo;</a>\n            </li>\n        </ul>\n        <ul class=\"pagination pull-right float-sm-right\" *ngIf=\"p.dataLength > minRowsOnPage\">\n            <li class=\"page-item\" *ngFor=\"let rows of rowsOnPageSet\" [class.active]=\"p.rowsOnPage===rows\" (click)=\"p.setRowsOnPage(rows)\">\n                <a class=\"page-link\" style=\"cursor: pointer\">{{rows}}</a>\n            </li>\n        </ul>\n    </mfPaginator>\n    "
    })
], BootstrapPaginator);
exports.BootstrapPaginator = BootstrapPaginator;
//# sourceMappingURL=BootstrapPaginator.js.map

/***/ }),

/***/ 1525:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var DataTable_1 = __webpack_require__(1523);
var DefaultSorter = (function () {
    function DefaultSorter(mfTable) {
        this.mfTable = mfTable;
        this.isSortedByMeAsc = false;
        this.isSortedByMeDesc = false;
    }
    DefaultSorter.prototype.ngOnInit = function () {
        var _this = this;
        this.mfTable.onSortChange.subscribe(function (event) {
            _this.isSortedByMeAsc = (event.sortBy == _this.sortBy && event.sortOrder == "asc");
            _this.isSortedByMeDesc = (event.sortBy == _this.sortBy && event.sortOrder == "desc");
        });
    };
    DefaultSorter.prototype.sort = function () {
        if (this.isSortedByMeAsc) {
            this.mfTable.setSort(this.sortBy, "desc");
        }
        else {
            this.mfTable.setSort(this.sortBy, "asc");
        }
    };
    return DefaultSorter;
}());
__decorate([
    core_1.Input("by"),
    __metadata("design:type", String)
], DefaultSorter.prototype, "sortBy", void 0);
DefaultSorter = __decorate([
    core_1.Component({
        selector: "mfDefaultSorter",
        template: "\n        <a style=\"cursor: pointer\" (click)=\"sort()\" class=\"text-nowrap\">\n            <ng-content></ng-content>\n            <span *ngIf=\"isSortedByMeAsc\" class=\"glyphicon glyphicon-triangle-top\" aria-hidden=\"true\"></span>\n            <span *ngIf=\"isSortedByMeDesc\" class=\"glyphicon glyphicon-triangle-bottom\" aria-hidden=\"true\"></span>\n        </a>"
    }),
    __metadata("design:paramtypes", [DataTable_1.DataTable])
], DefaultSorter);
exports.DefaultSorter = DefaultSorter;
//# sourceMappingURL=DefaultSorter.js.map

/***/ }),

/***/ 1526:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = __webpack_require__(0);
var DataTable_1 = __webpack_require__(1523);
var Paginator = (function () {
    function Paginator(injectMfTable) {
        var _this = this;
        this.injectMfTable = injectMfTable;
        this.dataLength = 0;
        this.onPageChangeSubscriber = function (event) {
            _this.activePage = event.activePage;
            _this.rowsOnPage = event.rowsOnPage;
            _this.dataLength = event.dataLength;
            _this.lastPage = Math.ceil(_this.dataLength / _this.rowsOnPage);
        };
    }
    Paginator.prototype.ngOnChanges = function (changes) {
        this.mfTable = this.inputMfTable || this.injectMfTable;
        this.onPageChangeSubscriber(this.mfTable.getPage());
        this.mfTable.onPageChange.subscribe(this.onPageChangeSubscriber);
    };
    Paginator.prototype.setPage = function (pageNumber) {
        this.mfTable.setPage(pageNumber, this.rowsOnPage);
    };
    Paginator.prototype.setRowsOnPage = function (rowsOnPage) {
        this.mfTable.setPage(this.activePage, rowsOnPage);
    };
    return Paginator;
}());
__decorate([
    core_1.Input("mfTable"),
    __metadata("design:type", DataTable_1.DataTable)
], Paginator.prototype, "inputMfTable", void 0);
Paginator = __decorate([
    core_1.Component({
        selector: "mfPaginator",
        template: "<ng-content></ng-content>"
    }),
    __param(0, core_1.Optional()),
    __metadata("design:paramtypes", [DataTable_1.DataTable])
], Paginator);
exports.Paginator = Paginator;
//# sourceMappingURL=Paginator.js.map

/***/ }),

/***/ 1527:
/***/ (function(module, exports, __webpack_require__) {

var dataTable_directive = __webpack_require__(1523);
var defaultSorter_directive = __webpack_require__(1525);
var paginator_component = __webpack_require__(1526);
var bootstrapPaginator_component = __webpack_require__(1524);
var dataTable_module = __webpack_require__(1528);

exports.DataTable = dataTable_directive.DataTable;
exports.DataEvent = dataTable_directive.DataEvent;
exports.PageEvent = dataTable_directive.PageEvent;
exports.SortEvent = dataTable_directive.SortEvent;
exports.DefaultSorter = defaultSorter_directive.DefaultSorter;
exports.Paginator = paginator_component.Paginator;
exports.BootstrapPaginator = bootstrapPaginator_component.BootstrapPaginator;
exports.DataTableModule = dataTable_module.DataTableModule;


/***/ }),

/***/ 1528:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(27);
var DataTable_1 = __webpack_require__(1523);
var DefaultSorter_1 = __webpack_require__(1525);
var Paginator_1 = __webpack_require__(1526);
var BootstrapPaginator_1 = __webpack_require__(1524);
var DataTableModule = (function () {
    function DataTableModule() {
    }
    return DataTableModule;
}());
DataTableModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [
            DataTable_1.DataTable,
            DefaultSorter_1.DefaultSorter,
            Paginator_1.Paginator,
            BootstrapPaginator_1.BootstrapPaginator
        ],
        exports: [
            DataTable_1.DataTable,
            DefaultSorter_1.DefaultSorter,
            Paginator_1.Paginator,
            BootstrapPaginator_1.BootstrapPaginator
        ]
    })
], DataTableModule);
exports.DataTableModule = DataTableModule;
//# sourceMappingURL=DataTableModule.js.map

/***/ }),

/***/ 1599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alertas_components_alertas_table_alertas_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_socket_service__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vehiculotallers_components_vehiculotallers_table_vehiculotallers_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_auth_localstorage_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__choferestados_components_choferestados_table_choferestados_service__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__permisotaxiestados_components_permisotaxiestados_table_permisotaxiestados_service__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__permisotaxis_components_permisotaxis_table_permisotaxis_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chofers_components_chofers_table_chofers_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_bootstrap_modal__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_toastr__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__permisotaxiasignados_service__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__permisotaxiasignados_add_modal_permisotaxiasignados_add_modal_component__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__permisotaxiasignados_edit_modal_permisotaxiasignados_edit_modal_component__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__corralons_components_corralons_table_corralons_add_modal_corralons_add_modal_component__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__vehiculotallers_components_vehiculotallers_table_vehiculotallers_add_modal_vehiculotallers_add_modal_component__ = __webpack_require__(103);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermisotaxiasignadosTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var PermisotaxiasignadosTableComponent = (function () {
    function PermisotaxiasignadosTableComponent(service, permisotaxisService, permisotaxiestadosService, authLocalstorage, choferestadosService, vehiculotallersService, chofersService, socketService, alertasService, toastrService, dialogService, route, router) {
        this.service = service;
        this.permisotaxisService = permisotaxisService;
        this.permisotaxiestadosService = permisotaxiestadosService;
        this.authLocalstorage = authLocalstorage;
        this.choferestadosService = choferestadosService;
        this.vehiculotallersService = vehiculotallersService;
        this.chofersService = chofersService;
        this.socketService = socketService;
        this.alertasService = alertasService;
        this.toastrService = toastrService;
        this.dialogService = dialogService;
        this.route = route;
        this.router = router;
        this._chofer = [];
        this._permisotaxi = [];
        this._permisotaxi_activo = [];
        this._permisotaxi_tallernodisponible = [];
        this._permisotaxi_tallerdisponible = [];
        this._permisotaxi_corralonnodisponible = [];
        this._permisotaxi_corralondisponible = [];
        this._permisotaxi_mantenimientonodisponible = [];
        this._permisotaxi_mantenimientodisponible = [];
        this._permisotaxi_chocadonodisponible = [];
        this._permisotaxi_chocadodisponible = [];
        this._chofer_activo = [];
        this.filterQuery = '';
        this.rowsOnPage = 10;
        this.sortBy = 'idpermisotaxiasignado';
        this.sortOrder = 'asc';
        this.permisotaxiasignado = {
            'chofer_idchofer': undefined,
            'permisotaxi_idpermisotaxi': undefined,
        };
    }
    PermisotaxiasignadosTableComponent.prototype.ngOnInit = function () {
        this.refill();
        this.iniciarDragAndDrop();
        this.getChofer();
        this.getPermisotaxi();
        // FECHA Y HORA ACTUAL
        var date = this.authLocalstorage.getCurrentDateAndHour();
        this.fecha = date.fecha;
        this.hora = date.hora;
    };
    PermisotaxiasignadosTableComponent.prototype.refill = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['idchofer'] !== undefined) {
                var idchofer = +params['idchofer'];
                _this.findByIdChofer(idchofer);
                _this.backpage = true;
            }
            if (params['idestado'] !== undefined) {
                var idestado = +params['idestado'];
                _this.findByIdEstado(idestado);
                _this.backpage = true;
            }
            if (params['idpermisotaxi'] !== undefined) {
                var idpermisotaxi = +params['idpermisotaxi'];
                _this.findByIdPermisotaxi(idpermisotaxi);
                _this.backpage = true;
            }
            if (!_this.backpage) {
                _this.getAll();
            }
        });
    };
    PermisotaxiasignadosTableComponent.prototype.filtrarResultados = function (data) {
        var activo = [];
        var disponible = [];
        var tallernodisponible = [];
        var tallerdisponible = [];
        var corralonnodisponible = [];
        var corralondisponible = [];
        var mantenimientonodisponible = [];
        var mantenimientodisponible = [];
        var chocadonodisponible = [];
        var chocadodisponible = [];
        if (data.success) {
            if (data.result[0]) {
                for (var element in data.result) {
                    if (data.result.hasOwnProperty(element)) {
                        if (data.result[element].estado_estado_idestado === 'ACTIVO') {
                            activo.push(data.result[element]);
                        }
                        else if (data.result[element].estado_estado_idestado === 'DISPONIBLE') {
                            disponible.push(data.result[element]);
                        }
                        else if (data.result[element].estado_estado_idestado === 'TALLER NO DISPONIBLE') {
                            tallernodisponible.push(data.result[element]);
                        }
                        else if (data.result[element].estado_estado_idestado === 'TALLER DISPONIBLE') {
                            tallerdisponible.push(data.result[element]);
                        }
                        else if (data.result[element].estado_estado_idestado === 'CORRALON NO DISPONIBLE') {
                            corralonnodisponible.push(data.result[element]);
                        }
                        else if (data.result[element].estado_estado_idestado === 'CORRALON DISPONIBLE') {
                            corralondisponible.push(data.result[element]);
                        }
                        else if (data.result[element].estado_estado_idestado === 'MANTENIMIENTO NO DISPONIBLE') {
                            mantenimientonodisponible.push(data.result[element]);
                        }
                        else if (data.result[element].estado_estado_idestado === 'MANTENIMIENTO DISPONIBLE') {
                            mantenimientodisponible.push(data.result[element]);
                        }
                        else if (data.result[element].estado_estado_idestado === 'CHOCADO NO DISPONIBLE') {
                            chocadonodisponible.push(data.result[element]);
                        }
                        else if (data.result[element].estado_estado_idestado === 'CHOCADO DISPONIBLE') {
                            chocadodisponible.push(data.result[element]);
                        }
                    }
                }
                var result = {
                    'activo': activo,
                    'disponible': disponible,
                    'tallernodisponible': tallernodisponible,
                    'tallerdisponible': tallerdisponible,
                    'corralonnodisponible': corralonnodisponible,
                    'corralondisponible': corralondisponible,
                    'mantenimientonodisponible': mantenimientonodisponible,
                    'mantenimientodisponible': mantenimientodisponible,
                    'chocadonodisponible': chocadonodisponible,
                    'chocadodisponible': chocadodisponible,
                };
                return result;
            }
            else {
                var result = {
                    'activo': [],
                    'disponible': [],
                    'tallernodisponible': [],
                    'tallerdisponible': [],
                    'corralonnodisponible': [],
                    'corralondisponible': [],
                    'mantenimientonodisponible': [],
                    'mantenimientodisponible': [],
                    'chocadonodisponible': [],
                    'chocadodisponible': [],
                };
                return result;
            }
        }
        else {
            this.toastrService.error(data.message);
            var result = {
                'activo': [],
                'disponible': [],
                'tallernodisponible': [],
                'tallerdisponible': [],
                'corralonnodisponible': [],
                'corralondisponible': [],
                'mantenimientonodisponible': [],
                'mantenimientodisponible': [],
                'chocadonodisponible': [],
                'chocadodisponible': [],
            };
            return result;
        }
    };
    PermisotaxiasignadosTableComponent.prototype.getChofer = function () {
        var _this = this;
        this.chofersService.all()
            .subscribe(function (data) {
            var result = _this.filtrarResultados(data);
            _this._chofer = result.disponible;
            _this._chofer_activo = result.activo;
        });
    };
    PermisotaxiasignadosTableComponent.prototype.getPermisotaxi = function () {
        var _this = this;
        this.permisotaxisService.all()
            .subscribe(function (data) {
            var result = _this.filtrarResultados(data);
            _this._permisotaxi = result.disponible;
            _this._permisotaxi_activo = result.activo;
            _this._permisotaxi_tallernodisponible = result.tallernodisponible;
            _this._permisotaxi_tallerdisponible = result.tallerdisponible;
            _this._permisotaxi_corralonnodisponible = result.corralonnodisponible;
            _this._permisotaxi_corralondisponible = result.corralondisponible;
            _this._permisotaxi_mantenimientonodisponible = result.mantenimientonodisponible;
            _this._permisotaxi_mantenimientodisponible = result.mantenimientodisponible;
            _this._permisotaxi_chocadonodisponible = result.chocadonodisponible;
            _this._permisotaxi_chocadodisponible = result.chocadodisponible;
        });
    };
    PermisotaxiasignadosTableComponent.prototype.viewChoferestado = function (permisotaxiasignado) {
        this.router.navigate(["/pages/choferestados/permisotaxiasignado/" + permisotaxiasignado.idpermisotaxiasignado]);
    };
    PermisotaxiasignadosTableComponent.prototype.viewPermisotaxiestado = function (permisotaxiasignado) {
        this.router.navigate(["/pages/permisotaxiestados/permisotaxiasignado/" + permisotaxiasignado.idpermisotaxiasignado]);
    };
    PermisotaxiasignadosTableComponent.prototype.iniciarDragAndDrop = function () {
        this.cajaACTIVOS = document.getElementById('cajaACTIVOS');
        this.cajaCHOFERES = document.getElementById('cajaCHOFERES');
        this.cajaPERMISOS = document.getElementById('cajaPERMISOS');
        this.cajaTALLER = document.getElementById('cajaTALLER');
        this.cajaMANTENIMIENTO = document.getElementById('cajaMANTENIMIENTO');
        this.cajaCORRALON = document.getElementById('cajaCORRALON');
        this.cajaPERMISOCHOFERINSERT = document.getElementById('cajaPERMISOCHOFERINSERT');
        this.cajaPERMISOCHOFERBAJA = document.getElementById('cajaPERMISOCHOFERBAJA');
        this.cajaCHOQUE = document.getElementById('cajaCHOQUE');
        this.cajaACTIVOS.addEventListener('dragenter', function (e) { e.preventDefault(); }, false);
        this.cajaACTIVOS.addEventListener('dragover', function (e) { e.preventDefault(); }, false);
        this.cajaCHOFERES.addEventListener('dragenter', function (e) { e.preventDefault(); }, false);
        this.cajaCHOFERES.addEventListener('dragover', function (e) { e.preventDefault(); }, false);
        this.cajaPERMISOS.addEventListener('dragenter', function (e) { e.preventDefault(); }, false);
        this.cajaPERMISOS.addEventListener('dragover', function (e) { e.preventDefault(); }, false);
        this.cajaTALLER.addEventListener('dragenter', function (e) { e.preventDefault(); }, false);
        this.cajaTALLER.addEventListener('dragover', function (e) { e.preventDefault(); }, false);
        this.cajaMANTENIMIENTO.addEventListener('dragenter', function (e) { e.preventDefault(); }, false);
        this.cajaMANTENIMIENTO.addEventListener('dragover', function (e) { e.preventDefault(); }, false);
        this.cajaCORRALON.addEventListener('dragenter', function (e) { e.preventDefault(); }, false);
        this.cajaCORRALON.addEventListener('dragover', function (e) { e.preventDefault(); }, false);
        this.cajaPERMISOCHOFERINSERT.addEventListener('dragenter', function (e) { e.preventDefault(); }, false);
        this.cajaPERMISOCHOFERINSERT.addEventListener('dragover', function (e) { e.preventDefault(); }, false);
        this.cajaPERMISOCHOFERBAJA.addEventListener('dragenter', function (e) { e.preventDefault(); }, false);
        this.cajaPERMISOCHOFERBAJA.addEventListener('dragover', function (e) { e.preventDefault(); }, false);
        this.cajaCHOQUE.addEventListener('dragenter', function (e) { e.preventDefault(); }, false);
        this.cajaCHOQUE.addEventListener('dragover', function (e) { e.preventDefault(); }, false);
    };
    PermisotaxiasignadosTableComponent.prototype.finalizado = function (e) {
        var elemento = e.target;
    };
    PermisotaxiasignadosTableComponent.prototype.arrastrado = function (e) {
        var elemento = e.target;
        var idelemento = elemento.getAttribute('id');
        var id = idelemento.split(',')[0];
        var tipo = idelemento.split(',')[1];
        var idvehiculo = undefined;
        if (tipo === 'permisotaxiasignado') {
            if (idelemento.split(',')[4]) {
                idvehiculo = idelemento.split(',')[4];
                e.dataTransfer.setData('idvehiculo', idvehiculo);
            }
        }
        if (tipo === 'permisotaxi') {
            if (idelemento.split(',')[2]) {
                idvehiculo = idelemento.split(',')[2];
                e.dataTransfer.setData('idvehiculo', idvehiculo);
            }
        }
        e.dataTransfer.setData('idelemento', idelemento);
        e.dataTransfer.setData('id', id);
        e.dataTransfer.setData('tipo', tipo);
        e.dataTransfer.setDragImage(e.target, 0, 0);
    };
    PermisotaxiasignadosTableComponent.prototype.soltadoACTIVOS = function (e) {
        e.preventDefault();
        var idelemento = e.dataTransfer.getData('idelemento');
        var id = e.dataTransfer.getData('id');
        var tipo = e.dataTransfer.getData('tipo');
        if (tipo === 'permisotaxiasignado') {
            return false;
        }
        var elemento = document.getElementById(idelemento);
        document.getElementById('cajaACTIVOS').appendChild(elemento);
        this.cambiarEstado(+id, tipo, 6);
    };
    PermisotaxiasignadosTableComponent.prototype.soltadoCHOFERES = function (e) {
        e.preventDefault();
        var idelemento = e.dataTransfer.getData('idelemento');
        var id = e.dataTransfer.getData('id');
        var tipo = e.dataTransfer.getData('tipo');
        if (tipo === 'permisotaxiasignado') {
            return false;
        }
        var elemento = document.getElementById(idelemento);
        document.getElementById('cajaCHOFERES').appendChild(elemento);
        this.cambiarEstado(+id, tipo, 8);
    };
    PermisotaxiasignadosTableComponent.prototype.soltadoPERMISOS = function (e) {
        e.preventDefault();
        var idelemento = e.dataTransfer.getData('idelemento');
        var id = e.dataTransfer.getData('id');
        var tipo = e.dataTransfer.getData('tipo');
        if (tipo === 'permisotaxiasignado') {
            return false;
        }
        var elemento = document.getElementById(idelemento);
        document.getElementById('cajaPERMISOS').appendChild(elemento);
        this.cambiarEstado(+id, tipo, 8);
    };
    PermisotaxiasignadosTableComponent.prototype.soltadoTALLER = function (e) {
        e.preventDefault();
        var idelemento = e.dataTransfer.getData('idelemento');
        var id = e.dataTransfer.getData('id');
        var tipo = e.dataTransfer.getData('tipo');
        var idvehiculo = e.dataTransfer.getData('idvehiculo');
        var permisotaxi = 0;
        var chofer = 0;
        if (tipo !== 'permisotaxiasignado') {
            if (tipo === 'permisotaxi') {
                // SI VIENE DE UN PERMISO (DESDE CORRALÓN O CHOCADO)
                permisotaxi = id;
                if (window.confirm('¿Estas seguro de querer enviar a servicio este vehículo?')) {
                    // CARGAR SERVICIO DE VEHICULO TALLER Y AGREGAR ADEMÁS UN ESTADO DE VEHICULO EN TALLER   
                    var vehiculotaller = {
                        'vehiculo_idvehiculo': +idvehiculo,
                        'motivo': 'SERVICIO POR SALIDA DE CORRALÓN',
                    };
                    this.insertPermisoTaller(vehiculotaller, +permisotaxi, idelemento);
                }
            }
            else {
                return false;
            }
        }
        else {
            // VIENE DE UN PERMISOTAXIASIGNADO  
            permisotaxi = idelemento.split(',')[2];
            chofer = idelemento.split(',')[3];
            if (window.confirm('¿Estas seguro de querer enviar a taller este vehículo?')) {
                // CARGAR SERVICIO DE VEHICULO TALLER Y AGREGAR ADEMÁS UN ESTADO DE VEHICULO EN TALLER   
                var vehiculotaller = {
                    'vehiculo_idvehiculo': +idvehiculo,
                };
                this.insertVehiculotaller('TALLER', vehiculotaller, +chofer, +permisotaxi, +id, idelemento);
            }
            else {
                console.log('item cancelado');
            }
        }
    };
    PermisotaxiasignadosTableComponent.prototype.soltadoMANTENIMIENTO = function (e) {
        e.preventDefault();
        var idelemento = e.dataTransfer.getData('idelemento');
        var id = e.dataTransfer.getData('id');
        var tipo = e.dataTransfer.getData('tipo');
        var idvehiculo = e.dataTransfer.getData('idvehiculo');
        var permisotaxi = 0;
        var chofer = 0;
        if (tipo !== 'permisotaxiasignado') {
            if (tipo === 'permisotaxi') {
                // SI VIENE DE UN PERMISO (DESDE CORRALÓN O CHOCADO)
                permisotaxi = id;
                if (window.confirm('¿Estas seguro de querer enviar a mantenimiento este vehículo?')) {
                    // CARGAR SERVICIO DE VEHICULO TALLER Y AGREGAR ADEMÁS UN ESTADO DE VEHICULO EN TALLER   
                    var vehiculotaller = {
                        'vehiculo_idvehiculo': +idvehiculo,
                        'motivo': 'MANTENIMIENTO',
                    };
                    this.insertPermisoMantenimiento(vehiculotaller, +permisotaxi, idelemento);
                }
            }
            else {
                return false;
            }
        }
        else {
            // SI VIENE DE UN PERMISOTAXIASIGNADO
            permisotaxi = idelemento.split(',')[2];
            chofer = idelemento.split(',')[3];
            if (window.confirm('¿Estas seguro de querer enviar a mantenimiento este vehículo?')) {
                // CARGAR SERVICIO DE VEHICULO TALLER Y AGREGAR ADEMÁS UN ESTADO DE VEHICULO EN TALLER   
                var vehiculotaller = {
                    'vehiculo_idvehiculo': +idvehiculo,
                    'motivo': 'MANTENIMIENTO',
                };
                this.insertVehiculotaller('MANTENIMIENTO', vehiculotaller, +chofer, +permisotaxi, +id, idelemento);
            }
            else {
                console.log('item cancelado');
            }
        }
    };
    PermisotaxiasignadosTableComponent.prototype.soltadoCORRALON = function (e) {
        e.preventDefault();
        var idelemento = e.dataTransfer.getData('idelemento');
        var id = e.dataTransfer.getData('id');
        var tipo = e.dataTransfer.getData('tipo');
        if (tipo !== 'permisotaxiasignado') {
            return false;
        }
        var permisotaxi = idelemento.split(',')[2];
        var chofer = idelemento.split(',')[3];
        if (window.confirm('¿Estas seguro de querer enviar a corralón este vehículo?')) {
            // CARGAR SERVICIO DE VEHICULO TALLER Y AGREGAR ADEMÁS UN ESTADO DE VEHICULO EN TALLER   
            var corralon = {
                'permisotaxi_idpermisotaxi': permisotaxi,
                'estado_idestado': 18,
            };
            this.insertCorralonChocado('CORRALON', corralon, +id, +chofer, +permisotaxi, idelemento);
        }
        else {
            console.log('item cancelado');
        }
    };
    PermisotaxiasignadosTableComponent.prototype.soltadoCHOQUE = function (e) {
        e.preventDefault();
        var idelemento = e.dataTransfer.getData('idelemento');
        var id = e.dataTransfer.getData('id');
        var tipo = e.dataTransfer.getData('tipo');
        if (tipo !== 'permisotaxiasignado') {
            return false;
        }
        var permisotaxi = idelemento.split(',')[2];
        var chofer = idelemento.split(',')[3];
        if (window.confirm('¿Estas seguro de querer dar el estado de chocado a este vehículo?')) {
            // CARGAR SERVICIO DE VEHICULO TALLER Y AGREGAR ADEMÁS UN ESTADO DE VEHICULO EN TALLER   
            var corralon = {
                'permisotaxi_idpermisotaxi': permisotaxi,
                'motivo': 'AUTO CHOCADO SIN INGRESAR A CORRALÓN',
                'estado_idestado': 27,
            };
            this.insertCorralonChocado('CHOCADO', corralon, +id, +chofer, +permisotaxi, idelemento);
        }
        else {
            console.log('item cancelado');
        }
    };
    PermisotaxiasignadosTableComponent.prototype.soltadoPERMISOCHOFERBAJA = function (e) {
        var _this = this;
        e.preventDefault();
        var idelemento = e.dataTransfer.getData('idelemento');
        var id = e.dataTransfer.getData('id');
        var tipo = e.dataTransfer.getData('tipo');
        if (tipo !== 'permisotaxiasignado') {
            return false;
        }
        var permisotaxi = idelemento.split(',')[2];
        var chofer = idelemento.split(',')[3];
        if (window.confirm('¿Estas seguro de querer desasignar al chofer del vehículo?')) {
            // PRIMERO Update a estado de permisotaxiasignado
            var permisotaxiasignado = {
                'idpermisotaxiasignado': id,
                'estado_idestado': 23,
                'chofer_idchofer': chofer,
                'permisotaxi_idpermisotaxi': permisotaxi,
            };
            // AQUI ES DONDE SE HACE EN BACK EL TOMAR LA LIQUIDACIÓN CORRESPONDIENTE AL CHOFER Y 
            // PERMISOTAXIASIGANDO Y LA FECHA  DE BAJA
            // Y MODIFICAR LA LIQUIDEZ POR LA LIQUIDEZ AL MOMENTO
            var disposable = this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_14__permisotaxiasignados_edit_modal_permisotaxiasignados_edit_modal_component__["a" /* PermisotaxiasignadosEditModalComponent */], permisotaxiasignado)
                .subscribe(function (data) {
                _this.showToast(data);
                // SE ELIMINA DE LA VISTA
                _this.service.remove(id)
                    .subscribe(function (_data) {
                    _this.toastrService.success(_data.result.message);
                    _this.refill();
                    _this.cambiarEstado(+chofer, 'chofer', 8, data.result.fecha, data.result.hora);
                    _this.cambiarEstado(+permisotaxi, 'permisotaxi', 8, data.result.fecha, data.result.hora);
                    // LIMPIAR
                    document.getElementById('cajaPERMISOCHOFERBAJA').innerHTML = '';
                }, function (error) { return console.log(error); }, function () { return console.log('Delete completed'); });
            }, function (error) { return console.log(error); }, function () { return console.log('Dialog completed'); });
        }
        else {
            console.log('item cancelado');
        }
    };
    PermisotaxiasignadosTableComponent.prototype.soltadoPERMISOCHOFER = function (e) {
        e.preventDefault();
        var idelemento = e.dataTransfer.getData('idelemento');
        var id = e.dataTransfer.getData('id');
        var tipo = e.dataTransfer.getData('tipo');
        if (tipo === 'permisotaxiasignado') {
            return false;
        }
        if (tipo === 'chofer' && this.permisotaxiasignado.chofer_idchofer !== undefined) {
            // LIMPIA CAJA
            document.getElementById('cajaPERMISOCHOFERINSERT').innerHTML = '';
            // REGRESAR CHOFER A ACTIVO
            this.cambiarEstado(+this.permisotaxiasignado.chofer_idchofer, 'chofer', 8);
            //// this.getChofer();
            this.permisotaxiasignado.chofer_idchofer = undefined;
            this.permisotaxiasignado.permisotaxi_idpermisotaxi = undefined;
        }
        if (tipo === 'permisotaxi' && this.permisotaxiasignado.permisotaxi_idpermisotaxi !== undefined) {
            // LIMPIA CAJA
            document.getElementById('cajaPERMISOCHOFERINSERT').innerHTML = '';
            // REGRESAR PERMISO A ACTIVO
            this.cambiarEstado(+this.permisotaxiasignado.permisotaxi_idpermisotaxi, 'permisotaxi', 8);
            this.permisotaxiasignado.chofer_idchofer = undefined;
            this.permisotaxiasignado.permisotaxi_idpermisotaxi = undefined;
        }
        if (tipo === 'chofer') {
            this.permisotaxiasignado.chofer_idchofer = id;
        }
        if (tipo === 'permisotaxi') {
            this.permisotaxiasignado.permisotaxi_idpermisotaxi = id;
        }
        var elemento = document.getElementById(idelemento);
        document.getElementById('cajaPERMISOCHOFERINSERT').appendChild(elemento);
        if (this.permisotaxiasignado.chofer_idchofer !== undefined && this.permisotaxiasignado.permisotaxi_idpermisotaxi !== undefined) {
            this.insertPermisotaxiasignado(this.permisotaxiasignado);
        }
    };
    PermisotaxiasignadosTableComponent.prototype.insertPermisoTaller = function (vehiculotaller, permisotaxi, idelemento) {
        var _this = this;
        var disposable = this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_16__vehiculotallers_components_vehiculotallers_table_vehiculotallers_add_modal_vehiculotallers_add_modal_component__["a" /* VehiculotallersAddModalComponent */], vehiculotaller)
            .subscribe(function (data) {
            if (data) {
                if (data.success) {
                    _this.toastrService.success(data.message);
                    // CAMBIA PERMISOS A PERMISOTAXI  
                    _this.cambiarEstado(permisotaxi, 'permisotaxi', 9, data.result.fecha, data.result.hora); // TALLER NO DISPONIBLE 
                    // AGREGAR EMPLEADO ENCARGADO DE RECIBIR VEHICULO EN TALLER
                    var idempleado = data.result.idempleado;
                    // CAMBIA DE POSICIÓN EL PERMISO
                    var elemento = document.getElementById(idelemento);
                    document.getElementById('cajaTALLER').appendChild(elemento);
                    // ENVIAR A WEBSOCKET
                    var alerta_1 = {
                        empleado_idempleado: idempleado,
                        tipoalerta_idtipoalerta: 3,
                        mensaje: "Tienes un nuevo veh\u00EDculo por dar servicio, porfavor rev\u00EDsalo.|" + vehiculotaller.vehiculo_idvehiculo,
                    };
                    // CREAR UNA Alerta
                    _this.alertasService.insert(alerta_1)
                        .subscribe(function (_data) {
                        if (_data.success) {
                            _this.toastrService.success(_data.message);
                            // ENVIAR A WEBSOCKET
                            _this.socketService.sender(JSON.stringify(alerta_1));
                        }
                        else {
                            _this.toastrService.error(_data.message);
                        }
                    });
                    // this.refill();
                }
                else {
                    _this.toastrService.error(data.message);
                }
            }
        });
    };
    PermisotaxiasignadosTableComponent.prototype.insertPermisoMantenimiento = function (vehiculotaller, permisotaxi, idelemento) {
        var _this = this;
        var disposable = this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_16__vehiculotallers_components_vehiculotallers_table_vehiculotallers_add_modal_vehiculotallers_add_modal_component__["a" /* VehiculotallersAddModalComponent */], vehiculotaller)
            .subscribe(function (data) {
            if (data) {
                if (data.success) {
                    _this.toastrService.success(data.message);
                    // CAMBIA PERMISOS A PERMISOTAXI  
                    _this.cambiarEstado(permisotaxi, 'permisotaxi', 13, data.result.fecha, data.result.hora); // MANTENIMIENTO NO DISPONIBLE 
                    // AGREGAR EMPLEADO ENCARGADO DE RECIBIR VEHICULO EN TALLER
                    var idempleado = data.result.idempleado;
                    // CAMBIA DE POSICIÓN EL PERMISO
                    var elemento = document.getElementById(idelemento);
                    document.getElementById('cajaMANTENIMIENTO').appendChild(elemento);
                    // ENVIAR A WEBSOCKET
                    var alerta_2 = {
                        empleado_idempleado: idempleado,
                        tipoalerta_idtipoalerta: 3,
                        mensaje: "Tienes un nuevo veh\u00EDculo por dar mantenimiento, porfavor rev\u00EDsalo.|" + vehiculotaller.vehiculo_idvehiculo,
                    };
                    // CREAR UNA Alerta
                    _this.alertasService.insert(alerta_2)
                        .subscribe(function (_data) {
                        if (_data.success) {
                            _this.toastrService.success(_data.message);
                            // ENVIAR A WEBSOCKET
                            _this.socketService.sender(JSON.stringify(alerta_2));
                        }
                        else {
                            _this.toastrService.error(_data.message);
                        }
                    });
                }
                else {
                    _this.toastrService.error(data.message);
                }
            }
        });
    };
    PermisotaxiasignadosTableComponent.prototype.insertVehiculotaller = function (accion, vehiculotaller, chofer, permisotaxi, id, idelemento) {
        var _this = this;
        var disposable = this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_16__vehiculotallers_components_vehiculotallers_table_vehiculotallers_add_modal_vehiculotallers_add_modal_component__["a" /* VehiculotallersAddModalComponent */], vehiculotaller)
            .subscribe(function (data) {
            if (data) {
                if (data.success) {
                    _this.toastrService.success(data.message);
                    // PRIMERO Update a estado de permisotaxiasignado
                    var permisotaxiasignado = {
                        'idpermisotaxiasignado': id,
                        'estado_idestado': (accion === 'TALLER' ? 15 : 28),
                        'chofer_idchofer': chofer,
                        'permisotaxi_idpermisotaxi': permisotaxi,
                        'fecha': data.result.fecha,
                        'hora': data.result.hora,
                    };
                    _this.service
                        .update(permisotaxiasignado)
                        .subscribe(function (_dataPta) {
                        _this.showToast(_dataPta);
                        // CAMBIA PERMISOS A CHOFER Y PERMISOTAXI  
                        _this.cambiarEstado(chofer, 'chofer', 8, data.result.fecha, data.result.hora); // DISPONIBLE 
                        _this.cambiarEstado(permisotaxi, 'permisotaxi', (accion === 'MANTENIMIENTO' ? 13 : 9), data.result.fecha, data.result.hora); // MANTENIMIENTO NO DISPONIBLE : TALLER NO DISPONIBLE 
                        // AGREGAR EMPLEADO ENCARGADO DE RECIBIR VEHICULO EN TALLER
                        var idempleado = data.result.idempleado;
                        // DESPUÉS UNA BAJA LÓGICA DE PERMISOTAXIASIGNADO   
                        _this.service.remove(id)
                            .subscribe(function (_dataRemove) {
                            if (_dataRemove.success) {
                                _this.toastrService.success(_dataRemove.message);
                                var accionTaller = (accion === 'MANTENIMIENTO' ? 'dar mantenimiento' : 'reparar');
                                // ENVIAR A WEBSOCKET
                                var alerta_3 = {
                                    empleado_idempleado: idempleado,
                                    tipoalerta_idtipoalerta: 3,
                                    mensaje: "Tienes un nuevo veh\u00EDculo por " + accionTaller + ", porfavor rev\u00EDsalo.|" + vehiculotaller.vehiculo_idvehiculo,
                                };
                                // CREAR UNA Alerta
                                _this.alertasService.insert(alerta_3)
                                    .subscribe(function (_data) {
                                    if (_data.success) {
                                        _this.toastrService.success(_data.message);
                                        // ENVIAR A WEBSOCKET
                                        _this.socketService.sender(JSON.stringify(alerta_3));
                                    }
                                    else {
                                        _this.toastrService.error(_data.message);
                                    }
                                });
                                _this.refill();
                            }
                            else {
                                _this.toastrService.error(_dataRemove.message);
                            }
                        }, function (error) { return console.log(error); }, function () { return console.log('Delete completed'); });
                    });
                }
                else {
                    _this.toastrService.error(data.message);
                }
            }
        });
    };
    PermisotaxiasignadosTableComponent.prototype.insertCorralonChocado = function (accion, corralon, idpermisotaxiasignado, chofer, permisotaxi, idelemento) {
        var _this = this;
        var disposable = this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_15__corralons_components_corralons_table_corralons_add_modal_corralons_add_modal_component__["a" /* CorralonsAddModalComponent */], corralon)
            .subscribe(function (data) {
            if (data) {
                if (data.success) {
                    _this.toastrService.success(data.message);
                    // PRIMERO Update a estado de permisotaxiasignado
                    var permisotaxiasignado = {
                        'idpermisotaxiasignado': idpermisotaxiasignado,
                        'estado_idestado': (accion === 'CORRALON') ? 18 : 27,
                        'chofer_idchofer': chofer,
                        'permisotaxi_idpermisotaxi': permisotaxi,
                        'fecha': data.result.fecha,
                        'hora': data.result.hora,
                    };
                    _this.service
                        .update(permisotaxiasignado)
                        .subscribe(function (dataUpdate) {
                        _this.showToast(dataUpdate);
                        // DESPUÉS UNA BAJA LÓGICA
                        _this.service.remove(idpermisotaxiasignado)
                            .subscribe(function (_data) {
                            _this.showToast(_data);
                            // CAMBIA ESTADOS A CHOFER Y PERMISO        
                            _this.cambiarEstado(chofer, 'chofer', 8, data.result.fecha, data.result.hora);
                            _this.cambiarEstado(permisotaxi, 'permisotaxi', ((accion === 'CORRALON') ? 10 : 15), data.result.fecha, data.result.hora); // CORRALON NO DISPONIBLE : CHOCADO NO DISPONIBLE 
                            // ELIMINA EL PERMISOTAXIASIGNADO DE LA VISTA
                            document.getElementById(idelemento).remove();
                        }, function (error) { return console.log(error); }, function () { return console.log('Delete completed'); });
                    });
                }
                else {
                    _this.toastrService.error(data.message);
                }
            }
        });
    };
    PermisotaxiasignadosTableComponent.prototype.viewVehiculotaller = function (permisotaxi) {
        this.router.navigate(["/pages/vehiculotallers/vehiculo/" + permisotaxi.vehiculo_idvehiculo]);
    };
    PermisotaxiasignadosTableComponent.prototype.insertPermisotaxiasignado = function (permisotaxiasignado) {
        var _this = this;
        var disposable = this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_13__permisotaxiasignados_add_modal_permisotaxiasignados_add_modal_component__["a" /* PermisotaxiasignadosAddModalComponent */], permisotaxiasignado)
            .subscribe(function (data) {
            if (data) {
                _this.permisotaxiasignadoShowToast(data);
            }
        });
    };
    PermisotaxiasignadosTableComponent.prototype.permisotaxiasignadoShowToast = function (result) {
        if (result.success) {
            this.toastrService.success(result.message);
            this.refill();
            console.log("result.result", result.result);
            this.cambiarEstado(+this.permisotaxiasignado.chofer_idchofer, 'chofer', 7, result.result.fecha, result.result.hora);
            this.cambiarEstado(+this.permisotaxiasignado.permisotaxi_idpermisotaxi, 'permisotaxi', 7, result.result.fecha, result.result.hora);
            // LIMPIAR
            document.getElementById('cajaPERMISOCHOFERINSERT').innerHTML = '';
            this.permisotaxiasignado = {
                'chofer_idchofer': undefined,
                'permisotaxi_idpermisotaxi': undefined,
            };
        }
        else {
            this.toastrService.error(result.message);
        }
    };
    PermisotaxiasignadosTableComponent.prototype.cambiarEstado = function (id, tipoelemento, estadoactividad, fecha, hora) {
        var _this = this;
        if (fecha === undefined) {
            // FECHA Y HORA ACTUAL
            var date = this.authLocalstorage.getCurrentDateAndHour();
            fecha = date.fecha;
            hora = date.hora;
        }
        if (tipoelemento === 'permisotaxi') {
            this.permisotaxiestadosService
                .insert({
                'permisotaxi_idpermisotaxi': id,
                'estadoactividad_idestadoactividad': estadoactividad,
                'fecha': fecha,
                'hora': hora
            })
                .subscribe(function (data) {
                _this.showToast(data);
                _this.getPermisotaxi();
            }, function (error) { return console.log(error); }, function () { return console.log('change permisotaxiestado complete'); });
        }
        if (tipoelemento === 'chofer') {
            this.choferestadosService
                .insert({
                'chofer_idchofer': id,
                'estadoactividad_idestadoactividad': estadoactividad,
                'fecha': fecha,
                'hora': hora
            })
                .subscribe(function (data) {
                _this.showToast(data);
                _this.getChofer();
            }, function (error) { return console.log(error); }, function () { return console.log('change choferestado complete'); });
        }
    };
    PermisotaxiasignadosTableComponent.prototype.findByIdChofer = function (id) {
        var _this = this;
        this.service
            .findByIdChofer(id)
            .subscribe(function (data) {
            if (data.success) {
                _this.data = data.result;
            }
            else {
                _this.toastrService.error(data.message);
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Items complete'); });
    };
    PermisotaxiasignadosTableComponent.prototype.findByIdEstado = function (id) {
        var _this = this;
        this.service
            .findByIdEstado(id)
            .subscribe(function (data) {
            if (data.success) {
                _this.data = data.result;
            }
            else {
                _this.toastrService.error(data.message);
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Items complete'); });
    };
    PermisotaxiasignadosTableComponent.prototype.findByIdPermisotaxi = function (id) {
        var _this = this;
        this.service
            .findByIdPermisotaxi(id)
            .subscribe(function (data) {
            if (data.success) {
                _this.data = data.result;
            }
            else {
                _this.toastrService.error(data.message);
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Items complete'); });
    };
    PermisotaxiasignadosTableComponent.prototype.backPage = function () {
        window.history.back();
    };
    PermisotaxiasignadosTableComponent.prototype.viewCorralon = function (permisotaxiasignados) {
        this.router.navigate(["/pages/corralons/permisotaxiasignado/" + permisotaxiasignados.idpermisotaxiasignado]);
    };
    PermisotaxiasignadosTableComponent.prototype.addModalShow = function () {
        var _this = this;
        var disposable = this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_13__permisotaxiasignados_add_modal_permisotaxiasignados_add_modal_component__["a" /* PermisotaxiasignadosAddModalComponent */])
            .subscribe(function (data) {
            if (data) {
                _this.showToast(data);
            }
        });
    };
    PermisotaxiasignadosTableComponent.prototype.editModalShow = function (permisotaxiasignados) {
        var _this = this;
        var disposable = this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_14__permisotaxiasignados_edit_modal_permisotaxiasignados_edit_modal_component__["a" /* PermisotaxiasignadosEditModalComponent */], permisotaxiasignados)
            .subscribe(function (data) {
            if (data) {
                _this.showToast(data);
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Modified complete'); });
    };
    PermisotaxiasignadosTableComponent.prototype.onDeleteConfirm = function (event, item) {
        var _this = this;
        if (window.confirm('¿Estas seguro de querer eliminar este registro?')) {
            this.service.remove(item.idpermisotaxiasignado)
                .subscribe(function (data) { return _this.showToast(data); }, function (error) { return console.log(error); }, function () { return console.log('Delete completed'); });
        }
        else {
            console.log('item cancelado');
        }
    };
    PermisotaxiasignadosTableComponent.prototype.showToast = function (result) {
        if (result.success) {
            this.toastrService.success(result.message);
            this.getAll();
        }
        else {
            this.toastrService.error(result.message);
        }
    };
    PermisotaxiasignadosTableComponent.prototype.getAll = function () {
        var _this = this;
        this.service
            .all()
            .subscribe(function (data) {
            if (data.success) {
                _this.data = data.result;
            }
            else {
                _this.toastrService.error(data.message);
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Items complete'); });
    };
    return PermisotaxiasignadosTableComponent;
}());
PermisotaxiasignadosTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__angular_core__["Component"])({
        selector: 'permisotaxiasignados-table',
        template: __webpack_require__(1864),
        styles: [__webpack_require__(1765)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_12__permisotaxiasignados_service__["a" /* PermisotaxiasignadosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__permisotaxiasignados_service__["a" /* PermisotaxiasignadosService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__permisotaxis_components_permisotaxis_table_permisotaxis_service__["a" /* PermisotaxisService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__permisotaxis_components_permisotaxis_table_permisotaxis_service__["a" /* PermisotaxisService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__permisotaxiestados_components_permisotaxiestados_table_permisotaxiestados_service__["a" /* PermisotaxiestadosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__permisotaxiestados_components_permisotaxiestados_table_permisotaxiestados_service__["a" /* PermisotaxiestadosService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_auth_localstorage_service__["a" /* AuthLocalstorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_auth_localstorage_service__["a" /* AuthLocalstorage */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__choferestados_components_choferestados_table_choferestados_service__["a" /* ChoferestadosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__choferestados_components_choferestados_table_choferestados_service__["a" /* ChoferestadosService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__vehiculotallers_components_vehiculotallers_table_vehiculotallers_service__["a" /* VehiculotallersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__vehiculotallers_components_vehiculotallers_table_vehiculotallers_service__["a" /* VehiculotallersService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__chofers_components_chofers_table_chofers_service__["a" /* ChofersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__chofers_components_chofers_table_chofers_service__["a" /* ChofersService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__shared_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_socket_service__["a" /* SocketService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__alertas_components_alertas_table_alertas_service__["a" /* AlertasService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__alertas_components_alertas_table_alertas_service__["a" /* AlertasService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_10_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10_ngx_toastr__["b" /* ToastrService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_9_ng2_bootstrap_modal__["DialogService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_ng2_bootstrap_modal__["DialogService"]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* ActivatedRoute */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_8__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_router__["c" /* Router */]) === "function" && _o || Object])
], PermisotaxiasignadosTableComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
//# sourceMappingURL=permisotaxiasignados-table.component.js.map

/***/ }),

/***/ 1600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermisotaxiasignadosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PermisotaxiasignadosComponent = (function () {
    function PermisotaxiasignadosComponent() {
    }
    PermisotaxiasignadosComponent.prototype.ngOnInit = function () {
    };
    return PermisotaxiasignadosComponent;
}());
PermisotaxiasignadosComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'permisotaxiasignados',
        template: __webpack_require__(1865)
    }),
    __metadata("design:paramtypes", [])
], PermisotaxiasignadosComponent);

//# sourceMappingURL=permisotaxiasignados.component.js.map

/***/ }),

/***/ 1700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__permisotaxiasignados_component__ = __webpack_require__(1600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_permisotaxiasignados_table_permisotaxiasignados_table_component__ = __webpack_require__(1599);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });



// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__permisotaxiasignados_component__["a" /* PermisotaxiasignadosComponent */],
        children: [
            { path: 'permisotaxiasignados-table', component: __WEBPACK_IMPORTED_MODULE_2__components_permisotaxiasignados_table_permisotaxiasignados_table_component__["a" /* PermisotaxiasignadosTableComponent */] }
        ]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes);
//# sourceMappingURL=permisotaxiasignados.routing.js.map

/***/ }),

/***/ 1765:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ":host /deep/ .widgets .data-table-container {\n  width: 100%; }\n  :host /deep/ .widgets .data-table-container .panel-heading {\n    margin-top: 25px; }\n\n#cajaPERMISOCHOFERINSERT {\n  min-height: 170px;\n  border-right: 1px solid #999999;\n  background-color: #5555CC; }\n\n#cajaPERMISOCHOFERBAJA {\n  min-height: 170px;\n  border-right: 1px solid #999999;\n  background-color: #CC5555;\n  border-top: 1px solid #999999; }\n\n#cajaACTIVOS {\n  height: 400px;\n  overflow-y: scroll;\n  border-right: 1px solid #999999; }\n\n#cajaCHOFERES {\n  height: 400px;\n  overflow-y: scroll; }\n\n#cajaPERMISOS {\n  height: 400px;\n  overflow-y: scroll;\n  border-left: 1px solid #999999;\n  border-top: 1px solid #999999; }\n\n#cajaTALLER {\n  min-height: 400px;\n  border-right: 1px solid #999999;\n  border-top: 1px solid #999999; }\n\n#cajaMANTENIMIENTO {\n  min-height: 400px;\n  border-right: 1px solid #999999;\n  border-top: 1px solid #999999; }\n\n#cajaCORRALON {\n  min-height: 400px;\n  border-top: 1px solid #999999;\n  border-right: 1px solid #999999; }\n\n#cajaCHOQUE {\n  min-height: 400px;\n  border-top: 1px solid #999999; }\n\n.dragable {\n  padding: 5px;\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1864:
/***/ (function(module, exports) {

module.exports = "<div class='widgets'>\r\n    <div class='row mb-4'>\r\n\r\n        <div class=\"col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-8\">\r\n            <div class=\"row\">\r\n\r\n                <div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4\">\r\n                    <div class='row'>\r\n                        <div class=\"col-12\">\r\n\r\n                            <h2 class=\"card-subtitle m-2 text-muted\">ASIGNAR</h2>\r\n                            <div  id=\"cajaPERMISOCHOFERINSERT\" (drop)=\"soltadoPERMISOCHOFER($event)\" class=\"row\">\r\n                            </div>\r\n\r\n                            <h2 class=\"card-subtitle m-2 text-muted\">DESASIGNAR</h2>\r\n                            <div  id=\"cajaPERMISOCHOFERBAJA\" (drop)=\"soltadoPERMISOCHOFERBAJA($event)\" class=\"row\">\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-8\">\r\n                    <h2 class=\"card-subtitle m-2 text-muted\">ACTIVOS</h2>\r\n                    <div  id=\"cajaACTIVOS\" (drop)=\"soltadoACTIVOS($event)\"  class='row'>\r\n\r\n                        <div id=\"{{item.idpermisotaxi}},permisotaxi,{{item.vehiculo_idvehiculo}}\" class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 feed-messages-container dragable\" [draggable]=\"true\" (dragstart)=\"arrastrado($event)\" (dragend)=\"finalizado($event)\" style=\"padding-bottom: 25px;\" \r\n                        *ngFor='let item of _permisotaxi_activo;  let i = index'>\r\n                            <div class=\"card feed-message\" >\r\n                                <div class=\"card-body\">\r\n                                    <h3 class=\"card-title\">Número: <strong>{{ item.numero }}</strong>\r\n                                        <span style=\"float: right;\"> \r\n                                        </span>\r\n                                    </h3>\r\n                                    <hr>\r\n                                    <div>\r\n                                        <div class=\"table-responsive\">\r\n                                            <table class=\"table\">\r\n                                                <tbody>\r\n                                                    <tr>\r\n                                                        <td class=\"card-subtitle m-2 text-muted\"></td>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <td><strong></strong></td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                            </table>\r\n                                        </div>\r\n                                    </div>\r\n                                    <hr>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div id=\"{{item.idchofer}},chofer\" class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 feed-messages-container dragable\" [draggable]=\"true\" (dragstart)=\"arrastrado($event)\" (dragend)=\"finalizado($event)\" style=\"padding-bottom: 25px;\" \r\n                        *ngFor='let item of _chofer_activo;  let i = index'>\r\n                            <div class=\"card feed-message\" >\r\n                                <div class=\"card-body\">\r\n                                    <h3 class=\"card-title\">Chofer: <strong>{{ item.persona_chofer }}</strong>\r\n                                        <span style=\"float: right;\"> \r\n                                        </span>\r\n                                    </h3>\r\n                                    <hr>\r\n                                    <div class=\"table-responsive\">\r\n                                        <table class=\"table\">\r\n                                            <tbody>\r\n                                                <tr>\r\n                                                    <td class=\"card-subtitle m-2 text-muted\"></td>\r\n                                                </tr>\r\n                                                <tr>\r\n                                                    <td><strong></strong></td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                        </table>\r\n                                    </div>\r\n                                    <hr>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div id=\"{{item.idpermisotaxiasignado}},permisotaxiasignado,{{ item.permisotaxi_idpermisotaxi }},{{ item.chofer_idchofer }},{{ item.vehiculo_idvehiculo }}\" class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 feed-messages-container dragable\" [draggable]=\"true\" (dragstart)=\"arrastrado($event)\" (dragend)=\"finalizado($event)\" style=\"padding-bottom: 25px;\" \r\n                        *ngFor='let item of data | vehiculo_vehiculo_idvehiculoDataFilter : filterQuery1 | chofer_chofer_idchoferDataFilter : filterQuery3 | fechaDataFilter : filterQuery4 | estado_estado_idestadoDataFilter : filterQuery5;  let i = index'>\r\n                            <div class=\"card feed-message\" >\r\n                                <div class=\"card-body\" [ngClass]=\"{'bg-danger': item.estado_estado_idestado === 'ASIGNADO - HACER SERVICIO'}\">\r\n                                    <h3 class=\"card-title\">{{ item.estado_estado_idestado }}\r\n                                        <span style=\"float: right;\"> \r\n                                        </span>\r\n                                    </h3>\r\n                                    <hr>\r\n                                    <div class=\"table-responsive\">\r\n                                        <table class=\"table\">\r\n                                            <tbody>\r\n                                                <tr>\r\n                                                    <td class=\"card-subtitle m-2 text-muted\">Chofer: </td>\r\n                                                </tr>\r\n                                                <tr>\r\n                                                    <td><strong>{{ item.chofer_chofer_idchofer }}</strong></td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                        </table>\r\n\r\n                                        <table class=\"table\">\r\n                                            <tbody>\r\n                                                <tr>\r\n                                                    <td class=\"card-subtitle m-2 text-muted\">Permiso: </td>\r\n                                                </tr>\r\n                                                <tr>\r\n                                                    <td><strong>{{ item.permisotaxi_permisotaxi_idpermisotaxi }}</strong></td>\r\n                                                </tr>\r\n                                                \r\n                                            </tbody>\r\n                                        </table>\r\n                                    </div>\r\n                                    <hr>  \r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n\r\n            </div>    \r\n            <div class=\"row\">\r\n                <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3\">\r\n                    <h4 class=\"card-subtitle m-2 text-muted\">TALLER</h4>\r\n                    <div id=\"cajaTALLER\" (drop)=\"soltadoTALLER($event)\" class=\"row\">\r\n\r\n                        <div id=\"{{item.idpermisotaxi}},permisotaxi,{{item.vehiculo_idvehiculo}}\" class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 feed-messages-container dragable bg-danger text-white\" [draggable]=\"item.estado_estado_idestado !== 'TALLER NO DISPONIBLE'\" (dragstart)=\"arrastrado($event)\" (dragend)=\"finalizado($event)\" style=\"padding-bottom: 25px;\" \r\n                        *ngFor='let item of _permisotaxi_tallernodisponible;  let i = index'>\r\n                            <div class=\"card feed-message\" >\r\n                                <div class=\"card-body\">\r\n                                    <h3 class=\"card-title\">Número: <strong>{{ item.numero }}</strong>\r\n                                        <span style=\"float: right;\"> \r\n                                        </span>\r\n                                    </h3>\r\n                                    <hr>\r\n                                    <div >\r\n                                        <div class=\"table-responsive\">\r\n                                            <table class=\"table\">\r\n                                                <tbody>\r\n                                                    <tr>\r\n                                                        <td class=\"card-subtitle m-2 text-muted\"></td>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <td><strong></strong></td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                            </table>\r\n                                        </div>\r\n                                    </div>\r\n                                    <hr>\r\n                                    <!--<button *ngIf=\"item.estado_estado_idestado === 'TALLER NO DISPONIBLE'\" title='Ver Vehículo en Taller' (click)='viewVehiculotaller(item)' class='btn btn-xs btn-primary'><i class='fa fa-eye'></i> Vehículo en Taller</button>-->\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div id=\"{{item.idpermisotaxi}},permisotaxi,{{item.vehiculo_idvehiculo}}\" class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 feed-messages-container dragable bg-success text-white\" [draggable]=\"true\" (dragstart)=\"arrastrado($event)\" (dragend)=\"finalizado($event)\" style=\"padding-bottom: 25px;\" \r\n                        *ngFor='let item of _permisotaxi_tallerdisponible;  let i = index'>\r\n                            <div class=\"card feed-message\" >\r\n                                <div class=\"card-body\">\r\n                                    <h3 class=\"card-title\">Número: <strong>{{ item.numero }}</strong>\r\n                                        <span style=\"float: right;\"> \r\n                                        </span>\r\n                                    </h3>\r\n                                    <hr>\r\n                                    <div >\r\n                                        <div class=\"table-responsive\">\r\n                                            <table class=\"table\">\r\n                                                <tbody>\r\n                                                    <tr>\r\n                                                        <td class=\"card-subtitle m-2 text-muted\"></td>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <td><strong></strong></td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                            </table>\r\n                                        </div>\r\n                                    </div>\r\n                                    <hr>\r\n                                </div>\r\n                            </div>\r\n                        </div>    \r\n\r\n\r\n                    </div>\r\n                </div>    \r\n\r\n                <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3\">\r\n                    <h4 class=\"card-subtitle m-2 text-muted\">MANTENIMIENTO</h4>\r\n                    <div id=\"cajaMANTENIMIENTO\" (drop)=\"soltadoMANTENIMIENTO($event)\" class=\"row\">\r\n\r\n\r\n                        <div id=\"{{item.idpermisotaxi}},permisotaxi,{{item.vehiculo_idvehiculo}}\" class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 feed-messages-container dragable bg-danger text-white\" [draggable]=\"item.estado_estado_idestado !== 'MANTENIMIENTO NO DISPONIBLE'\" (dragstart)=\"arrastrado($event)\" (dragend)=\"finalizado($event)\" style=\"padding-bottom: 25px;\" \r\n                        *ngFor='let item of _permisotaxi_mantenimientonodisponible;  let i = index'>\r\n                            <div class=\"card feed-message\" >\r\n                                <div class=\"card-body\">\r\n                                    <h3 class=\"card-title\">Número: <strong>{{ item.numero }}</strong>\r\n                                        <span style=\"float: right;\"> \r\n                                        </span>\r\n                                    </h3>\r\n                                    <hr>\r\n                                    <div >\r\n                                        <div class=\"table-responsive\">\r\n                                            <table class=\"table\">\r\n                                                <tbody>\r\n                                                    <tr>\r\n                                                        <td class=\"card-subtitle m-2 text-muted\"></td>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <td><strong></strong></td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                            </table>\r\n                                        </div>\r\n                                    </div>\r\n                                    <hr>\r\n                                    <!--<button *ngIf=\"item.estado_estado_idestado === 'MANTENIMIENTO NO DISPONIBLE'\" title='Ver Vehículo en Mantenimiento' (click)='viewVehiculotaller(item)' class='btn btn-xs btn-primary'><i class='fa fa-eye'></i> Vehículo en Mantenimiento</button>-->    \r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div id=\"{{item.idpermisotaxi}},permisotaxi,{{item.vehiculo_idvehiculo}}\" class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 feed-messages-container dragable bg-success text-white\" [draggable]=\"true\" (dragstart)=\"arrastrado($event)\" (dragend)=\"finalizado($event)\" style=\"padding-bottom: 25px;\" \r\n                        *ngFor='let item of _permisotaxi_mantenimientodisponible;  let i = index'>\r\n                            <div class=\"card feed-message\" >\r\n                                <div class=\"card-body\">\r\n                                    <h3 class=\"card-title\">Número: <strong>{{ item.numero }}</strong>\r\n                                        <span style=\"float: right;\"> \r\n                                        </span>\r\n                                    </h3>\r\n                                    <hr>\r\n                                    <div >\r\n                                        <div class=\"table-responsive\">\r\n                                            <table class=\"table\">\r\n                                                <tbody>\r\n                                                    <tr>\r\n                                                        <td class=\"card-subtitle m-2 text-muted\"></td>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <td><strong></strong></td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                            </table>\r\n                                        </div>\r\n                                    </div>\r\n                                    <hr>\r\n                                </div>\r\n                            </div>\r\n                        </div>    \r\n\r\n                    </div>\r\n                </div>    \r\n\r\n                <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3\">\r\n                    <h4 class=\"card-subtitle m-2 text-muted\">CORRALÓN</h4>\r\n                    <div id=\"cajaCORRALON\" (drop)=\"soltadoCORRALON($event)\" class=\"row\">\r\n\r\n                        <div id=\"{{item.idpermisotaxi}},permisotaxi,{{item.vehiculo_idvehiculo}}\" class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 feed-messages-container dragable bg-danger text-white\" [draggable]=\"item.estado_estado_idestado !== 'CORRALON NO DISPONIBLE'\" (dragstart)=\"arrastrado($event)\" (dragend)=\"finalizado($event)\" style=\"padding-bottom: 25px;\" \r\n                        *ngFor='let item of _permisotaxi_corralonnodisponible;  let i = index'>\r\n                            <div class=\"card feed-message\" >\r\n                                <div class=\"card-body\">\r\n                                    <h3 class=\"card-title\">Número: <strong>{{ item.numero }}</strong>\r\n                                        <span style=\"float: right;\"> \r\n                                        </span>\r\n                                    </h3>\r\n                                    <hr>\r\n                                    <div >\r\n                                        <div class=\"table-responsive\">\r\n                                            <table class=\"table\">\r\n                                                <tbody>\r\n                                                    <tr>\r\n                                                        <td class=\"card-subtitle m-2 text-muted\"></td>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <td><strong></strong></td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                            </table>\r\n                                        </div>\r\n                                    </div>\r\n                                    <hr>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div id=\"{{item.idpermisotaxi}},permisotaxi,{{item.vehiculo_idvehiculo}}\" class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 feed-messages-container dragable bg-success text-white\" [draggable]=\"true\" (dragstart)=\"arrastrado($event)\" (dragend)=\"finalizado($event)\" style=\"padding-bottom: 25px;\" \r\n                        *ngFor='let item of _permisotaxi_corralondisponible;  let i = index'>\r\n                            <div class=\"card feed-message\" >\r\n                                <div class=\"card-body\">\r\n                                    <h3 class=\"card-title\">Número: <strong>{{ item.numero }}</strong>\r\n                                        <span style=\"float: right;\"> \r\n                                        </span>\r\n                                    </h3>\r\n                                    <hr>\r\n                                    <div >\r\n                                        <div class=\"table-responsive\">\r\n                                            <table class=\"table\">\r\n                                                <tbody>\r\n                                                    <tr>\r\n                                                        <td class=\"card-subtitle m-2 text-muted\"></td>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <td><strong></strong></td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                            </table>\r\n                                        </div>\r\n                                    </div>\r\n                                    <hr>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>      \r\n\r\n                    </div>\r\n                </div>    \r\n\r\n                <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3\">\r\n                    <h4 class=\"card-subtitle m-2 text-muted\">CHOQUE</h4>\r\n                    <div id=\"cajaCHOQUE\" (drop)=\"soltadoCHOQUE($event)\" class=\"row\">\r\n\r\n                        <div id=\"{{item.idpermisotaxi}},permisotaxi,{{item.vehiculo_idvehiculo}}\" class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 feed-messages-container dragable bg-danger text-white\" [draggable]=\"item.estado_estado_idestado !== 'CHOCADO NO DISPONIBLE'\" (dragstart)=\"arrastrado($event)\" (dragend)=\"finalizado($event)\" style=\"padding-bottom: 25px;\" \r\n                        *ngFor='let item of _permisotaxi_chocadonodisponible;  let i = index'>\r\n                            <div class=\"card feed-message\" >\r\n                                <div class=\"card-body\">\r\n                                    <h3 class=\"card-title\">Número: <strong>{{ item.numero }}</strong>\r\n                                        <span style=\"float: right;\"> \r\n                                        </span>\r\n                                    </h3>\r\n                                    <hr>\r\n                                    <div >\r\n                                        <div class=\"table-responsive\">\r\n                                            <table class=\"table\">\r\n                                                <tbody>\r\n                                                    <tr>\r\n                                                        <td class=\"card-subtitle m-2 text-muted\"></td>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <td><strong></strong></td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                            </table>\r\n                                        </div>\r\n                                    </div>\r\n                                    <hr>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div id=\"{{item.idpermisotaxi}},permisotaxi,{{item.vehiculo_idvehiculo}}\" class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 feed-messages-container dragable bg-success text-white\" [draggable]=\"true\" (dragstart)=\"arrastrado($event)\" (dragend)=\"finalizado($event)\" style=\"padding-bottom: 25px;\" \r\n                        *ngFor='let item of _permisotaxi_chocadodisponible;  let i = index'>\r\n                            <div class=\"card feed-message\" >\r\n                                <div class=\"card-body\">\r\n                                    <h3 class=\"card-title\">Número: <strong>{{ item.numero }}</strong>\r\n                                        <span style=\"float: right;\"> \r\n                                        </span>\r\n                                    </h3>\r\n                                    <hr>\r\n                                    <div >\r\n                                        <div class=\"table-responsive\">\r\n                                            <table class=\"table\">\r\n                                                <tbody>\r\n                                                    <tr>\r\n                                                        <td class=\"card-subtitle m-2 text-muted\"></td>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <td><strong></strong></td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                            </table>\r\n                                        </div>\r\n                                    </div>\r\n                                    <hr>\r\n                                </div>\r\n                            </div>\r\n                        </div>      \r\n\r\n                    </div>\r\n                </div>    \r\n\r\n            </div>  \r\n        </div>\r\n\r\n        <div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4\">\r\n            <h3 class=\"card-subtitle m-2 text-muted\">CHOFERES DISPONIBLES</h3>\r\n            <div id=\"cajaCHOFERES\" (drop)=\"soltadoCHOFERES($event)\" class=\"row\">\r\n\r\n                <div id=\"{{item.idchofer}},chofer\" class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 feed-messages-container dragable\" [draggable]=\"true\" (dragstart)=\"arrastrado($event)\" (dragend)=\"finalizado($event)\" style=\"padding-bottom: 25px;\" \r\n                *ngFor='let item of _chofer;  let i = index'>\r\n                    <div class=\"card feed-message\" >\r\n                        <div class=\"card-body\">\r\n                            <h3 class=\"card-title\">Chofer: <strong>{{ item.persona_chofer }}</strong>\r\n                                <span style=\"float: right;\"> \r\n                                </span>\r\n                            </h3>\r\n                            <hr>\r\n                            <div class=\"table-responsive\">\r\n                                <table class=\"table\">\r\n                                    <tbody>\r\n                                        <tr>\r\n                                            <td class=\"card-subtitle m-2 text-muted\"></td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td><strong></strong></td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                            <hr>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <h3 class=\"card-subtitle m-2 text-muted\">VEHÍCULOS DISPONIBLES</h3>\r\n            <div id=\"cajaPERMISOS\" (drop)=\"soltadoPERMISOS($event)\" class=\"row\">\r\n\r\n                <div id=\"{{item.idpermisotaxi}},permisotaxi,{{item.vehiculo_idvehiculo}}\" class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 feed-messages-container dragable\" [draggable]=\"true\" (dragstart)=\"arrastrado($event)\" (dragend)=\"finalizado($event)\" style=\"padding-bottom: 25px;\" \r\n                *ngFor='let item of _permisotaxi;  let i = index'>\r\n                    <div class=\"card feed-message\" >\r\n                        <div class=\"card-body\">\r\n                            <h3 class=\"card-title\">Número: <strong>{{ item.numero }}</strong>\r\n                                <span style=\"float: right;\"> \r\n                                </span>\r\n                            </h3>\r\n                            <hr>\r\n                            <div>\r\n                                <div class=\"table-responsive\">\r\n                                    <table class=\"table\">\r\n                                        <tbody>\r\n                                            <tr>\r\n                                                <td class=\"card-subtitle m-2 text-muted\"></td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td><strong></strong></td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                            <hr>\r\n                            <!--<button *ngIf=\"item.estado_estado_idestado === 'TALLER NO DISPONIBLE'\" title='Ver Vehículo en Taller' (click)='viewVehiculotaller(item)' class='btn btn-xs btn-primary'><i class='fa fa-eye'></i> Vehículo en Taller</button>-->    \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div> \r\n    <div class='row'>\r\n        <div class='col-sm-2' *ngIf=\"!backpage\">\r\n            <button (click)='addModalShow()' class='btn btn-success'><i class='fa fa-plus'></i> Agregar</button>\r\n        </div>\r\n        <div class='col-sm-2' *ngIf=\"backpage\">\r\n            <button (click)='backPage()' class='btn btn-primary'><i class='fa fa-arrow-left'></i> Regresar</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 1865:
/***/ (function(module, exports) {

module.exports = "  <permisotaxiasignados-table></permisotaxiasignados-table>\r\n"

/***/ })

});
//# sourceMappingURL=25.chunk.js.map