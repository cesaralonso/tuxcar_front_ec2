webpackJsonp([31,67],{

/***/ 1490:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ordens_routing__ = __webpack_require__(1694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ordens_component__ = __webpack_require__(1588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_ordens_table_ordens_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_ordens_table_ordens_table_component__ = __webpack_require__(1587);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdensModule", function() { return OrdensModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var OrdensModule = (function () {
    function OrdensModule() {
    }
    return OrdensModule;
}());
OrdensModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_translation_module__["a" /* AppTranslationModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__theme_nga_module__["a" /* NgaModule */],
            __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["b" /* NgbRatingModule */],
            __WEBPACK_IMPORTED_MODULE_8__ordens_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_7_angular2_datatable__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["c" /* NgbModalModule */],
            __WEBPACK_IMPORTED_MODULE_0_ng2_bootstrap_modal__["BootstrapModalModule"].forRoot({ container: document.body })
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__ordens_component__["a" /* OrdensComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_ordens_table_ordens_table_component__["a" /* OrdensTableComponent */],
        ],
        entryComponents: [],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__components_ordens_table_ordens_service__["a" /* OrdensService */]
        ]
    })
], OrdensModule);

//# sourceMappingURL=ordens.module.js.map

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

/***/ 1587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__estadopagos_components_estadopagos_table_estadopagos_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__estadoactividads_components_estadoactividads_table_estadoactividads_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_printer_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_common_service__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__empleadotareas_components_empleadotareas_table_empleadotareas_add_modal_empleadotareas_add_modal_component__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__clientes_components_clientes_table_clientes_service__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__estados_components_estados_table_estados_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ordentareas_components_ordentareas_table_ordentareas_add_modal_ordentareas_add_modal_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_auth_localstorage_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_bootstrap_modal__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_toastr__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ordens_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ordens_add_modal_ordens_add_modal_component__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ordens_edit_modal_ordens_edit_modal_component__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__abonos_components_abonos_table_abonos_add_modal_abonos_add_modal_component__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ordenestados_components_ordenestados_table_ordenestados_add_modal_ordenestados_add_modal_component__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ordenproductos_components_ordenproductos_table_ordenproductos_add_modal_ordenproductos_add_modal_component__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__orden_has_refaccions_components_orden_has_refaccions_table_orden_has_refaccions_add_modal_orden_has_refaccions_add_modal_component__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_lodash__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdensTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















// import ExportToCSV from "@molteni/export-csv";
var OrdensTableComponent = (function () {
    function OrdensTableComponent(service, toastrService, dialogService, estadosService, estadopagosService, clientesService, commonService, estadoactividadsService, printerService, route, router, authLocalstorage) {
        this.service = service;
        this.toastrService = toastrService;
        this.dialogService = dialogService;
        this.estadosService = estadosService;
        this.estadopagosService = estadopagosService;
        this.clientesService = clientesService;
        this.commonService = commonService;
        this.estadoactividadsService = estadoactividadsService;
        this.printerService = printerService;
        this.route = route;
        this.router = router;
        this.authLocalstorage = authLocalstorage;
        this._estado = [];
        this._cliente = [];
        this.filterQuery = '';
        this.rowsOnPage = 10;
        this.sortBy = 'idorden';
        this.sortOrder = 'asc';
    }
    OrdensTableComponent.prototype.ngOnInit = function () {
        this.refill();
        this.getEstado();
        this.getCliente();
    };
    OrdensTableComponent.prototype.refill = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['idorden'] !== undefined) {
                var idorden = +params['idorden'];
                _this.findById(idorden);
                _this.backpage = true;
            }
            if (params['idcliente'] !== undefined) {
                var idcliente = +params['idcliente'];
                _this.findByIdCliente(idcliente);
                _this.backpage = true;
            }
            if (params['idvehiculotaller'] !== undefined && params['idvehiculo'] !== undefined) {
                var idvehiculotaller = +params['idvehiculotaller'];
                var idvehiculo = +params['idvehiculo'];
                _this.findByIdVehiculotaller(idvehiculotaller, idvehiculo);
                _this.backpage = true;
            }
            if (!_this.backpage) {
                _this.getAll();
            }
        });
    };
    OrdensTableComponent.prototype.descargarCSV = function (json, reportTitle, showLabel) {
        this.commonService.JSONToCSVConvertor(json, reportTitle, showLabel);
    };
    OrdensTableComponent.prototype.expandMessage = function (item) {
        item.expanded = !item.expanded;
    };
    OrdensTableComponent.prototype.getEstado = function () {
        var _this = this;
        this.estadopagosService.all()
            .subscribe(function (data) { return _this._estado = data.result; });
    };
    OrdensTableComponent.prototype.getCliente = function () {
        var _this = this;
        this.clientesService.all()
            .subscribe(function (data) { return _this._cliente = data.result; });
    };
    OrdensTableComponent.prototype.insertOrdentarea = function (ordenproductos) {
        var _this = this;
        var ordentarea = {
            ordenproducto_idordenproducto: ordenproductos.idordenproducto,
        };
        var disposable = this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_7__ordentareas_components_ordentareas_table_ordentareas_add_modal_ordentareas_add_modal_component__["a" /* OrdentareasAddModalComponent */], ordentarea)
            .subscribe(function (data) {
            if (data) {
                _this.ordentareaShowToast(data);
            }
        });
    };
    OrdensTableComponent.prototype.ordentareaShowToast = function (result) {
        if (result.success) {
            this.toastrService.success(result.message);
            this.refill();
        }
        else {
            this.toastrService.error(result.message);
        }
    };
    OrdensTableComponent.prototype.viewOrdentarea = function (ordenproductos) {
        this.router.navigate(["/pages/ordentareas/ordenproducto/" + ordenproductos.idordenproducto]);
    };
    OrdensTableComponent.prototype.entregarOrden = function (ordens) {
        var _this = this;
        this.service.entregarOrden(ordens)
            .subscribe(function (data) {
            if (data.success) {
                _this.toastrService.success(data.message);
                _this.refill();
            }
            else {
                _this.toastrService.error(data.message);
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Items complete'); });
    };
    OrdensTableComponent.prototype.finalizarOrden = function (ordens) {
        var _this = this;
        this.service.finalizarOrden(ordens)
            .subscribe(function (data) {
            if (data.success) {
                _this.toastrService.success(data.message);
                _this.refill();
            }
            else {
                _this.toastrService.error(data.message);
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Items complete'); });
    };
    OrdensTableComponent.prototype.printOrden = function (ordens) {
        this.printerService.printOrden(ordens);
    };
    OrdensTableComponent.prototype.printReporte = function (ordens) {
        this.printerService.printReporte(ordens);
    };
    OrdensTableComponent.prototype.insertEmpleadotarea = function (ordentareas) {
        var _this = this;
        var empleadotarea = {
            ordentarea_idordentarea: ordentareas.idordentarea
        };
        var disposable = this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_4__empleadotareas_components_empleadotareas_table_empleadotareas_add_modal_empleadotareas_add_modal_component__["a" /* EmpleadotareasAddModalComponent */], empleadotarea)
            .subscribe(function (data) {
            if (data) {
                _this.empleadotareaShowToast(data);
            }
        });
    };
    OrdensTableComponent.prototype.empleadotareaShowToast = function (result) {
        if (result.success) {
            this.toastrService.success(result.message);
            // RECARGA TABLA
            this.refill();
        }
        else {
            this.toastrService.error(result.message);
        }
    };
    OrdensTableComponent.prototype.findById = function (id) {
        var _this = this;
        this.service
            .findById(id)
            .subscribe(function (data) {
            if (data.success) {
                var result = __WEBPACK_IMPORTED_MODULE_20_lodash__["chain"](data.result)
                    .sortBy('estado_estado_idestado')
                    .sortBy('idorden')
                    .value();
                _this.data = result;
            }
            else {
                _this.toastrService.error(data.message);
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Items complete'); });
    };
    OrdensTableComponent.prototype.findByIdCliente = function (id) {
        var _this = this;
        this.service
            .findByIdCliente(id)
            .subscribe(function (data) {
            if (data.success) {
                var result = __WEBPACK_IMPORTED_MODULE_20_lodash__["chain"](data.result)
                    .sortBy('estado_estado_idestado')
                    .sortBy('idorden')
                    .value();
                _this.data = result;
            }
            else {
                _this.toastrService.error(data.message);
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Items complete'); });
    };
    OrdensTableComponent.prototype.findByIdVehiculotaller = function (id, idvehiculo) {
        var _this = this;
        this.service
            .findByIdVehiculotaller(id, idvehiculo)
            .subscribe(function (data) {
            if (data.success) {
                var result = __WEBPACK_IMPORTED_MODULE_20_lodash__["chain"](data.result)
                    .sortBy('estado_estado_idestado')
                    .sortBy('idorden')
                    .value();
                _this.data = result;
            }
            else {
                _this.toastrService.error(data.message);
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Items complete'); });
    };
    OrdensTableComponent.prototype.backPage = function () {
        window.history.back();
    };
    OrdensTableComponent.prototype.insertAbono = function (ordens) {
        var _this = this;
        // Abono
        var abono = {
            'orden_idorden': ordens.idorden,
            'adeudoAnterior': ordens.adeudo,
        };
        var disposable = this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_16__abonos_components_abonos_table_abonos_add_modal_abonos_add_modal_component__["a" /* AbonosAddModalComponent */], abono)
            .subscribe(function (data) {
            if (data) {
                _this.abonoShowToast(data, ordens.idorden);
            }
        });
    };
    OrdensTableComponent.prototype.abonoShowToast = function (data, idorden) {
        var _this = this;
        if (data.success) {
            this.toastrService.success(data.message);
            // ACTUALIZAR MONTOS CON Orden  
            this.service
                .updateMontos(idorden)
                .subscribe(function (_data) {
                if (data.success) {
                    _this.showToast(_data);
                }
                else {
                    _this.toastrService.error(_data.message);
                }
            }, function (error) { return console.log(error); }, function () { return console.log('Get all Items complete'); });
        }
        else {
            this.toastrService.error(data.message);
        }
    };
    OrdensTableComponent.prototype.viewAbono = function (ordens) {
        this.router.navigate(["/pages/abonos/orden/" + ordens.idorden]);
    };
    OrdensTableComponent.prototype.insertRefaccion = function (ordens) {
        var _this = this;
        // Refacción
        var refaccion = {
            'orden_idorden': ordens.idorden,
        };
        var disposable = this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_19__orden_has_refaccions_components_orden_has_refaccions_table_orden_has_refaccions_add_modal_orden_has_refaccions_add_modal_component__["a" /* Orden_has_refaccionsAddModalComponent */], refaccion)
            .subscribe(function (data) {
            if (data) {
                _this.refaccionShowToast(data, ordens.idorden);
            }
        });
    };
    OrdensTableComponent.prototype.refaccionShowToast = function (data, idorden) {
        var _this = this;
        if (data.success) {
            this.toastrService.success(data.message);
            if (data.success) {
                // this.showToast(data);
                // ACTUALIZAR MONTOS CON Orden  
                this.service
                    .updateMontos(idorden)
                    .subscribe(function (_data) {
                    if (data.success) {
                        _this.showToast(_data);
                    }
                    else {
                        _this.toastrService.error(_data.message);
                    }
                }, function (error) { return console.log(error); }, function () { return console.log('Get all Items complete'); });
            }
            else {
                this.toastrService.error(data.message);
            }
        }
        else {
            this.toastrService.error(data.message);
        }
    };
    OrdensTableComponent.prototype.viewRefaccion = function (ordens) {
        this.router.navigate(["/pages/orden_has_refaccions/orden/" + ordens.idorden]);
    };
    OrdensTableComponent.prototype.insertOrdenestado = function (ordens) {
        var _this = this;
        var ordenestado = {
            orden_idorden: ordens.idorden
        };
        var disposable = this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_17__ordenestados_components_ordenestados_table_ordenestados_add_modal_ordenestados_add_modal_component__["a" /* OrdenestadosAddModalComponent */], ordenestado)
            .subscribe(function (data) {
            if (data) {
                _this.ordenestadoShowToast(data);
            }
        });
    };
    OrdensTableComponent.prototype.ordenestadoShowToast = function (result) {
        if (result.success) {
            this.toastrService.success(result.message);
            this.getAll();
        }
        else {
            this.toastrService.error(result.message);
        }
    };
    OrdensTableComponent.prototype.viewOrdenestado = function (ordens) {
        this.router.navigate(["/pages/ordenestados/orden/" + ordens.idorden]);
    };
    OrdensTableComponent.prototype.insertOrdenproducto = function (ordens) {
        var _this = this;
        var ordenproducto = {
            orden_idorden: ordens.idorden
        };
        var disposable = this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_18__ordenproductos_components_ordenproductos_table_ordenproductos_add_modal_ordenproductos_add_modal_component__["a" /* OrdenproductosAddModalComponent */], ordenproducto)
            .subscribe(function (data) {
            if (data) {
                _this.ordenproductoShowToast(data, ordens.idorden);
            }
        });
    };
    OrdensTableComponent.prototype.ordenproductoShowToast = function (data, idorden) {
        var _this = this;
        if (data.success) {
            this.toastrService.success(data.message);
            if (data.success) {
                // this.showToast(data);
                // ACTUALIZAR MONTOS CON Orden  
                this.service
                    .updateMontos(idorden)
                    .subscribe(function (_data) {
                    if (data.success) {
                        _this.showToast(_data);
                    }
                    else {
                        _this.toastrService.error(_data.message);
                    }
                }, function (error) { return console.log(error); }, function () { return console.log('Get all Items complete'); });
            }
            else {
                this.toastrService.error(data.message);
            }
        }
        else {
            this.toastrService.error(data.message);
        }
    };
    OrdensTableComponent.prototype.viewOrdenproducto = function (ordens) {
        this.router.navigate(["/pages/ordenproductos/orden/" + ordens.idorden]);
    };
    OrdensTableComponent.prototype.addModalShow = function () {
        var _this = this;
        var disposable = this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_14__ordens_add_modal_ordens_add_modal_component__["a" /* OrdensAddModalComponent */])
            .subscribe(function (data) {
            if (data) {
                _this.showToast(data);
            }
        });
    };
    OrdensTableComponent.prototype.editModalShow = function (ordens) {
        var _this = this;
        var disposable = this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_15__ordens_edit_modal_ordens_edit_modal_component__["a" /* OrdensEditModalComponent */], ordens)
            .subscribe(function (data) {
            if (data) {
                _this.showToast(data);
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Modified complete'); });
    };
    OrdensTableComponent.prototype.onDeleteConfirm = function (event, item) {
        var _this = this;
        if (window.confirm('¿Estas seguro de querer eliminar este registro?')) {
            this.service.remove(item.idorden)
                .subscribe(function (data) { return _this.showToast(data); }, function (error) { return console.log(error); }, function () { return console.log('Delete completed'); });
        }
        else {
            console.log('item cancelado');
        }
    };
    OrdensTableComponent.prototype.showToast = function (result) {
        if (result.success) {
            this.toastrService.success(result.message);
            // RECARGA TABLA
            this.refill();
        }
        else {
            this.toastrService.error(result.message);
        }
    };
    OrdensTableComponent.prototype.filtrarFechas = function (fechaDesde, fechaHasta) {
        var _this = this;
        this.service
            .allFromTo(fechaDesde, fechaHasta)
            .subscribe(function (data) {
            if (data.success) {
                var result = __WEBPACK_IMPORTED_MODULE_20_lodash__["chain"](data.result)
                    .sortBy('estado_estado_idestado')
                    .sortBy('idorden')
                    .value();
                _this.data = result;
            }
            else {
                _this.toastrService.error(data.message);
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Items complete'); });
    };
    OrdensTableComponent.prototype.getAll = function () {
        var _this = this;
        this.service
            .all()
            .subscribe(function (data) {
            if (data.success) {
                var result = __WEBPACK_IMPORTED_MODULE_20_lodash__["chain"](data.result)
                    .sortBy('estado_estado_idestado')
                    .sortBy('idorden')
                    .value();
                _this.data = result;
            }
            else {
                _this.toastrService.error(data.message);
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Items complete'); });
    };
    return OrdensTableComponent;
}());
OrdensTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__angular_core__["Component"])({
        selector: 'ordens-table',
        template: __webpack_require__(1852),
        styles: [__webpack_require__(1759)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_13__ordens_service__["a" /* OrdensService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__ordens_service__["a" /* OrdensService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_11_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11_ngx_toastr__["b" /* ToastrService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_10_ng2_bootstrap_modal__["DialogService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10_ng2_bootstrap_modal__["DialogService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__estados_components_estados_table_estados_service__["a" /* EstadosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__estados_components_estados_table_estados_service__["a" /* EstadosService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__estadopagos_components_estadopagos_table_estadopagos_service__["a" /* EstadopagosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__estadopagos_components_estadopagos_table_estadopagos_service__["a" /* EstadopagosService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__clientes_components_clientes_table_clientes_service__["a" /* ClientesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__clientes_components_clientes_table_clientes_service__["a" /* ClientesService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__shared_common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_common_service__["a" /* CommonService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__estadoactividads_components_estadoactividads_table_estadoactividads_service__["a" /* EstadoactividadsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__estadoactividads_components_estadoactividads_table_estadoactividads_service__["a" /* EstadoactividadsService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__shared_printer_service__["a" /* PrinterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_printer_service__["a" /* PrinterService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_9__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__angular_router__["b" /* ActivatedRoute */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* Router */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_8__shared_auth_localstorage_service__["a" /* AuthLocalstorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__shared_auth_localstorage_service__["a" /* AuthLocalstorage */]) === "function" && _m || Object])
], OrdensTableComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
/*
import { AuthService } from './../../../../shared/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DialogService } from 'ng2-bootstrap-modal';
import { ToastrService } from 'ngx-toastr';
import { OrdensInterface } from './ordens.interface';
import { OrdensResponseInterface } from './ordens-response.interface';
import { Component, OnInit } from '@angular/core';
import { OrdensService } from './ordens.service';
import { OrdensAddModalComponent } from './ordens-add-modal/ordens-add-modal.component';
import { OrdensEditModalComponent } from './ordens-edit-modal/ordens-edit-modal.component';
import { AbonosInterface } from './../../../abonos/components/abonos-table/abonos.interface';
import { AbonosAddModalComponent } from './../../../abonos/components/abonos-table/abonos-add-modal/abonos-add-modal.component';
import { OrdenestadosInterface } from './../../../ordenestados/components/ordenestados-table/ordenestados.interface';
import { OrdenestadosAddModalComponent } from './../../../ordenestados/components/ordenestados-table/ordenestados-add-modal/ordenestados-add-modal.component';
import { OrdenproductosInterface } from './../../../ordenproductos/components/ordenproductos-table/ordenproductos.interface';
import { OrdenproductosAddModalComponent } from './../../../ordenproductos/components/ordenproductos-table/ordenproductos-add-modal/ordenproductos-add-modal.component';
import { Orden_has_refaccionsInterface } from './../../../orden_has_refaccions/components/orden_has_refaccions-table/orden_has_refaccions.interface';
import { Orden_has_refaccionsAddModalComponent } from './../../../orden_has_refaccions/components/orden_has_refaccions-table/orden_has_refaccions-add-modal/orden_has_refaccions-add-modal.component';

@Component({
selector: 'ordens-table',
templateUrl: './ordens-table.html',
styleUrls: ['./ordens-table.scss'],
})
export class OrdensTableComponent implements OnInit {
    data;
    filterQuery = '';
    rowsOnPage = 10;
    sortBy = 'idorden';
    sortOrder = 'asc';
    backpage: boolean;

    // Permisos en vista
    updateable: boolean = false;
    deleteable: boolean = false;
    writeable: boolean = false;

    constructor(
      private service: OrdensService,
      private toastrService: ToastrService,
      private dialogService: DialogService,
      private authService: AuthService,
      private route: ActivatedRoute,
      private router: Router) {

      // Buscar permisos del usuario en el módulo
      const user = this.authService.useJwtHelper();
      
      if (user.super) {
        this.updateable = true;
        this.deleteable = true;
        this.writeable = true;
      } else {
        const userModules = this.authService.getUserModules();
        if (userModules[0]) {
          for (const element in userModules) {
            if (userModules[element].path === '/pages/checkouts') {
              this.updateable = userModules[element].updateable;
              this.deleteable = userModules[element].deleteable;
              this.writeable = userModules[element].writeable;
            }
          }
        }
      }
    }
    ngOnInit() {
      this.refill();
    }
    refill() {
      this.route.params.subscribe(params => {
        if (params['idcliente'] !== undefined) {
          const idcliente = +params['idcliente'];
          this.findByIdCliente(idcliente);
          this.backpage = true;
        }
        if (params['idvehiculotaller'] !== undefined) {
          const idvehiculotaller = +params['idvehiculotaller'];
          this.findByIdVehiculotaller(idvehiculotaller);
          this.backpage = true;
        }
        if (!this.backpage) {
          this.getAll();
        }
      });
    }
    private findByIdCliente(id: number): void {
      this.service
        .findByIdCliente(id)
        .subscribe(
            (data: OrdensResponseInterface) => {
                if (data.success) {
                  const result = _.chain(data.result)
                    .sortBy('estado_estado_idestado')
                    .sortBy('idorden')
                    .value();

                  this.data = result;
                } else {
                  this.toastrService.error(data.message);
                }
            },
            error => console.log(error),
            () => console.log('Get all Items complete'))
    }
    private findByIdVehiculotaller(id: number): void {
      this.service
        .findByIdVehiculotaller(id)
        .subscribe(
            (data: OrdensResponseInterface) => {
                if (data.success) {
                  const result = _.chain(data.result)
                    .sortBy('estado_estado_idestado')
                    .sortBy('idorden')
                    .value();

                  this.data = result;
                } else {
                  this.toastrService.error(data.message);
                }
            },
            error => console.log(error),
            () => console.log('Get all Items complete'))
    }
    backPage() {
        window.history.back();
    }
    insertAbono(ordens: OrdensInterface) {
      const abono: AbonosInterface = {
        orden_idorden: ordens.idorden
      }
      const disposable = this.dialogService.addDialog(AbonosAddModalComponent, abono)
      .subscribe( data => {
          if (data) {
              this.abonoShowToast(data);
          }
      });
    }
    abonoShowToast(result) {
        if (result.success) {
            this.toastrService.success(result.message);
            this.refill();
        } else {
            this.toastrService.error(result.message);
        }
    }
    viewAbono(ordens: OrdensInterface) {
      this.router.navigate([`/pages/abonos/orden/${ordens.idorden}`]);
    }
    insertOrdenestado(ordens: OrdensInterface) {
      const ordenestado: OrdenestadosInterface = {
        orden_idorden: ordens.idorden
      }
      const disposable = this.dialogService.addDialog(OrdenestadosAddModalComponent, ordenestado)
      .subscribe( data => {
          if (data) {
              this.ordenestadoShowToast(data);
          }
      });
    }
    ordenestadoShowToast(result) {
        if (result.success) {
            this.toastrService.success(result.message);
            this.refill();
        } else {
            this.toastrService.error(result.message);
        }
    }
    viewOrdenestado(ordens: OrdensInterface) {
      this.router.navigate([`/pages/ordenestados/orden/${ordens.idorden}`]);
    }
    insertOrdenproducto(ordens: OrdensInterface) {
      const ordenproducto: OrdenproductosInterface = {
        orden_idorden: ordens.idorden
      }
      const disposable = this.dialogService.addDialog(OrdenproductosAddModalComponent, ordenproducto)
      .subscribe( data => {
          if (data) {
              this.ordenproductoShowToast(data);
          }
      });
    }
    ordenproductoShowToast(result) {
        if (result.success) {
            this.toastrService.success(result.message);
            this.refill();
        } else {
            this.toastrService.error(result.message);
        }
    }
    viewOrdenproducto(ordens: OrdensInterface) {
      this.router.navigate([`/pages/ordenproductos/orden/${ordens.idorden}`]);
    }
    insertOrden_has_refaccion(ordens: OrdensInterface) {
      const orden_has_refaccion: Orden_has_refaccionsInterface = {
        orden_idorden: ordens.idorden
      }
      const disposable = this.dialogService.addDialog(Orden_has_refaccionsAddModalComponent, orden_has_refaccion)
      .subscribe( data => {
          if (data) {
              this.orden_has_refaccionShowToast(data);
          }
      });
    }
    orden_has_refaccionShowToast(result) {
        if (result.success) {
            this.toastrService.success(result.message);
            this.refill();
        } else {
            this.toastrService.error(result.message);
        }
    }
    viewOrden_has_refaccion(ordens: OrdensInterface) {
      this.router.navigate([`/pages/orden_has_refaccions/orden/${ordens.idorden}`]);
    }
    addModalShow() {
      const disposable = this.dialogService.addDialog(OrdensAddModalComponent)
      .subscribe( data => {
          if (data) {
              this.showToast(data);
          }
      });
    }
    editModalShow(ordens: OrdensInterface) {
      const disposable = this.dialogService.addDialog(OrdensEditModalComponent, ordens)
      .subscribe( data => {
          if (data) {
              this.showToast(data);
          }
      },
      error => console.log(error),
      () => console.log('Modified complete'));
    }
    onDeleteConfirm(event, item): void {
      if (window.confirm('¿Estas seguro de querer eliminar este registro?')) {
          this.service.remove(item.idorden)
          .subscribe(
              (data) => this.showToast(data),
              error => console.log(error),
              () => console.log('Delete completed')
          );
      } else {
          console.log('item cancelado');
      }
    }
    showToast(result) {
      if (result.success) {
        this.toastrService.success(result.message);
        this.refill();
      } else {
        this.toastrService.error(result.message);
      }
    }
    private getAll(): void {
      this.service
        .all()
        .subscribe(
            (data: OrdensResponseInterface) =>  {
                if (data.success) {
                  const result = _.chain(data.result)
                    .sortBy('estado_estado_idestado')
                    .sortBy('idorden')
                    .value();

                  this.data = result;
                } else {
                  this.toastrService.error(data.message);
                }
            },
            error => console.log(error),
            () => console.log('Get all Items complete'))
    }
  }
*/ 
//# sourceMappingURL=ordens-table.component.js.map

/***/ }),

/***/ 1588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdensComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrdensComponent = (function () {
    function OrdensComponent() {
    }
    OrdensComponent.prototype.ngOnInit = function () {
    };
    return OrdensComponent;
}());
OrdensComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ordens',
        template: __webpack_require__(1853)
    }),
    __metadata("design:paramtypes", [])
], OrdensComponent);

//# sourceMappingURL=ordens.component.js.map

/***/ }),

/***/ 1694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ordens_component__ = __webpack_require__(1588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_ordens_table_ordens_table_component__ = __webpack_require__(1587);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });



// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__ordens_component__["a" /* OrdensComponent */],
        children: [
            { path: 'ordens-table', component: __WEBPACK_IMPORTED_MODULE_2__components_ordens_table_ordens_table_component__["a" /* OrdensTableComponent */] }
        ]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes);
//# sourceMappingURL=ordens.routing.js.map

/***/ }),

/***/ 1759:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ":host /deep/ .widgets .data-table-container {\n  width: 100%; }\n  :host /deep/ .widgets .data-table-container .panel-heading {\n    margin-top: 25px; }\n\n.bot-links {\n  width: 100%;\n  padding-top: 10px; }\n\n.bot-links a {\n  display: inline-block;\n  padding: 5px;\n  background: #00a8ff;\n  font-size: 12px;\n  margin-bottom: 5px;\n  color: #ffffff;\n  text-decoration: none; }\n\n.card {\n  -moz-transition: -moz-transform 1s ease-in-out 0.2s;\n  -webkit-transition: -webkit-transform 1s ease-in-out 0.2s; }\n\n:host /deep/ .feed-messages-container .feed-message .hidden {\n  display: none !important;\n  -moz-transform: scale(1, -1);\n  -webkit-transform: scale(1, -1); }\n\n:host /deep/ .feed-messages-container .feed-message .message-icon {\n  cursor: pointer;\n  width: 60px;\n  height: 60px;\n  float: left;\n  position: relative;\n  margin-left: 20px; }\n  :host /deep/ .feed-messages-container .feed-message .message-icon > img, :host /deep/ .feed-messages-container .feed-message .message-icon .media-icon {\n    border-radius: 30px;\n    width: 100%;\n    height: 100%; }\n  :host /deep/ .feed-messages-container .feed-message .message-icon .sub-photo-icon {\n    display: inline-block;\n    padding: 4px; }\n    :host /deep/ .feed-messages-container .feed-message .message-icon .sub-photo-icon:after {\n      content: '';\n      display: inline-block;\n      width: 22px;\n      height: 22px;\n      background-size: contain; }\n    :host /deep/ .feed-messages-container .feed-message .message-icon .sub-photo-icon.video-message {\n      background: #e85656; }\n      :host /deep/ .feed-messages-container .feed-message .message-icon .sub-photo-icon.video-message:after {\n        background-image: url(\"/assets/img/theme/icon/feed/feed-video.svg\"); }\n    :host /deep/ .feed-messages-container .feed-message .message-icon .sub-photo-icon.image-message {\n      background: #90b900; }\n      :host /deep/ .feed-messages-container .feed-message .message-icon .sub-photo-icon.image-message:after {\n        width: 21px;\n        height: 21px;\n        margin-top: 1px;\n        margin-left: 1px;\n        border-radius: 5px;\n        background-image: url(\"/assets/img/theme/icon/feed/feed-image.svg\"); }\n    :host /deep/ .feed-messages-container .feed-message .message-icon .sub-photo-icon.geo-message {\n      background: #209e91; }\n      :host /deep/ .feed-messages-container .feed-message .message-icon .sub-photo-icon.geo-message:after {\n        width: 22px;\n        height: 22px;\n        background-image: url(\"/assets/img/theme/icon/feed/feed-location.svg\"); }\n  :host /deep/ .feed-messages-container .feed-message .message-icon .sub-photo-icon {\n    position: absolute;\n    width: 30px;\n    height: 30px;\n    right: -2px;\n    bottom: -4px;\n    border-radius: 15px; }\n\n:host /deep/ .feed-messages-container .feed-message .text-block {\n  cursor: pointer;\n  position: relative;\n  border-radius: 5px;\n  margin: 0 0 0 80px;\n  padding: 5px 20px;\n  color: #666666;\n  width: 280px;\n  height: 70px; }\n  :host /deep/ .feed-messages-container .feed-message .text-block.text-message {\n    font-size: 12px;\n    width: inherit;\n    max-width: calc(100% - 80px);\n    height: inherit;\n    min-height: 60px; }\n    :host /deep/ .feed-messages-container .feed-message .text-block.text-message:before {\n      display: block; }\n    :host /deep/ .feed-messages-container .feed-message .text-block.text-message .message-content {\n      font-size: 12px;\n      line-height: 15px;\n      font-weight: 300; }\n  :host /deep/ .feed-messages-container .feed-message .text-block.small-message {\n    width: 155px;\n    height: 145px; }\n    :host /deep/ .feed-messages-container .feed-message .text-block.small-message .preview {\n      bottom: 0;\n      top: initial;\n      height: 87px; }\n      :host /deep/ .feed-messages-container .feed-message .text-block.small-message .preview img {\n        width: 155px;\n        height: 87px;\n        border-radius: 0 0 5px 5px; }\n\n:host /deep/ .feed-messages-container .feed-message .message-header {\n  font-size: 12px;\n  padding-bottom: 5px; }\n  :host /deep/ .feed-messages-container .feed-message .message-header .author {\n    font-size: 13px;\n    padding-right: 5px; }\n\n:host /deep/ .feed-messages-container .feed-message .message-content {\n  font-size: 18px;\n  line-height: 20px; }\n\n:host /deep/ .feed-messages-container .feed-message .preview {\n  transition: 0s linear all;\n  display: inline-block; }\n  :host /deep/ .feed-messages-container .feed-message .preview img {\n    padding-top: 10px;\n    width: 100%;\n    height: auto;\n    float: none !important; }\n\n:host /deep/ .feed-messages-container .feed-message .message-time {\n  width: 100%;\n  left: 0;\n  font-size: 11px;\n  padding-top: 10px;\n  color: #949494;\n  margin-bottom: 5px; }\n  :host /deep/ .feed-messages-container .feed-message .message-time .post-time {\n    float: left; }\n  :host /deep/ .feed-messages-container .feed-message .message-time .ago-time {\n    float: right; }\n\n:host /deep/ .feed-messages-container .line-clamp {\n  display: block;\n  display: -webkit-box;\n  position: relative;\n  line-height: 1.2;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 0 !important; }\n\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  :host /deep/ .feed-messages-container .line-clamp:after {\n    content: '...';\n    text-align: right;\n    bottom: 0;\n    right: 0;\n    width: 25%;\n    display: block;\n    position: absolute;\n    height: calc(1em * 1.2); } }\n\n@supports (-webkit-line-clamp: 1) {\n  :host /deep/ .feed-messages-container .line-clamp:after {\n    display: none !important; } }\n\n:host /deep/ .feed-messages-container .line-clamp-1 {\n  -webkit-line-clamp: 1;\n  height: calc(1em * 1.2 * 1); }\n\n:host /deep/ .feed-messages-container .line-clamp-2 {\n  -webkit-line-clamp: 2;\n  height: calc(1em * 1.2 * 2); }\n\n:host /deep/ .feed-messages-container .line-clamp-3 {\n  -webkit-line-clamp: 3;\n  height: calc(1em * 1.2 * 3); }\n\n:host /deep/ .feed-messages-container .line-clamp-4 {\n  -webkit-line-clamp: 4;\n  height: calc(1em * 1.2 * 4); }\n\n:host /deep/ .feed-messages-container .line-clamp-5 {\n  -webkit-line-clamp: 5;\n  height: calc(1em * 1.2 * 5); }\n\n/deep/.feed-panel .card-body {\n  padding: 10px 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1852:
/***/ (function(module, exports) {

module.exports = "\n<div class='widgets'>\n\n<div class='row'>\n        <ba-card title='Listado de Órdenes' baCardClass='with-scroll' class='data-table-container'>\n            <div class='panel panel-default'>\n                <div class=\"panel-heading\" *ngIf=\"backpage\"><h2>Información de Órdenes</h2></div>\n                <table class='table table-striped'>\n                    <thead  *ngIf=\"!backpage\">\n                        <tr>\n                            <td colspan='1'>\n                                Desde Fecha de Creación:\n                                <input class='form-control' #fechaDesde type=\"date\"/>\n                            </td>\n                            <td colspan='1'>\n                                Hasta Fecha de Creación:\n                                <input class='form-control' #fechaHasta type=\"date\"/>\n                            </td>\n                            <td colspan='3'>\n                                <br>\n                                <button class='btn btn-sm btn-info' (click)='filtrarFechas(fechaDesde.value, fechaHasta.value)' >Filtrar por Fechas</button>\n                            </td>\n                        </tr>\n                    </thead>\n                    <thead>\n                        <tr>\n                            <th class='text-left'>\n                                Filtrar por Estado:\n                                <select class='form-control' name=\"estado\" id=\"estado\" [(ngModel)]='filterQuery6'>\n                                    <option value=\"\">NINGUNO</option>\n                                    <option value=\"{{estado.nombre}}\" *ngFor=\"let estado of _estado\">{{estado.nombre}}</option>\n                                </select>\n                            </th>\n                            <th class='text-left'>\n                                Filtrar por Cliente:\n                                <select class='form-control' name=\"cliente\" id=\"cliente\" [(ngModel)]='filterQuery5'>\n                                    <option value=\"\">NINGUNO</option>\n                                    <option value=\"{{cliente.persona_persona_idpersona}}\" *ngFor=\"let cliente of _cliente\">{{cliente.persona_persona_idpersona}}</option>\n                                </select>\n                            </th>\n                            <th class='text-left'>\n                                Filtrar por Fecha de Creación:\n                                <input class='form-control' [(ngModel)]='filterQuery1' type=\"date\"/>\n                            </th>\n                            <th class='text-left'>\n                                Filtrar por Fecha Estimada de Entrega:\n                                <input class='form-control' [(ngModel)]='filterQuery2' type=\"date\" />\n                            </th>\n                            <th class='text-left'>\n                                Filtrar por Fecha Real de Entrega:\n                                <input class='form-control' [(ngModel)]='filterQuery3' type=\"date\" />\n                            </th>\n                        </tr>\n                    </thead>\n                </table>\n            </div>\n        </ba-card>\n    </div>\n\n    <div class='row'>\n        <div class=\"col-xl-3 col-lg-4 col-md-6 col-sm-12 feed-messages-container\" style=\"padding-bottom: 25px;\"  *ngFor='let item of data | fechaDataFilter : filterQuery1 | fechaEntregaEstimadaDataFilter : filterQuery2 | fechaEntregaRealDataFilter : filterQuery3 | cliente_cliente_idclienteDataFilter : filterQuery5 | estado_estado_idestadoDataFilter : filterQuery6;  let i = index'>\n            <div class=\"card feed-message\" >\n                <div class=\"card-body\">\n                    <h3 class=\"card-title\">Folio: {{ item.idorden }}\n                        <span style=\"float: right;\"> \n                            <button title='Editar Registro' (click)='editModalShow(item)' class='btn btn-xs btn-info'><i class='fa fa-edit'></i></button>\n                            <button title='Eliminar Registro' (click)='onDeleteConfirm($event, item)' class='btn btn-xs btn-danger'><i class='fa fa-trash'></i></button>\n                            <button title='Desplegar más información' (click)=\"expandMessage(item)\" class='btn btn-xs btn-default'><i class='fa fa-arrow-up'></i></button>\n                        </span>\n                    </h3>\n                    <hr>\n                    <div class=\"table-responsive\">\n                        <table class=\"table\">\n                            <tbody>\n                                <tr>\n                                    <td class=\"card-subtitle mb-2\">\n                                        {{ item.estado_estado_idestado }}\n                                        <button title='Ver Estados' (click)='viewOrdenestado(item)' class='btn btn-xs btn-warning'><i class='fa fa-eye'></i></button>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td class=\"card-subtitle mb-2 text-muted\">Cliente: </td>\n                                </tr>\n                                <tr>\n                                    <td>{{ item.cliente_cliente_idcliente }} <strong>{{ item.cliente_razonsocial }}</strong></td>\n                                </tr>\n                                <tr>\n                                    <td class=\"card-subtitle mb-2 text-muted\">Total: </td>\n                                </tr>\n                                <tr>\n                                    <td>{{ item.total | currency: 'MXN' }}</td>\n                                </tr>\n                                <tr>\n                                    <td class=\"card-subtitle mb-2 text-muted\">Fecha de Entrega: </td>\n                                </tr>\n                                <tr>\n                                    <td>{{ item.fechaEntregaEstimada | date:'dd/MM/y' }}</td>\n                                </tr>\n                                <tr>\n                                    <td class=\"card-subtitle mb-2 text-muted\">Fecha de Creación: </td>\n                                </tr>\n                                <tr>\n                                    <td>{{ item.fecha | date:'dd/MM/y' }}</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                    <div class=\"card\" style=\"margin-bottom:20px;\" [ngClass]=\"{'hidden': item.expanded}\">\n                        <div class=\"card-header\">\n                            Servicios  \n                            <button title='Agregar Producto' (click)='insertOrdenproducto(item)' type=\"button\" class=\"btn btn-xs btn-success\"> <i class=\"ion-plus-round\"></i></button>\n                            <button title='Ver Productos' (click)='viewOrdenproducto(item)' type=\"button\" class=\"btn btn-xs btn-warning\"> <i class=\"ion-eye\"></i></button>\n                        </div>\n                        \n                        <ul class=\"list-group list-group-flush\">\n                            <li class=\"list-group-item text-dark\" *ngFor='let producto of data[i].ordenproducto;  let c = index' >\n                                {{ producto.producto_producto_idproducto }}  - <strong>{{ producto.precio | currency: 'MXN'}}</strong> \n                                <div class=\"bot-links\">\n                                    <p style=\"display: block; clear: both;\">\n                                        <span class=\"card-subtitle mb-2 text-muted\">Tareas: </span>  \n                                        <button title='Agregar Tarea' (click)='insertOrdentarea(producto)' class='btn btn-xs btn-success'><i class='fa fa-plus'></i></button>\n                                        <button title='Ver Tareas' (click)='viewOrdentarea(producto)' class='btn btn-xs btn-warning'><i class='fa fa-eye'></i></button>\n                                    </p>\n                                    <a (click)=\"insertEmpleadotarea(tarea)\" [ngClass]=\"{'bg-success': tarea.estado_estado_idestado === 'HECHA',\n                                        'bg-info': tarea.estado_estado_idestado === 'POR HACERSE',\n                                        'bg-primary': tarea.estado_estado_idestado === 'TRABAJANDO',\n                                        'bg-warning': tarea.estado_estado_idestado === 'FINALIZADA',\n                                        'bg-danger': tarea.estado_estado_idestado === 'CANCELADA'}\"\n                                        *ngFor='let tarea of data[i].ordenproducto[c].tareas;  let x = index' style=\"margin:0 2px 2px 0;\">\n                                        \n                                         {{ tarea.tarea_tarea_idtarea }}\n                                         \n                                         <span [ngClass]=\"{'text-success': empleado.estado_estado_idestado === 'HECHA', \n                                                            'text-info': empleado.estado_estado_idestado === 'POR HACERSE', \n                                                            'text-primary': empleado.estado_estado_idestado === 'TRABAJANDO'}\" \n                                                            style=\"padding: 1px 2px; margin:1px 2px; background-color: white; color: gray;\"\n                                                            *ngFor='let empleado of data[i].ordenproducto[c].tareas[x].empleadotarea;  let e = index'>\n                                             {{ empleado.empleado_empleado_idempleado }}\n                                         </span>\n                                         \n                                    </a> \n                                </div>\n                            </li>\n                        </ul>\n                    </div>\n                    <div class=\"card\" [ngClass]=\"{'hidden': item.expanded}\">\n                        <div class=\"card-header\" >\n                            Refacciones \n                            <button title='Agregar Refaccion' (click)='insertRefaccion(item)' type=\"button\" class=\"btn btn-xs btn-success\"> <i class=\"ion-plus-round\"></i></button> \n                            <button title='Ver Refacciones' (click)='viewRefaccion(item)' type=\"button\" class=\"btn btn-xs btn-warning\"> <i class=\"ion-eye\"></i></button>\n                        </div>\n                        <div class=\"table-responsive\">\n                            <table class=\"table table-striped\">\n                                <thead>\n                                    <tr>\n                                        <th scope=\"col\">$ Unidad</th>\n                                        <th scope=\"col\">Cant.</th>\n                                        <th scope=\"col\">Nombre</th>\n                                        <th scope=\"col\">$ Total</th>\n                                        <th scope=\"col\">Proveedor</th>\n                                        <th scope=\"col\">Nota</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor='let refaccion of data[i].refacciones;  let a = index'>\n                                        <td>{{ refaccion.precioVenta | currency: 'MXN' }}</td>\n                                        <td>{{ refaccion.cantidad }}</td>\n                                        <td>{{ refaccion.refaccion_refaccion_idrefaccion }}</td>\n                                        <td>{{ refaccion.precioVenta * refaccion.cantidad | currency: 'MXN' }}</td>\n                                        <td>{{ refaccion.proveedor }}</td>\n                                        <td>{{ refaccion.nota }}</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <div class=\"card\" [ngClass]=\"{'hidden': item.expanded}\">\n                        <div class=\"card-header\" >\n                            Abonos \n                            <button title='Agregar Abono' (click)='insertAbono(item)' type=\"button\" class=\"btn btn-xs btn-success\"> <i class=\"ion-plus-round\"></i></button> \n                            <button title='Ver Abonos' (click)='viewAbono(item)' type=\"button\" class=\"btn btn-xs btn-warning\"> <i class=\"ion-eye\"></i></button>\n                        </div>\n                        <div class=\"table-responsive\">\n                            <table class=\"table table-striped\">\n                                <thead>\n                                    <tr>\n                                        <th scope=\"col\">Fecha</th>\n                                        <th scope=\"col\">Abonado</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor='let abono of data[i].abonos;  let a = index'>\n                                        <td>{{ abono.fecha | date:'dd/MM/y' }}</td>\n                                        <td>{{ abono.montoPagado | currency: 'MXN' }}</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <div class=\"card\" [ngClass]=\"{'hidden': item.expanded}\">\n                        <div class=\"card-header\">\n                            Totales\n                        </div>\n                        <div class=\"table-responsive\">\n                            <table class=\"table table-hover\">\n                                <tbody>\n                                    <tr>\n                                        <td>Subtotal: </td>\n                                        <td>{{ item.subtotal | currency: 'MXN' }}</td>\n                                    </tr>\n                                    <tr>\n                                        <td>Total: </td>\n                                        <td>{{ item.total | currency: 'MXN' }}</td>\n                                    </tr>\n                                    <tr>\n                                        <td>Abonado: </td>\n                                        <td>{{ item.abonado | currency: 'MXN' }}</td>\n                                    </tr>\n                                    <tr>\n                                        <td>Adeudando: </td>\n                                        <td>{{ item.adeudo | currency: 'MXN' }}</td>\n                                    </tr>\n                                    <tr>\n                                        <td>Facturar: </td>\n                                        <td>{{ item.factura ? 'Si' : 'No' }}</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    \n                    <div class=\"card\" [ngClass]=\"{'hidden': item.expanded}\">\n                        <div class=\"card-header\">\n                            Comentarios\n                        </div>\n                        <ul class=\"list-group list-group-flush\">\n                            <li class=\"list-group-item text-dark\">\n                                {{ item.comentarios }}\n                            </li>\n                        </ul>\n                    </div>\n                    <hr>\n\n                    <button *ngIf=\"item.estado_estado_idestado === 'PAGADO ENTREGADO'\" title='Finalizar Orden' (click)='finalizarOrden(item)' class='btn btn-xs btn-success'><i class='fa fa-check-square'></i> Finalizar</button>\n                    <button  *ngIf=\"item.estado_estado_idestado === 'SOBREPAGADO' || item.estado_estado_idestado === 'PAGADO SIN ENTREGAR' || item.estado_estado_idestado === 'REALIZADO SIN ENTREGAR'\" title='Entregar Orden' (click)='entregarOrden(item)' class='btn btn-xs btn-info'><i class='fa fa-check'></i> Entregar</button>\n                    <button title='Imprimir Orden' (click)='printOrden(item)' class='btn btn-xs btn-primary'><i class='fa fa-print'></i> Imprimir</button>\n                </div>\n            </div>\n        </div>\n                              \n    </div>\n\n    <div class='row'>\n        <div class='col-sm-2' *ngIf=\"!backpage\">\n            <button (click)='addModalShow()' class='btn btn-success'><i class='fa fa-plus'></i> Agregar</button>\n        </div>\n        <div class='col-sm-2'>\n            <button (click)='descargarCSV(data, \"Reporte de Órdenes\", true)' class='btn btn-success'><i class='fa fa-excel'></i> Descargar como CSV</button>\n        </div>\n        <div class='col-sm-2'>\n            <button title='Imprimir Reporte' (click)='printReporte(data)' class='btn btn-info'><i class='fa fa-print'></i> Imprimir Reporte</button>\n        </div>\n        <div class='col-sm-2' *ngIf=\"backpage\">\n            <button (click)='backPage()' class='btn btn-primary'><i class='fa fa-arrow-left'></i> Regresar</button>\n        </div>\n    </div>\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!--\n<div class='widgets'>\n    <div class='row'>\n        <ba-card title='Listado' baCardClass='with-scroll' class='data-table-container'>\n            <div class='panel panel-default'>\n                <div class=\"panel-heading\" *ngIf=\"backpage\"><h2>Información de Orden</h2></div>\n                <table class='table table-striped' [mfData]='data | fechaDataFilter : filterQuery1 | fechaEntregaEstimadaDataFilter : filterQuery2 | fechaEntregaRealDataFilter : filterQuery3 | fechaInicioEstimadaDataFilter : filterQuery4 | cliente_cliente_idclienteDataFilter : filterQuery5 | vehiculotaller_vehiculotaller_idvehiculotallerDataFilter : filterQuery6' #mf='mfDataTable' [mfRowsOnPage]='rowsOnPage' [(mfSortBy)]='sortBy' [(mfSortOrder)]='sortOrder'>\n                    <thead>\n                        <tr>\n                            <th colspan='3' class='text-left'>\n                                Filtrar por Fecha:\n                                <input class='form-control' [(ngModel)]='filterQuery1' />\n                            </th>\n                            <th colspan='3' class='text-left'>\n                                Filtrar por Fecha Estimada de Entrega:\n                                <input class='form-control' [(ngModel)]='filterQuery2' />\n                            </th>\n                            <th colspan='3' class='text-left'>\n                                Filtrar por Fecha Real de Entrega:\n                                <input class='form-control' [(ngModel)]='filterQuery3' />\n                            </th>\n                            <th colspan='3' class='text-left'>\n                                Filtrar por Fecha de Inicio Estimada:\n                                <input class='form-control' [(ngModel)]='filterQuery4' />\n                            </th>\n                            <th colspan='3' class='text-left'>\n                                Filtrar por Cliente:\n                                <input class='form-control' [(ngModel)]='filterQuery5' />\n                            </th>\n                            <th colspan='4' class='text-left'>\n                                Filtrar por Motivo de Reparación:\n                                <input class='form-control' [(ngModel)]='filterQuery6' />\n                            </th>\n                        </tr>\n                        <tr>\n                            <th style='width: 20%'></th>\n                            <th style='width: 4%'>\n                                <mfDefaultSorter by='cliente_cliente_idcliente'>Cliente</mfDefaultSorter>\n                            </th>\n                            <th style='width: 4%'>\n                                <mfDefaultSorter by='fecha'>Fecha</mfDefaultSorter>\n                            </th>\n                            <th style='width: 4%'>\n                                <mfDefaultSorter by='hora'>Hora</mfDefaultSorter>\n                            </th>\n                            <th style='width: 4%'>\n                                <mfDefaultSorter by='fechaEntregaEstimada'>Fecha Estimada de Entrega</mfDefaultSorter>\n                            </th>\n                            <th style='width: 4%'>\n                                <mfDefaultSorter by='horaEntregaEstimada'>Hora Estimada de Entrega</mfDefaultSorter>\n                            </th>\n                            <th style='width: 4%'>\n                                <mfDefaultSorter by='fechaEntregaReal'>Fecha Real de Entrega</mfDefaultSorter>\n                            </th>\n                            <th style='width: 4%'>\n                                <mfDefaultSorter by='horaEntregaReal'>Hora Real de Entrega</mfDefaultSorter>\n                            </th>\n                            <th style='width: 4%'>\n                                <mfDefaultSorter by='fechaInicioEstimada'>Fecha Estimada de Inicio</mfDefaultSorter>\n                            </th>\n                            <th style='width: 4%'>\n                                <mfDefaultSorter by='horaInicioEstimada'>Hora Estimada de Inicio</mfDefaultSorter>\n                            </th>\n                            <th style='width: 4%'>\n                                <mfDefaultSorter by='manoObra'>Mano de Obra</mfDefaultSorter>\n                            </th>\n                            <th style='width: 4%'>\n                                <mfDefaultSorter by='subtotal'>Subtotal</mfDefaultSorter>\n                            </th>\n                            <th style='width: 4%'>\n                                <mfDefaultSorter by='total'>Total</mfDefaultSorter>\n                            </th>\n                            <th style='width: 4%'>\n                                <mfDefaultSorter by='cubierto'>Monto Cubierto</mfDefaultSorter>\n                            </th>\n                            <th style='width: 4%'>\n                                <mfDefaultSorter by='abonado'>Monto Abonado</mfDefaultSorter>\n                            </th>\n                            <th style='width: 4%'>\n                                <mfDefaultSorter by='adeudo'>Monto Adeudado</mfDefaultSorter>\n                            </th>\n                            <th style='width: 4%'>\n                                <mfDefaultSorter by='factura'>Factura</mfDefaultSorter>\n                            </th>\n                            <th style='width: 4%'>\n                                <mfDefaultSorter by='vehiculotaller_vehiculotaller_idvehiculotaller'>Vehículo Reparando</mfDefaultSorter>\n                            </th>\n                            <th style='width: 4%'>\n                                <mfDefaultSorter by='comentarios'></mfDefaultSorter>\n                            </th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor='let item of mf.data;  let i = index'>\n                            <td>\n                                <div class='dropdown'>\n                                    <button class='btn btn-primary dropdown-toggle' type='button' id='dropdownAcciones' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>\n                                        Acciones\n                                    </button>\n                                    <div class='dropdown-menu' aria-labelledby='dropdownAcciones'>\n                                      <button title='Agregar Abono' (click)='insertAbono(item)' class='btn btn-sm btn-default dropdown-item'><i class='fa fa-plus text-success'></i> Abono</button>\n                                      <button title='Ver Abono' (click)='viewAbono(item)' class='btn btn-sm btn-default dropdown-item'><i class='fa fa-eye'></i> Abono</button>\n                                      <div class='dropdown-divider'></div>\n                                      <button title='Agregar Orden Estado' (click)='insertOrdenestado(item)' class='btn btn-sm btn-default dropdown-item'><i class='fa fa-plus text-success'></i> Orden Estado</button>\n                                      <button title='Ver Orden Estado' (click)='viewOrdenestado(item)' class='btn btn-sm btn-default dropdown-item'><i class='fa fa-eye'></i> Orden Estado</button>\n                                      <div class='dropdown-divider'></div>\n                                      <button title='Agregar Orden Producto' (click)='insertOrdenproducto(item)' class='btn btn-sm btn-default dropdown-item'><i class='fa fa-plus text-success'></i> Orden Producto</button>\n                                      <button title='Ver Orden Producto' (click)='viewOrdenproducto(item)' class='btn btn-sm btn-default dropdown-item'><i class='fa fa-eye'></i> Orden Producto</button>\n                                      <div class='dropdown-divider'></div>\n                                      <button title='Agregar Refacciones de ordenes' (click)='insertOrden_has_refaccion(item)' class='btn btn-sm btn-default dropdown-item'><i class='fa fa-plus text-success'></i> Refacciones de ordenes</button>\n                                      <button title='Ver Refacciones de ordenes' (click)='viewOrden_has_refaccion(item)' class='btn btn-sm btn-default dropdown-item'><i class='fa fa-eye'></i> Refacciones de ordenes</button>\n                                      <div class='dropdown-divider'></div>\n                                      <button *ngIf='updateable' title='Editar Registro' (click)='editModalShow(item)' class='btn btn-sm btn-default text-primary dropdown-item'><i class='fa fa-edit'></i> Editar </button>\n                                      <button *ngIf='deleteable' title='Eliminar Registro' (click)='onDeleteConfirm($event, item)' class='btn btn-sm btn-default text-danger dropdown-item'><i class='fa fa-trash'></i> Eliminar</button>\n                                    </div>\n                                </div>\n                            </td>\n                            <td>{{ item.cliente_cliente_idcliente }}</td>\n                            <td>{{ item.fecha | date:'dd/MM/y' }}</td>\n                            <td>{{ item.hora  }}</td>\n                            <td>{{ item.fechaEntregaEstimada | date:'dd/MM/y' }}</td>\n                            <td>{{ item.horaEntregaEstimada  }}</td>\n                            <td>{{ item.fechaEntregaReal | date:'dd/MM/y' }}</td>\n                            <td>{{ item.horaEntregaReal  }}</td>\n                            <td>{{ item.fechaInicioEstimada | date:'dd/MM/y' }}</td>\n                            <td>{{ item.horaInicioEstimada  }}</td>\n                            <td>{{ item.manoObra  }}</td>\n                            <td>{{ item.subtotal  }}</td>\n                            <td>{{ item.total  }}</td>\n                            <td>{{ item.cubierto  }}</td>\n                            <td>{{ item.abonado  }}</td>\n                            <td>{{ item.adeudo  }}</td>\n                            <td>{{ item.factura ? 'Si' : 'No' }}</td>\n                            <td>{{ item.vehiculotaller_vehiculotaller_idvehiculotaller }}</td>\n                            <td>{{ item.comentarios  }}</td>\n                        </tr>\n                    </tbody>\n                    <tfoot>\n                        <tr>\n                            <td colspan='5'>\n                                <mfBootstrapPaginator [rowsOnPageSet]='[5,10,15,25,50,100]'></mfBootstrapPaginator>\n                            </td>\n                        </tr>\n                    </tfoot>\n                </table>\n            </div>\n        </ba-card>\n    </div>\n    <div class='row'>\n        <div class='col-sm-2' *ngIf=\"!backpage\">\n            <button *ngIf='writeable' (click)='addModalShow()' class='btn btn-success'><i class='fa fa-plus'></i> Agregar</button>\n        </div>\n        <div class='col-sm-2' *ngIf=\"backpage\">\n            <button (click)='backPage()' class='btn btn-primary'><i class='fa fa-arrow-left'></i> Regresar</button>\n        </div>\n    </div>\n</div>\n-->\n"

/***/ }),

/***/ 1853:
/***/ (function(module, exports) {

module.exports = "  <ordens-table></ordens-table>\r\n"

/***/ })

});
//# sourceMappingURL=31.chunk.js.map