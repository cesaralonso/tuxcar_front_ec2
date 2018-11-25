webpackJsonp([51,67],{

/***/ 1467:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__chofers_routing__ = __webpack_require__(1667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__chofers_component__ = __webpack_require__(1542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_chofers_table_chofers_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_chofers_table_chofers_table_component__ = __webpack_require__(1543);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChofersModule", function() { return ChofersModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var ChofersModule = (function () {
    function ChofersModule() {
    }
    return ChofersModule;
}());
ChofersModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_translation_module__["a" /* AppTranslationModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__theme_nga_module__["a" /* NgaModule */],
            __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["b" /* NgbRatingModule */],
            __WEBPACK_IMPORTED_MODULE_8__chofers_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_7_angular2_datatable__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["c" /* NgbModalModule */],
            __WEBPACK_IMPORTED_MODULE_0_ng2_bootstrap_modal__["BootstrapModalModule"].forRoot({ container: document.body })
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__chofers_component__["a" /* ChofersComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_chofers_table_chofers_table_component__["a" /* ChofersTableComponent */],
        ],
        entryComponents: [],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__components_chofers_table_chofers_service__["a" /* ChofersService */]
        ]
    })
], ChofersModule);

//# sourceMappingURL=chofers.module.js.map

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

/***/ 1542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChofersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChofersComponent = (function () {
    function ChofersComponent() {
    }
    ChofersComponent.prototype.ngOnInit = function () {
    };
    return ChofersComponent;
}());
ChofersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'chofers',
        template: __webpack_require__(1807)
    }),
    __metadata("design:paramtypes", [])
], ChofersComponent);

//# sourceMappingURL=chofers.component.js.map

/***/ }),

/***/ 1543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_auth_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chofers_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chofers_add_modal_chofers_add_modal_component__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chofers_edit_modal_chofers_edit_modal_component__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__bonificacions_components_bonificacions_table_bonificacions_add_modal_bonificacions_add_modal_component__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__choferestados_components_choferestados_table_choferestados_add_modal_choferestados_add_modal_component__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__liquidacions_components_liquidacions_table_liquidacions_add_modal_liquidacions_add_modal_component__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pagos_components_pagos_table_pagos_add_modal_pagos_add_modal_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pagofianzas_components_pagofianzas_table_pagofianzas_add_modal_pagofianzas_add_modal_component__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pagoliquidacions_components_pagoliquidacions_table_pagoliquidacions_add_modal_pagoliquidacions_add_modal_component__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__permisotaxiasignados_components_permisotaxiasignados_table_permisotaxiasignados_add_modal_permisotaxiasignados_add_modal_component__ = __webpack_require__(617);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChofersTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var ChofersTableComponent = (function () {
    function ChofersTableComponent(service, toastrService, dialogService, authService, route, router) {
        this.service = service;
        this.toastrService = toastrService;
        this.dialogService = dialogService;
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.filterQuery = '';
        this.rowsOnPage = 10;
        this.sortBy = 'idchofer';
        this.sortOrder = 'asc';
        // Permisos en vista
        this.updateable = false;
        this.deleteable = false;
        this.writeable = false;
        // Buscar permisos del usuario en el módulo
        var user = this.authService.useJwtHelper();
        if (user.super) {
            this.updateable = true;
            this.deleteable = true;
            this.writeable = true;
        }
        else {
            var userModules = this.authService.getUserModules();
            if (userModules[0]) {
                for (var element in userModules) {
                    if (userModules[element].path === '/pages/chofers') {
                        this.updateable = userModules[element].updateable;
                        this.deleteable = userModules[element].deleteable;
                        this.writeable = userModules[element].writeable;
                    }
                }
            }
        }
    }
    ChofersTableComponent.prototype.ngOnInit = function () {
        this.refill();
    };
    ChofersTableComponent.prototype.refill = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['idestado'] !== undefined) {
                var idestado = +params['idestado'];
                _this.findByIdEstado(idestado);
                _this.backpage = true;
            }
            if (params['idpersona'] !== undefined) {
                var idpersona = +params['idpersona'];
                _this.findByIdPersona(idpersona);
                _this.backpage = true;
            }
            if (!_this.backpage) {
                _this.getAll();
            }
        });
    };
    ChofersTableComponent.prototype.findByIdEstado = function (id) {
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
    ChofersTableComponent.prototype.findByIdPersona = function (id) {
        var _this = this;
        this.service
            .findByIdPersona(id)
            .subscribe(function (data) {
            if (data.success) {
                _this.data = data.result;
            }
            else {
                _this.toastrService.error(data.message);
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Items complete'); });
    };
    ChofersTableComponent.prototype.backPage = function () {
        window.history.back();
    };
    ChofersTableComponent.prototype.insertBonificacion = function (chofers) {
        var _this = this;
        var bonificacion = {
            chofer_idchofer: chofers.idchofer
        };
        var disposable = this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_8__bonificacions_components_bonificacions_table_bonificacions_add_modal_bonificacions_add_modal_component__["a" /* BonificacionsAddModalComponent */], bonificacion)
            .subscribe(function (data) {
            if (data) {
                _this.bonificacionShowToast(data);
            }
        });
    };
    ChofersTableComponent.prototype.bonificacionShowToast = function (result) {
        if (result.success) {
            this.toastrService.success(result.message);
            this.refill();
        }
        else {
            this.toastrService.error(result.message);
        }
    };
    ChofersTableComponent.prototype.viewBonificacion = function (chofers) {
        this.router.navigate(["/pages/bonificacions/chofer/" + chofers.idchofer]);
    };
    ChofersTableComponent.prototype.insertChoferestado = function (chofers) {
        var _this = this;
        var choferestado = {
            chofer_idchofer: chofers.idchofer
        };
        var disposable = this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_9__choferestados_components_choferestados_table_choferestados_add_modal_choferestados_add_modal_component__["a" /* ChoferestadosAddModalComponent */], choferestado)
            .subscribe(function (data) {
            if (data) {
                _this.choferestadoShowToast(data);
            }
        });
    };
    ChofersTableComponent.prototype.choferestadoShowToast = function (result) {
        if (result.success) {
            this.toastrService.success(result.message);
            this.refill();
        }
        else {
            this.toastrService.error(result.message);
        }
    };
    ChofersTableComponent.prototype.viewChoferestado = function (chofers) {
        this.router.navigate(["/pages/choferestados/chofer/" + chofers.idchofer]);
    };
    ChofersTableComponent.prototype.insertLiquidacion = function (chofers) {
        var _this = this;
        var liquidacion = {
            chofer_idchofer: chofers.idchofer
        };
        var disposable = this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_10__liquidacions_components_liquidacions_table_liquidacions_add_modal_liquidacions_add_modal_component__["a" /* LiquidacionsAddModalComponent */], liquidacion)
            .subscribe(function (data) {
            if (data) {
                _this.liquidacionShowToast(data);
            }
        });
    };
    ChofersTableComponent.prototype.liquidacionShowToast = function (result) {
        if (result.success) {
            this.toastrService.success(result.message);
            this.refill();
        }
        else {
            this.toastrService.error(result.message);
        }
    };
    ChofersTableComponent.prototype.viewLiquidacion = function (chofers) {
        this.router.navigate(["/pages/liquidacions/chofer/" + chofers.idchofer]);
    };
    ChofersTableComponent.prototype.insertPago = function (chofers) {
        var _this = this;
        // Envio a pago
        var pago = {
            cantidadRecibida: 0,
            cambio: 0,
            kilometraje: 0,
            nota: '',
            cantPagada: 0,
            estado_idestado: 6,
            folio: '',
            liquidacion: chofers.deudaliquidacion,
            foliofianza: '',
            fianza: chofers.deudafianza,
            chofer_idchofer: chofers.idchofer
        };
        var disposable = this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_11__pagos_components_pagos_table_pagos_add_modal_pagos_add_modal_component__["a" /* PagosAddModalComponent */], pago)
            .subscribe(function (data) {
            if (data) {
                _this.pagoShowToast(data);
            }
        });
    };
    ChofersTableComponent.prototype.pagoShowToast = function (result) {
        if (result.success) {
            this.toastrService.success(result.message);
            this.refill();
        }
        else {
            this.toastrService.error(result.message);
        }
    };
    ChofersTableComponent.prototype.viewPago = function (chofers) {
        this.router.navigate(["/pages/pagos/chofer/" + chofers.idchofer]);
    };
    ChofersTableComponent.prototype.insertPagofianza = function (chofers) {
        var _this = this;
        var pagofianza = {
            chofer_idchofer: chofers.idchofer
        };
        var disposable = this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_12__pagofianzas_components_pagofianzas_table_pagofianzas_add_modal_pagofianzas_add_modal_component__["a" /* PagofianzasAddModalComponent */], pagofianza)
            .subscribe(function (data) {
            if (data) {
                _this.pagofianzaShowToast(data);
            }
        });
    };
    ChofersTableComponent.prototype.pagofianzaShowToast = function (result) {
        if (result.success) {
            this.toastrService.success(result.message);
            this.refill();
        }
        else {
            this.toastrService.error(result.message);
        }
    };
    ChofersTableComponent.prototype.viewPagofianza = function (chofers) {
        this.router.navigate(["/pages/pagofianzas/chofer/" + chofers.idchofer]);
    };
    ChofersTableComponent.prototype.insertPagoliquidacion = function (chofers) {
        var _this = this;
        var pagoliquidacion = {
            chofer_idchofer: chofers.idchofer
        };
        var disposable = this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_13__pagoliquidacions_components_pagoliquidacions_table_pagoliquidacions_add_modal_pagoliquidacions_add_modal_component__["a" /* PagoliquidacionsAddModalComponent */], pagoliquidacion)
            .subscribe(function (data) {
            if (data) {
                _this.pagoliquidacionShowToast(data);
            }
        });
    };
    ChofersTableComponent.prototype.pagoliquidacionShowToast = function (result) {
        if (result.success) {
            this.toastrService.success(result.message);
            this.refill();
        }
        else {
            this.toastrService.error(result.message);
        }
    };
    ChofersTableComponent.prototype.viewPersona = function (chofers) {
        this.router.navigate(["/pages/personas/chofer/" + chofers.idchofer]);
    };
    ChofersTableComponent.prototype.viewPagoliquidacion = function (chofers) {
        this.router.navigate(["/pages/pagoliquidacions/chofer/" + chofers.idchofer]);
    };
    ChofersTableComponent.prototype.addModalShow = function () {
        var _this = this;
        var disposable = this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_6__chofers_add_modal_chofers_add_modal_component__["a" /* ChofersAddModalComponent */])
            .subscribe(function (data) {
            if (data) {
                _this.showToast(data);
            }
        });
    };
    ChofersTableComponent.prototype.editModalShow = function (chofers) {
        var _this = this;
        var disposable = this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_7__chofers_edit_modal_chofers_edit_modal_component__["a" /* ChofersEditModalComponent */], chofers)
            .subscribe(function (data) {
            if (data) {
                _this.showToast(data);
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Modified complete'); });
    };
    ChofersTableComponent.prototype.onDeleteConfirm = function (event, item) {
        var _this = this;
        if (window.confirm('¿Estas seguro de querer eliminar este registro?')) {
            this.service.remove(item.idchofer)
                .subscribe(function (data) { return _this.showToast(data); }, function (error) { return console.log(error); }, function () { return console.log('Delete completed'); });
        }
        else {
            console.log('item cancelado');
        }
    };
    ChofersTableComponent.prototype.showToast = function (result) {
        if (result.success) {
            this.toastrService.success(result.message);
            this.refill();
        }
        else {
            this.toastrService.error(result.message);
        }
    };
    ChofersTableComponent.prototype.insertPermisotaxiasignado = function (chofers) {
        var _this = this;
        var permisotaxiasignado = {
            chofer_idchofer: chofers.idchofer
        };
        var disposable = this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_14__permisotaxiasignados_components_permisotaxiasignados_table_permisotaxiasignados_add_modal_permisotaxiasignados_add_modal_component__["a" /* PermisotaxiasignadosAddModalComponent */], permisotaxiasignado)
            .subscribe(function (data) {
            if (data) {
                _this.permisotaxiasignadoShowToast(data);
            }
        });
    };
    ChofersTableComponent.prototype.permisotaxiasignadoShowToast = function (result) {
        if (result.success) {
            this.toastrService.success(result.message);
            this.getAll();
        }
        else {
            this.toastrService.error(result.message);
        }
    };
    ChofersTableComponent.prototype.viewPermisotaxiasignado = function (chofers) {
        this.router.navigate(["/pages/permisotaxiasignados/chofer/" + chofers.idchofer]);
    };
    ChofersTableComponent.prototype.verBitacora = function (chofers) {
        this.router.navigate(["/pages/reportes/bitacora-pagos-chofer/" + chofers.idchofer]);
    };
    ChofersTableComponent.prototype.getAll = function () {
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
    return ChofersTableComponent;
}());
ChofersTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'chofers-table',
        template: __webpack_require__(1808),
        styles: [__webpack_require__(1734)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__chofers_service__["a" /* ChofersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__chofers_service__["a" /* ChofersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__["DialogService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__["DialogService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__shared_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _f || Object])
], ChofersTableComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=chofers-table.component.js.map

/***/ }),

/***/ 1667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chofers_component__ = __webpack_require__(1542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_chofers_table_chofers_table_component__ = __webpack_require__(1543);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });



// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__chofers_component__["a" /* ChofersComponent */],
        children: [
            { path: 'chofers-table', component: __WEBPACK_IMPORTED_MODULE_2__components_chofers_table_chofers_table_component__["a" /* ChofersTableComponent */] }
        ]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes);
//# sourceMappingURL=chofers.routing.js.map

/***/ }),

/***/ 1734:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ":host /deep/ .widgets .data-table-container {\n  width: 100%; }\n  :host /deep/ .widgets .data-table-container .panel-heading {\n    margin-top: 25px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1807:
/***/ (function(module, exports) {

module.exports = "  <chofers-table></chofers-table>\r\n"

/***/ }),

/***/ 1808:
/***/ (function(module, exports) {

module.exports = "<div class='widgets'>\r\n    <div class='row'>\r\n        <ba-card title='Listado' baCardClass='with-scroll' class='data-table-container'>\r\n            <div class='panel panel-default'>\r\n                <div class=\"panel-heading\" *ngIf=\"backpage\"><h2>Información de Choferes</h2></div>\r\n                <table class='table table-striped' [mfData]='data | persona_choferDataFilter : filterQuery1 | estado_estado_idestado_fianzaDataFilter : filterQuery2' #mf='mfDataTable' [mfRowsOnPage]='rowsOnPage' [(mfSortBy)]='sortBy' [(mfSortOrder)]='sortOrder'>\r\n                    <thead>\r\n                        <tr>\r\n                            <th colspan='3' class='text-left'>\r\n                                Filtrar por Nombre de Chofer:\r\n                                <input class='form-control' [(ngModel)]='filterQuery1' />\r\n                            </th>\r\n                            <th colspan='3' class='text-left'>\r\n                                Filtrar por Estado de la Fianza:\r\n                                <input class='form-control' [(ngModel)]='filterQuery2' />\r\n                            </th>\r\n                        </tr>\r\n                        <tr>\r\n                            <th style='width: 20%'></th>\r\n                            <th style='width: 10%'>\r\n                                <mfDefaultSorter by='persona_chofer'>Chofer</mfDefaultSorter>\r\n                            </th>\r\n                            <th style='width: 10%'>\r\n                                <mfDefaultSorter by='estado_estado_idestado'>Estado</mfDefaultSorter>\r\n                            </th>\r\n                            <th style='width: 10%'>\r\n                                <mfDefaultSorter by='permisotaxi_idpermisotaxi'>Permiso</mfDefaultSorter>\r\n                            </th>\r\n                            <!--<th style='width: 10%'>\r\n                                <mfDefaultSorter by='deudafianza'>Fianza A Pagar</mfDefaultSorter>\r\n                            </th>\r\n                            <th style='width: 10%'>\r\n                                <mfDefaultSorter by='deudafianza'>Fianza Abonada</mfDefaultSorter>\r\n                            </th>\r\n                            <th style='width: 10%'>\r\n                                <mfDefaultSorter by='estado_estado_idestado_fianza'>Estado Fianza</mfDefaultSorter>\r\n                            </th>\r\n                            <th style='width: 10%'>\r\n                                <mfDefaultSorter by='deudaliquidacion'>Deuda Liquidación</mfDefaultSorter>\r\n                            </th>\r\n                            <th style='width: 10%'>\r\n                                <mfDefaultSorter by='ultimaLiquidacion'>Última Liquidación Pagada</mfDefaultSorter>\r\n                            </th>-->\r\n                            <th style='width: 10%'>\r\n                                <mfDefaultSorter by='telefonoCasa'>Teléfono Celular</mfDefaultSorter>\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor='let item of mf.data;  let i = index'>\r\n                            <td>\r\n                                <div class='dropdown'>\r\n                                    <button class='btn btn-primary dropdown-toggle' type='button' id='dropdownAcciones' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>\r\n                                        Acciones\r\n                                    </button>\r\n                                    <div class='dropdown-menu' aria-labelledby='dropdownAcciones'>\r\n                                      <!--<button title='Bitácora de Pagos' (click)='verBitacora(item)' class='btn btn-sm btn-default dropdown-item'><i class='fa fa-list'></i> Bitácora de Pagos</button>\r\n                                      <div class=\"dropdown-divider\"></div>-->\r\n                                      <button title='Agregar Pago de Liquidación' (click)='insertPago(item)' class='btn btn-default dropdown-item'><i class='fa fa-plus text-success'></i> Ruta / Chequeo</button>\r\n                                      <!--\r\n                                      <button title='Ver Pagos' (click)='viewPago(item)' class='btn btn-sm btn-default dropdown-item'><i class='fa fa-eye'></i> Pagos</button>\r\n                                      <div class='dropdown-divider'></div>\r\n                                      -->                                      \r\n                                      <!--<button title='Ver Pago de Liquidaciones' (click)='viewPagoliquidacion(item)' class='btn btn-sm btn-default dropdown-item'><i class='fa fa-eye'></i> Pago de Liquidaciones</button>\r\n                                      <div class='dropdown-divider'></div>\r\n                                      <button title='Agregar Pago de Fianzas' (click)='insertPagofianza(item)' class='btn btn-sm btn-default dropdown-item'><i class='fa fa-plus text-success'></i> Pago de Fianzas</button>\r\n                                      <button title='Ver Pago de Fianzas' (click)='viewPagofianza(item)' class='btn btn-sm btn-default dropdown-item'><i class='fa fa-eye'></i> Pago de Fianzas</button>-->\r\n                                      <div class='dropdown-divider'></div>\r\n                                      <button title='Ver Persona' (click)='viewPersona(item)' class='btn btn-sm btn-default dropdown-item'><i class='fa fa-user'></i> Ver Persona</button>\r\n                                      <div class='dropdown-divider'></div>\r\n                                      <button title='Agregar Bonificaciones' (click)='insertBonificacion(item)' class='btn btn-sm btn-default dropdown-item'><i class='fa fa-plus text-success'></i> Bonificaciones</button>\r\n                                      <button title='Ver Bonificaciones' (click)='viewBonificacion(item)' class='btn btn-sm btn-default dropdown-item'><i class='fa fa-eye'></i> Bonificaciones</button>\r\n                                      <div class='dropdown-divider'></div>\r\n                                      <button title='Agregar Chofer Estado' (click)='insertChoferestado(item)' class='btn btn-sm btn-default dropdown-item'><i class='fa fa-plus text-success'></i> Chofer Estado</button>\r\n                                      <button title='Ver Chofer Estado' (click)='viewChoferestado(item)' class='btn btn-sm btn-default dropdown-item'><i class='fa fa-eye'></i> Chofer Estado</button>\r\n                                      <div class='dropdown-divider'></div>\r\n                                      <!--<button title='Agregar Liquidaciones' (click)='insertLiquidacion(item)' class='btn btn-sm btn-default dropdown-item'><i class='fa fa-plus text-success'></i> Liquidaciones</button>\r\n                                      <button title='Ver Liquidaciones' (click)='viewLiquidacion(item)' class='btn btn-sm btn-default dropdown-item'><i class='fa fa-eye'></i> Liquidaciones</button>-->\r\n\r\n                                      <button title='Agregar Velices' (click)='insertLiquidacion(item)' class='btn btn-sm btn-default dropdown-item'><i class='fa fa-plus text-success'></i> Velices</button>\r\n                                      <button title='Ver Velices' (click)='viewLiquidacion(item)' class='btn btn-sm btn-default dropdown-item'><i class='fa fa-eye'></i> Velices</button>\r\n\r\n                                      <div class='dropdown-divider'></div>\r\n                                      <button *ngIf='updateable' title='Editar Registro' (click)='editModalShow(item)' class='btn btn-sm btn-default text-primary dropdown-item'><i class='fa fa-edit'></i> Editar </button>\r\n                                      <button *ngIf='deleteable' title='Eliminar Registro' (click)='onDeleteConfirm($event, item)' class='btn btn-sm btn-default text-danger dropdown-item'><i class='fa fa-trash'></i> Eliminar</button>\r\n                                    </div>\r\n                                </div>\r\n                            </td>\r\n                            <td>{{ item.persona_chofer }}</td>\r\n                            <td>{{ item.estado_estado_idestado }}</td>\r\n                            <td>{{ item.permisotaxi_idpermisotaxi ? item.permisotaxi_idpermisotaxi : 'SIN PERMISO ASIGNADO' }}</td>\r\n                            <!--<td>{{ item.fianza | currency: 'MXN' }}</td>\r\n                            <td>{{ item.deudafianza | currency: 'MXN' }}</td>\r\n                            <td>{{ item.estado_estado_idestado_fianza }}</td>\r\n                            <td>{{ item.deudaliquidacion | currency: 'MXN' }}</td>\r\n                            <td>{{ item.ultimaLiquidacion | date: 'dd/MM/y' }}</td>-->\r\n                            <td>{{ item.telefonoCasa }}</td>\r\n                        </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                        <tr>\r\n                            <td colspan='10'>\r\n                                <mfBootstrapPaginator [rowsOnPageSet]='[5,10,15,25,50,100]'></mfBootstrapPaginator>\r\n                            </td>\r\n                        </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n        </ba-card>\r\n    </div>\r\n    <div class='row'>\r\n        <div class='col-sm-2' *ngIf=\"!backpage\">\r\n            <button *ngIf='writeable' (click)='addModalShow()' class='btn btn-success'><i class='fa fa-plus'></i> Agregar</button>\r\n        </div>\r\n        <div class='col-sm-2' *ngIf=\"backpage\">\r\n            <button (click)='backPage()' class='btn btn-primary'><i class='fa fa-arrow-left'></i> Regresar</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ })

});
//# sourceMappingURL=51.chunk.js.map