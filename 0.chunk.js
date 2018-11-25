webpackJsonp([0,67],{

/***/ 1504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_permisotaxis_reporte_permisotaxis_reporte_component__ = __webpack_require__(1618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_permisotaxis_reporte_permisotaxis_reporte_service__ = __webpack_require__(1619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_taller_bitacora_taller_service__ = __webpack_require__(1623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_taller_bitacora_taller_bitacora_component__ = __webpack_require__(1622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_chofer_bitacora_chofer_service__ = __webpack_require__(1615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_chofer_bitacora_chofer_bitacora_component__ = __webpack_require__(1614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_permisotaxis_bitacora_permisotaxis_service__ = __webpack_require__(1617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_permisotaxis_bitacora_permisotaxis_bitacora_component__ = __webpack_require__(1616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_bootstrap_modal__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_translation_module__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__theme_nga_module__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ng_bootstrap_ng_bootstrap__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_datatable__ = __webpack_require__(1527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__reportes_routing__ = __webpack_require__(1708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__reportes_component__ = __webpack_require__(1624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_reportes_table_reportes_service__ = __webpack_require__(1621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_reportes_table_reportes_table_component__ = __webpack_require__(1620);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportesModule", function() { return ReportesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var ReportesModule = (function () {
    function ReportesModule() {
    }
    return ReportesModule;
}());
ReportesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_10__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_11__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_12__app_translation_module__["a" /* AppTranslationModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_13__theme_nga_module__["a" /* NgaModule */],
            __WEBPACK_IMPORTED_MODULE_14__ng_bootstrap_ng_bootstrap__["b" /* NgbRatingModule */],
            __WEBPACK_IMPORTED_MODULE_16__reportes_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_15_angular2_datatable__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_14__ng_bootstrap_ng_bootstrap__["c" /* NgbModalModule */],
            __WEBPACK_IMPORTED_MODULE_8_ng2_bootstrap_modal__["BootstrapModalModule"].forRoot({ container: document.body })
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_17__reportes_component__["a" /* ReportesComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_reportes_table_reportes_table_component__["a" /* ReportesTableComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_permisotaxis_bitacora_permisotaxis_bitacora_component__["a" /* PermisotaxisBitacoraComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_chofer_bitacora_chofer_bitacora_component__["a" /* ChofersBitacoraComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_taller_bitacora_taller_bitacora_component__["a" /* TallersBitacoraComponent */],
            __WEBPACK_IMPORTED_MODULE_0__components_permisotaxis_reporte_permisotaxis_reporte_component__["a" /* PermisotaxisReporteComponent */]
        ],
        entryComponents: [],
        providers: [
            __WEBPACK_IMPORTED_MODULE_18__components_reportes_table_reportes_service__["a" /* ReportesService */],
            __WEBPACK_IMPORTED_MODULE_6__components_permisotaxis_bitacora_permisotaxis_service__["a" /* PermisotaxisBitacoraService */],
            __WEBPACK_IMPORTED_MODULE_4__components_chofer_bitacora_chofer_service__["a" /* ChofersBitacoraService */],
            __WEBPACK_IMPORTED_MODULE_2__components_taller_bitacora_taller_service__["a" /* TallersBitacoraService */],
            __WEBPACK_IMPORTED_MODULE_1__components_permisotaxis_reporte_permisotaxis_reporte_service__["a" /* PermisotaxisReporteService */]
        ]
    })
], ReportesModule);

//# sourceMappingURL=reportes.module.js.map

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

/***/ 1614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_printer_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_common_service__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap_modal__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chofer_service__ = __webpack_require__(1615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChofersBitacoraComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ChofersBitacoraComponent = (function () {
    function ChofersBitacoraComponent(service, toastrService, dialogService, commonService, printerService, route, router) {
        this.service = service;
        this.toastrService = toastrService;
        this.dialogService = dialogService;
        this.commonService = commonService;
        this.printerService = printerService;
        this.route = route;
        this.router = router;
        this.filterQuery = '';
        this.rowsOnPage = 10;
        this.sortBy = 'idchofer';
        this.sortOrder = 'asc';
    }
    ChofersBitacoraComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['idchofer'] !== undefined) {
                var idchofer = +params['idchofer'];
                _this.idchofer = idchofer;
                _this.findByIdChofer(idchofer);
                _this.backpage = true;
            }
        });
    };
    ChofersBitacoraComponent.prototype.backPage = function () {
        window.history.back();
    };
    ChofersBitacoraComponent.prototype.findByIdChofer = function (id) {
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
    ChofersBitacoraComponent.prototype.filtrarFechas = function (fechaDesde, fechaHasta) {
        var _this = this;
        this.service
            .allFromTo(fechaDesde, fechaHasta, this.idchofer)
            .subscribe(function (data) {
            if (data.success) {
                var result = __WEBPACK_IMPORTED_MODULE_7_lodash__["chain"](data.result)
                    .sortBy('l.fecha')
                    .value();
                _this.data = result;
            }
            else {
                _this.toastrService.error(data.message);
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Items complete'); });
    };
    ChofersBitacoraComponent.prototype.descargarCSV = function (json, reportTitle, showLabel) {
        this.commonService.JSONToCSVConvertor(json, reportTitle, showLabel);
    };
    ChofersBitacoraComponent.prototype.printReporte = function (chofers) {
        this.printerService.printBitacoraChofer(chofers, +this.idchofer);
    };
    return ChofersBitacoraComponent;
}());
ChofersBitacoraComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
        selector: 'chofer-bitacora',
        template: __webpack_require__(1879),
        styles: [__webpack_require__(1773)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__chofer_service__["a" /* ChofersBitacoraService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__chofer_service__["a" /* ChofersBitacoraService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap_modal__["DialogService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap_modal__["DialogService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__shared_common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_common_service__["a" /* CommonService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__shared_printer_service__["a" /* PrinterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_printer_service__["a" /* PrinterService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _g || Object])
], ChofersBitacoraComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=chofer-bitacora.component.js.map

/***/ }),

/***/ 1615:
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChofersBitacoraService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChofersBitacoraService = (function () {
    function ChofersBitacoraService(_http, _configuration, authService) {
        var _this = this;
        this._http = _http;
        this._configuration = _configuration;
        this.authService = authService;
        this.allFromTo = function (fechaDesde, fechaHasta, id) {
            return _this._http.get(_this.endPoint + "/bitacora-pagos/" + id + "/from-to/" + fechaDesde + "/" + fechaHasta, _this.options)
                .map(function (response) { return response.json(); })
                .catch(_this.handleError);
        };
        this.findByIdChofer = function (id) {
            return _this._http.get(_this.endPoint + "/bitacora-pagos/" + id, _this.options)
                .map(function (response) { return response.json(); })
                .catch(_this.handleError);
        };
        this.headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        this.headers.append('Content-Type', 'application/json; charset=UTF-8');
        this.headers.append('Authorization', 'JWT ' + this.authService.token);
        this.options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]({ headers: this.headers });
        this.endPoint = this._configuration.ServerWithApiUrl + "chofer";
    }
    ChofersBitacoraService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
    };
    return ChofersBitacoraService;
}());
ChofersBitacoraService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__app_constants__["a" /* Configuration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_constants__["a" /* Configuration */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__shared_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], ChofersBitacoraService);

var _a, _b, _c;
//# sourceMappingURL=chofer.service.js.map

/***/ }),

/***/ 1616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_common_service__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_printer_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap_modal__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__permisotaxis_service__ = __webpack_require__(1617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermisotaxisBitacoraComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PermisotaxisBitacoraComponent = (function () {
    function PermisotaxisBitacoraComponent(service, toastrService, dialogService, printerService, commonService, route, router) {
        this.service = service;
        this.toastrService = toastrService;
        this.dialogService = dialogService;
        this.printerService = printerService;
        this.commonService = commonService;
        this.route = route;
        this.router = router;
        this.filterQuery = '';
        this.rowsOnPage = 10;
        this.sortBy = 'idpermisotaxi';
        this.sortOrder = 'asc';
    }
    PermisotaxisBitacoraComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['idpermisotaxi'] !== undefined) {
                var idpermisotaxi = +params['idpermisotaxi'];
                _this.findByIdPermisoTaxi(idpermisotaxi);
                _this.idpermisotaxi = idpermisotaxi;
                _this.backpage = true;
            }
        });
    };
    PermisotaxisBitacoraComponent.prototype.backPage = function () {
        window.history.back();
    };
    PermisotaxisBitacoraComponent.prototype.findByIdPermisoTaxi = function (id) {
        var _this = this;
        this.service
            .findByIdPermisoTaxi(id)
            .subscribe(function (data) {
            if (data.success) {
                if (data.result[0]) {
                    // OBTIENE NÚMERO DE PERMISO DE PRIMER REGISTRO ENCONTRADO
                    if (data.result[0].numero) {
                        _this.numero = data.result[0].numero;
                    }
                    _this.data = data.result;
                }
            }
            else {
                _this.toastrService.error(data.message);
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Items complete'); });
    };
    PermisotaxisBitacoraComponent.prototype.filtrarFechas = function (fechaDesde, fechaHasta) {
        var _this = this;
        this.service
            .allFromTo(fechaDesde, fechaHasta, this.idpermisotaxi)
            .subscribe(function (data) {
            if (data.success) {
                var result = __WEBPACK_IMPORTED_MODULE_7_lodash__["chain"](data.result)
                    .sortBy('liquidaciones.fecha')
                    .value();
                _this.data = result;
            }
            else {
                _this.toastrService.error(data.message);
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Items complete'); });
    };
    PermisotaxisBitacoraComponent.prototype.descargarCSV = function (json, reportTitle, showLabel) {
        this.commonService.JSONToCSVConvertor(json, reportTitle, showLabel);
    };
    PermisotaxisBitacoraComponent.prototype.printReporte = function (permisos) {
        this.printerService.printBitacoraPermiso(permisos, this.numero);
    };
    return PermisotaxisBitacoraComponent;
}());
PermisotaxisBitacoraComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
        selector: 'permisotaxis-bitacora',
        template: __webpack_require__(1880),
        styles: [__webpack_require__(1774)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__permisotaxis_service__["a" /* PermisotaxisBitacoraService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__permisotaxis_service__["a" /* PermisotaxisBitacoraService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap_modal__["DialogService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap_modal__["DialogService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__shared_printer_service__["a" /* PrinterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_printer_service__["a" /* PrinterService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__shared_common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_common_service__["a" /* CommonService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _g || Object])
], PermisotaxisBitacoraComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=permisotaxis-bitacora.component.js.map

/***/ }),

/***/ 1617:
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermisotaxisBitacoraService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PermisotaxisBitacoraService = (function () {
    function PermisotaxisBitacoraService(_http, _configuration, authService) {
        var _this = this;
        this._http = _http;
        this._configuration = _configuration;
        this.authService = authService;
        this.allFromTo = function (fechaDesde, fechaHasta, id) {
            return _this._http.get(_this.endPoint + "/bitacora-pagos/" + id + "/from-to/" + fechaDesde + "/" + fechaHasta, _this.options)
                .map(function (response) { return response.json(); })
                .catch(_this.handleError);
        };
        this.reporteEgresosEgresos = function (id) {
            return _this._http.get(_this.endPoint + "/reporte-ingresos-egresos-" + id, _this.options)
                .map(function (response) { return response.json(); })
                .catch(_this.handleError);
        };
        this.findByIdPermisoTaxi = function (id) {
            return _this._http.get(_this.endPoint + "/bitacora-pagos/" + id, _this.options)
                .map(function (response) { return response.json(); })
                .catch(_this.handleError);
        };
        this.headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        this.headers.append('Content-Type', 'application/json; charset=UTF-8');
        this.headers.append('Authorization', 'JWT ' + this.authService.token);
        this.options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]({ headers: this.headers });
        this.endPoint = this._configuration.ServerWithApiUrl + "permisotaxi";
    }
    PermisotaxisBitacoraService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
    };
    return PermisotaxisBitacoraService;
}());
PermisotaxisBitacoraService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__app_constants__["a" /* Configuration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_constants__["a" /* Configuration */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__shared_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], PermisotaxisBitacoraService);

var _a, _b, _c;
//# sourceMappingURL=permisotaxis.service.js.map

/***/ }),

/***/ 1618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_printer_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_common_service__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap_modal__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__permisotaxis_reporte_service__ = __webpack_require__(1619);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermisotaxisReporteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PermisotaxisReporteComponent = (function () {
    function PermisotaxisReporteComponent(service, toastrService, dialogService, commonService, printerService, route, router) {
        this.service = service;
        this.toastrService = toastrService;
        this.dialogService = dialogService;
        this.commonService = commonService;
        this.printerService = printerService;
        this.route = route;
        this.router = router;
        this.filterQuery = '';
        this.rowsOnPage = 10;
        this.sortBy = 'idpermisotaxi';
        this.sortOrder = 'asc';
    }
    PermisotaxisReporteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['idpermisotaxi'] !== undefined) {
                var idpermisotaxi = +params['idpermisotaxi'];
                _this.findByIdPermisoTaxi(idpermisotaxi);
                _this.idpermisotaxi = idpermisotaxi;
                _this.backpage = true;
            }
        });
    };
    PermisotaxisReporteComponent.prototype.backPage = function () {
        window.history.back();
    };
    PermisotaxisReporteComponent.prototype.findByIdPermisoTaxi = function (id) {
        var _this = this;
        this.service
            .findByIdPermisoTaxi(id)
            .subscribe(function (data) {
            if (data.success) {
                _this.data = data.result;
                _this.permiso = data.result.vehiculo[0].numero;
                _this.liquidaciones = data.result.liquidaciones;
                _this.ordenes = data.result.ordenes;
                _this.total_ingreso = data.result.total_ingreso;
                _this.total_egreso = data.result.total_egreso;
                _this.vehiculo = data.result.vehiculo;
            }
            else {
                _this.toastrService.error(data.message);
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Items complete'); });
    };
    PermisotaxisReporteComponent.prototype.filtrarFechas = function (fechaDesde, fechaHasta) {
        var _this = this;
        this.service
            .allFromTo(fechaDesde, fechaHasta, this.idpermisotaxi)
            .subscribe(function (data) {
            if (data.success) {
                var result = data.result;
                _this.data = data.result;
                _this.permiso = data.result.vehiculo[0].numero;
                _this.liquidaciones = data.result.liquidaciones;
                _this.ordenes = data.result.ordenes;
                _this.total_ingreso = data.result.total_ingreso;
                _this.total_egreso = data.result.total_egreso;
                _this.vehiculo = data.result.vehiculo;
            }
            else {
                _this.toastrService.error(data.message);
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Items complete'); });
    };
    PermisotaxisReporteComponent.prototype.descargarCSV = function (json, reportTitle, showLabel) {
        this.commonService.JSONToCSVConvertor(json, reportTitle, showLabel);
    };
    PermisotaxisReporteComponent.prototype.printReporte = function (permiso) {
        console.log('permiso', permiso);
        this.printerService.printReportePermiso(permiso);
    };
    return PermisotaxisReporteComponent;
}());
PermisotaxisReporteComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
        selector: 'permisotaxis-reporte',
        template: __webpack_require__(1881),
        styles: [__webpack_require__(1775)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__permisotaxis_reporte_service__["a" /* PermisotaxisReporteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__permisotaxis_reporte_service__["a" /* PermisotaxisReporteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap_modal__["DialogService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap_modal__["DialogService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__shared_common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_common_service__["a" /* CommonService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__shared_printer_service__["a" /* PrinterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_printer_service__["a" /* PrinterService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _g || Object])
], PermisotaxisReporteComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=permisotaxis-reporte.component.js.map

/***/ }),

/***/ 1619:
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermisotaxisReporteService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PermisotaxisReporteService = (function () {
    function PermisotaxisReporteService(_http, _configuration, authService) {
        var _this = this;
        this._http = _http;
        this._configuration = _configuration;
        this.authService = authService;
        this.allFromTo = function (fechaDesde, fechaHasta, id) {
            return _this._http.get(_this.endPoint + "/reporte-ingresos-egresos/" + id + "/from-to/" + fechaDesde + "/" + fechaHasta, _this.options)
                .map(function (response) { return response.json(); })
                .catch(_this.handleError);
        };
        this.findByIdPermisoTaxi = function (id) {
            return _this._http.get(_this.endPoint + "/reporte-ingresos-egresos/" + id, _this.options)
                .map(function (response) { return response.json(); })
                .catch(_this.handleError);
        };
        this.headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        this.headers.append('Content-Type', 'application/json; charset=UTF-8');
        this.headers.append('Authorization', 'JWT ' + this.authService.token);
        this.options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]({ headers: this.headers });
        this.endPoint = this._configuration.ServerWithApiUrl + "permisotaxi";
    }
    PermisotaxisReporteService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
    };
    return PermisotaxisReporteService;
}());
PermisotaxisReporteService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__app_constants__["a" /* Configuration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_constants__["a" /* Configuration */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__shared_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], PermisotaxisReporteService);

var _a, _b, _c;
//# sourceMappingURL=permisotaxis-reporte.service.js.map

/***/ }),

/***/ 1620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_bootstrap_modal__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reportes_service__ = __webpack_require__(1621);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportesTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReportesTableComponent = (function () {
    function ReportesTableComponent(service, toastrService, dialogService) {
        this.service = service;
        this.toastrService = toastrService;
        this.dialogService = dialogService;
        this.filterQuery = '';
        this.rowsOnPage = 10;
        this.sortBy = 'idreporte';
        this.sortOrder = 'asc';
    }
    ReportesTableComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    ReportesTableComponent.prototype.onDeleteConfirm = function (event, item) {
        var _this = this;
        if (window.confirm('¿Estas seguro de querer eliminar este registro?')) {
            this.service.remove(item.idreporte)
                .subscribe(function (data) { return _this.showToast(data); }, function (error) { return console.log(error); }, function () { return console.log('Delete completed'); });
        }
        else {
            console.log('item cancelado');
        }
    };
    ReportesTableComponent.prototype.showToast = function (result) {
        if (result.success) {
            this.toastrService.success(result.message);
            this.getAll();
        }
        else {
            this.toastrService.error(result.message);
        }
    };
    ReportesTableComponent.prototype.getAll = function () {
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
    return ReportesTableComponent;
}());
ReportesTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'reportes-table',
        template: __webpack_require__(1882),
        styles: [__webpack_require__(1776)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__reportes_service__["a" /* ReportesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__reportes_service__["a" /* ReportesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__["b" /* ToastrService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0_ng2_bootstrap_modal__["DialogService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ng2_bootstrap_modal__["DialogService"]) === "function" && _c || Object])
], ReportesTableComponent);

var _a, _b, _c;
//# sourceMappingURL=reportes-table.component.js.map

/***/ }),

/***/ 1621:
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ReportesService = (function () {
    function ReportesService(_http, _configuration, authService) {
        var _this = this;
        this._http = _http;
        this._configuration = _configuration;
        this.authService = authService;
        this.all = function () {
            return _this._http.get(_this.endPoint, _this.options)
                .map(function (response) { return response.json(); })
                .catch(_this.handleError);
        };
        this.findById = function (id) {
            return _this._http.get(_this.endPoint + "/" + id, _this.options)
                .map(function (response) { return response.json(); })
                .catch(_this.handleError);
        };
        this.update = function (reporte) {
            return _this._http.patch(_this.endPoint, reporte, _this.options)
                .map(function (response) { return response.json(); })
                .catch(_this.handleError);
        };
        this.remove = function (id) {
            return _this._http.delete(_this.endPoint + "/" + id, _this.options)
                .map(function (response) { return response.json(); })
                .catch(_this.handleError);
        };
        this.exist = function (id) {
            return _this._http.get(_this.endPoint + "/" + id, _this.options)
                .map(function (response) { return response.json(); })
                .catch(_this.handleError);
        };
        this.count = function () {
            return _this._http.get("" + _this.endPoint, _this.options)
                .map(function (response) { return response.json(); })
                .catch(_this.handleError);
        };
        this.insert = function (reporte) {
            return _this._http.post(_this.endPoint, reporte, _this.options)
                .map(function (response) { return response.json(); })
                .catch(_this.handleError);
        };
        this.headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        this.headers.append('Content-Type', 'application/json; charset=UTF-8');
        this.headers.append('Authorization', 'JWT ' + this.authService.token);
        this.options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]({ headers: this.headers });
        this.endPoint = this._configuration.ServerWithApiUrl + "liquidacion/reporte";
    }
    ReportesService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
    };
    return ReportesService;
}());
ReportesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__app_constants__["a" /* Configuration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_constants__["a" /* Configuration */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__shared_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], ReportesService);

var _a, _b, _c;
//# sourceMappingURL=reportes.service.js.map

/***/ }),

/***/ 1622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_printer_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_common_service__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap_modal__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__taller_service__ = __webpack_require__(1623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TallersBitacoraComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TallersBitacoraComponent = (function () {
    function TallersBitacoraComponent(service, toastrService, dialogService, route, commonService, printerService, router) {
        this.service = service;
        this.toastrService = toastrService;
        this.dialogService = dialogService;
        this.route = route;
        this.commonService = commonService;
        this.printerService = printerService;
        this.router = router;
        this.orden = [];
        this.refaccion = [];
        this.egresoconcepto = [];
    }
    TallersBitacoraComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['idtaller'] !== undefined) {
                var idtaller = +params['idtaller'];
                _this.findByIdTaller(idtaller);
                _this.idtaller = idtaller;
                _this.backpage = true;
            }
        });
    };
    TallersBitacoraComponent.prototype.backPage = function () {
        window.history.back();
    };
    TallersBitacoraComponent.prototype.findByIdTaller = function (id) {
        var _this = this;
        this.service
            .findByIdTaller(id)
            .subscribe(function (data) {
            if (data.success) {
                _this.data = data.result;
                _this.orden = data.result.orden;
                _this.refaccion = data.result.refaccion;
                _this.egresoconcepto = data.result.egresoconcepto;
                _this.taller = data.result.taller;
                _this.total_orden_ingreso = data.result.total_orden_ingreso;
                _this.total_egresoconcepto_egreso = data.result.total_egresoconcepto_egreso;
                _this.total_refaccion_egreso = data.result.total_refaccion_egreso;
                _this.total_ingreso = data.result.total_ingreso;
                _this.total_egreso = data.result.total_egreso;
                _this.ganancia = data.result.ganancia;
            }
            else {
                _this.toastrService.error(data.message);
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Items complete'); });
    };
    TallersBitacoraComponent.prototype.filtrarFechas = function (fechaDesde, fechaHasta) {
        var _this = this;
        this.service
            .allFromTo(fechaDesde, fechaHasta, this.idtaller)
            .subscribe(function (data) {
            if (data.success) {
                var result = __WEBPACK_IMPORTED_MODULE_7_lodash__["chain"](data.result)
                    .sortBy('orden.fecha')
                    .value();
                _this.data = data.result;
                _this.orden = data.result.orden;
                _this.refaccion = data.result.refaccion;
                _this.egresoconcepto = data.result.egresoconcepto;
                _this.taller = data.result.taller;
                _this.total_orden_ingreso = data.result.total_orden_ingreso;
                _this.total_egresoconcepto_egreso = data.result.total_egresoconcepto_egreso;
                _this.total_refaccion_egreso = data.result.total_refaccion_egreso;
                _this.total_ingreso = data.result.total_ingreso;
                _this.total_egreso = data.result.total_egreso;
                _this.ganancia = data.result.ganancia;
            }
            else {
                _this.toastrService.error(data.message);
            }
        }, function (error) { return console.log(error); }, function () { return console.log('Get all Items complete'); });
    };
    TallersBitacoraComponent.prototype.descargarCSV = function (json, reportTitle, showLabel) {
        this.commonService.JSONToCSVConvertor(json, reportTitle, showLabel);
    };
    TallersBitacoraComponent.prototype.printReporte = function (taller) {
        this.printerService.printBitacoraTaller(taller);
    };
    return TallersBitacoraComponent;
}());
TallersBitacoraComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
        selector: 'taller-bitacora',
        template: __webpack_require__(1883),
        styles: [__webpack_require__(1777)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__taller_service__["a" /* TallersBitacoraService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__taller_service__["a" /* TallersBitacoraService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap_modal__["DialogService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap_modal__["DialogService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__shared_common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_common_service__["a" /* CommonService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__shared_printer_service__["a" /* PrinterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_printer_service__["a" /* PrinterService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _g || Object])
], TallersBitacoraComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=taller-bitacora.component.js.map

/***/ }),

/***/ 1623:
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TallersBitacoraService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TallersBitacoraService = (function () {
    function TallersBitacoraService(_http, _configuration, authService) {
        var _this = this;
        this._http = _http;
        this._configuration = _configuration;
        this.authService = authService;
        this.allFromTo = function (fechaDesde, fechaHasta, id) {
            return _this._http.get(_this.endPoint + "/bitacora-ingresos-egresos/" + id + "/from-to/" + fechaDesde + "/" + fechaHasta, _this.options)
                .map(function (response) { return response.json(); })
                .catch(_this.handleError);
        };
        this.findByIdTaller = function (id) {
            return _this._http.get(_this.endPoint + "/bitacora-ingresos-egresos/" + id, _this.options)
                .map(function (response) { return response.json(); })
                .catch(_this.handleError);
        };
        this.headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        this.headers.append('Content-Type', 'application/json; charset=UTF-8');
        this.headers.append('Authorization', 'JWT ' + this.authService.token);
        this.options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]({ headers: this.headers });
        this.endPoint = this._configuration.ServerWithApiUrl + "taller";
    }
    TallersBitacoraService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
    };
    return TallersBitacoraService;
}());
TallersBitacoraService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__app_constants__["a" /* Configuration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_constants__["a" /* Configuration */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__shared_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], TallersBitacoraService);

var _a, _b, _c;
//# sourceMappingURL=taller.service.js.map

/***/ }),

/***/ 1624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReportesComponent = (function () {
    function ReportesComponent() {
    }
    ReportesComponent.prototype.ngOnInit = function () {
    };
    return ReportesComponent;
}());
ReportesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'reportes',
        template: __webpack_require__(1884)
    }),
    __metadata("design:paramtypes", [])
], ReportesComponent);

//# sourceMappingURL=reportes.component.js.map

/***/ }),

/***/ 1708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_permisotaxis_reporte_permisotaxis_reporte_component__ = __webpack_require__(1618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_taller_bitacora_taller_bitacora_component__ = __webpack_require__(1622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_chofer_bitacora_chofer_bitacora_component__ = __webpack_require__(1614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_permisotaxis_bitacora_permisotaxis_bitacora_component__ = __webpack_require__(1616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reportes_component__ = __webpack_require__(1624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_reportes_table_reportes_table_component__ = __webpack_require__(1620);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });







// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_5__reportes_component__["a" /* ReportesComponent */],
        children: [
            { path: 'reportes-table', component: __WEBPACK_IMPORTED_MODULE_6__components_reportes_table_reportes_table_component__["a" /* ReportesTableComponent */] },
            { path: 'bitacora-pagos-permiso/:idpermisotaxi', component: __WEBPACK_IMPORTED_MODULE_3__components_permisotaxis_bitacora_permisotaxis_bitacora_component__["a" /* PermisotaxisBitacoraComponent */] },
            { path: 'bitacora-pagos-chofer/:idchofer', component: __WEBPACK_IMPORTED_MODULE_2__components_chofer_bitacora_chofer_bitacora_component__["a" /* ChofersBitacoraComponent */] },
            { path: 'bitacora-ingresos-egresos-taller/:idtaller', component: __WEBPACK_IMPORTED_MODULE_1__components_taller_bitacora_taller_bitacora_component__["a" /* TallersBitacoraComponent */] },
            { path: 'reporte-ingresos-egresos-permiso/:idpermisotaxi', component: __WEBPACK_IMPORTED_MODULE_0__components_permisotaxis_reporte_permisotaxis_reporte_component__["a" /* PermisotaxisReporteComponent */] },
        ]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forChild(routes);
//# sourceMappingURL=reportes.routing.js.map

/***/ }),

/***/ 1773:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ":host /deep/ .widgets .data-table-container {\n  width: 100%; }\n  :host /deep/ .widgets .data-table-container .panel-heading {\n    margin-top: 25px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1774:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ":host /deep/ .widgets .data-table-container {\n  width: 100%; }\n  :host /deep/ .widgets .data-table-container .panel-heading {\n    margin-top: 25px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1775:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ":host /deep/ .widgets .data-table-container {\n  width: 100%; }\n  :host /deep/ .widgets .data-table-container .panel-heading {\n    margin-top: 25px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1776:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ":host /deep/ .widgets .data-table-container {\n  width: 100%; }\n  :host /deep/ .widgets .data-table-container .panel-heading {\n    margin-top: 25px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1777:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ":host /deep/ .widgets .data-table-container {\n  width: 100%; }\n  :host /deep/ .widgets .data-table-container .panel-heading {\n    margin-top: 25px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1879:
/***/ (function(module, exports) {

module.exports = "<div class='widgets'>\r\n    <div class='row'>\r\n        <ba-card title='Listado' baCardClass='with-scroll' class='data-table-container'>\r\n            <div class='panel panel-default'>\r\n                <div class=\"panel-heading\" *ngIf=\"backpage\"><h2>Chofer Bitácora de Pagos</h2></div>\r\n                <table class='table table-striped' [mfData]='data' #mf='mfDataTable' [mfRowsOnPage]='rowsOnPage' [(mfSortBy)]='sortBy' [(mfSortOrder)]='sortOrder'>\r\n                    <thead>\r\n                        <tr>\r\n                            <td colspan='1'>\r\n                                Desde Fecha Liquidada:\r\n                                <input class='form-control' #fechaDesde type=\"date\"/>\r\n                            </td>\r\n                            <td colspan='1'>\r\n                                Hasta Fecha Liquidada:\r\n                                <input class='form-control' #fechaHasta type=\"date\"/>\r\n                            </td>\r\n                            <td colspan='3'>\r\n                                <br>\r\n                                <button class='btn btn-sm btn-info' (click)='filtrarFechas(fechaDesde.value, fechaHasta.value)' >Filtrar por Fechas</button>\r\n                            </td>\r\n                        </tr>\r\n                    </thead>\r\n                    <thead>\r\n                        <tr>\r\n                            <th style='width: 15%'>\r\n                                <mfDefaultSorter by='fecha'>Fecha Liquidada</mfDefaultSorter>\r\n                            </th>\r\n                            <th style='width: 15%'>\r\n                                <mfDefaultSorter by='montopagado'>Pago</mfDefaultSorter>\r\n                            </th>\r\n                            <th style='width: 15%'>\r\n                                <mfDefaultSorter by='folio'>Folio</mfDefaultSorter>\r\n                            </th>\r\n                            <th style='width: 15%'>\r\n                                <mfDefaultSorter by='pago_fecha'>Fecha de Pago</mfDefaultSorter>\r\n                            </th>\r\n                            <th style='width: 15%'>\r\n                                <mfDefaultSorter by='numero'>Permiso</mfDefaultSorter>\r\n                            </th>\r\n                            <th style='width: 15%'>\r\n                                <mfDefaultSorter by='chofer'>Chofer</mfDefaultSorter>\r\n                            </th>\r\n                            <th style='width: 15%'>\r\n                                <mfDefaultSorter by='nota'>Observaciones</mfDefaultSorter>\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor='let item of mf.data;  let i = index'>\r\n                            <td>{{ item.fecha | date:'dd/MM/y' }}</td>\r\n                            <td>{{ item.montopagado | currency: 'MXN' }}</td>\r\n                            <td>{{ item.folio }}</td>\r\n                            <td>{{ item.pago_fecha | date:'dd/MM/y' }}</td>\r\n                            <td>{{ item.numero }}</td>\r\n                            <td>{{ item.chofer }}</td>\r\n                            <td>{{ item.nota }}</td>\r\n                        </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                        <tr>\r\n                            <td colspan='5'>\r\n                                <mfBootstrapPaginator [rowsOnPageSet]='[5,10,15,25,50,100]'></mfBootstrapPaginator>\r\n                            </td>\r\n                        </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n        </ba-card>\r\n    </div>\r\n    <div class='row'>\r\n        <div class='col-sm-2' *ngIf=\"backpage\">\r\n            <button (click)='backPage()' class='btn btn-primary'><i class='fa fa-arrow-left'></i> Regresar</button>\r\n        </div>\r\n        <div class='col-sm-2'>\r\n            <button (click)='descargarCSV(data, \"Bitácora de Chofer\", true)' class='btn btn-success'><i class='fa fa-excel'></i> Descargar como CSV</button>\r\n        </div>\r\n        <div class='col-sm-2'>\r\n            <button title='Imprimir Reporte' (click)='printReporte(data)' class='btn btn-info'><i class='fa fa-print'></i> Imprimir Reporte</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 1880:
/***/ (function(module, exports) {

module.exports = "<div class='widgets'>\r\n    <div class='row'>\r\n        <ba-card title='Listado' baCardClass='with-scroll' class='data-table-container'>\r\n            <div class='panel panel-default'>\r\n                <div class=\"panel-heading\" *ngIf=\"backpage\"><h2>Bitácora de Pagos a Permiso {{ numero }}</h2></div>\r\n                <table class='table table-striped' [mfData]='data' #mf='mfDataTable' [mfRowsOnPage]='rowsOnPage' [(mfSortBy)]='sortBy' [(mfSortOrder)]='sortOrder'>\r\n                     <thead>\r\n                        <tr>\r\n                            <td colspan='1'>\r\n                                Desde Fecha Liquidada:\r\n                                <input class='form-control' #fechaDesde type=\"date\"/>\r\n                            </td>\r\n                            <td colspan='1'>\r\n                                Hasta Fecha Liquidada:\r\n                                <input class='form-control' #fechaHasta type=\"date\"/>\r\n                            </td>\r\n                            <td colspan='3'>\r\n                                <br>\r\n                                <button class='btn btn-sm btn-info' (click)='filtrarFechas(fechaDesde.value, fechaHasta.value)' >Filtrar por Fechas</button>\r\n                            </td>\r\n                        </tr>\r\n                    </thead>\r\n                    <thead>\r\n                        <tr>\r\n                            <th style='width: 15%'>\r\n                                <mfDefaultSorter by='fecha'>Fecha Liquidada</mfDefaultSorter>\r\n                            </th>\r\n                            <th style='width: 15%'>\r\n                                <mfDefaultSorter by='montopagado'>Pago</mfDefaultSorter>\r\n                            </th>\r\n                            <th style='width: 15%'>\r\n                                <mfDefaultSorter by='folio'>Folio</mfDefaultSorter>\r\n                            </th>\r\n                            <th style='width: 15%'>\r\n                                <mfDefaultSorter by='pago_fecha'>Fecha de Pago</mfDefaultSorter>\r\n                            </th>\r\n                            <th style='width: 15%'>\r\n                                <mfDefaultSorter by='chofer'>Chofer</mfDefaultSorter>\r\n                            </th>\r\n                            <th style='width: 15%'>\r\n                                <mfDefaultSorter by='numero'>Permiso</mfDefaultSorter>\r\n                            </th>\r\n                            <th style='width: 15%'>\r\n                                <mfDefaultSorter by='nota'>Observaciones</mfDefaultSorter>\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor='let item of mf.data;  let i = index'>\r\n                            <td>{{ item.fecha | date:'dd/MM/y' }}</td>\r\n                            <td>{{ item.montopagado | currency: 'MXN' }}</td>\r\n                            <td>{{ item.folio }}</td>\r\n                            <td>{{ item.pago_fecha | date:'dd/MM/y' }}</td>\r\n                            <td>{{ item.chofer }}</td>\r\n                            <td>{{ item.numero }}</td>\r\n                            <td>{{ item.nota }}</td>\r\n                        </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                        <tr>\r\n                            <td colspan='5'>\r\n                                <mfBootstrapPaginator [rowsOnPageSet]='[5,10,15,25,50,100]'></mfBootstrapPaginator>\r\n                            </td>\r\n                        </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n        </ba-card>\r\n    </div>\r\n    <div class='row'>\r\n        <div class='col-sm-2' *ngIf=\"backpage\">\r\n            <button (click)='backPage()' class='btn btn-primary'><i class='fa fa-arrow-left'></i> Regresar</button>\r\n        </div>\r\n        <div class='col-sm-2'>\r\n            <button (click)='descargarCSV(data, \"Bitácora de Permiso\", true)' class='btn btn-success'><i class='fa fa-excel'></i> Descargar como CSV</button>\r\n        </div>\r\n        <div class='col-sm-2'>\r\n            <button title='Imprimir Reporte' (click)='printReporte(data)' class='btn btn-info'><i class='fa fa-print'></i> Imprimir Reporte</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 1881:
/***/ (function(module, exports) {

module.exports = "<div class='widgets'>\r\n    <div class='row'>\r\n        <ba-card title='Listado' baCardClass='with-scroll' class='data-table-container'>\r\n            <div class='panel panel-default'>\r\n                <div class=\"panel-heading\" *ngIf=\"backpage\"><h2>Reporte de Egresos para Permiso <strong> {{ permiso }} </strong></h2></div>\r\n\r\n                <div class=\"panel-heading\"><h4>Datos del Permiso</h4></div>\r\n                <table class='table table-striped'>\r\n\r\n                     <thead>\r\n                        <tr>\r\n                            <td colspan='1'>\r\n                                Desde Fecha:\r\n                                <input class='form-control' #fechaDesde type=\"date\"/>\r\n                            </td>\r\n                            <td colspan='1'>\r\n                                Hasta Fecha:\r\n                                <input class='form-control' #fechaHasta type=\"date\"/>\r\n                            </td>\r\n                            <td colspan='3'>\r\n                                <br>\r\n                                <button class='btn btn-sm btn-info' (click)='filtrarFechas(fechaDesde.value, fechaHasta.value)' >Filtrar por Fechas</button>\r\n                            </td>\r\n                        </tr>\r\n                    </thead>\r\n\r\n                    <thead>\r\n                        <tr>\r\n                            <th style='width: 14%'>\r\n                                <span title='numero'>Número</span>\r\n                            </th>\r\n                            <th style='width: 14%'>\r\n                                <span title='modelo'>Modelo</span>\r\n                            </th>\r\n                            <th style='width: 14%'>\r\n                                <span title='motor'>Motor</span>\r\n                            </th>\r\n                            <th style='width: 14%'>\r\n                                <span title='mutualidad'>Mutualidad</span>\r\n                            </th>\r\n                            <th style='width: 14%'>\r\n                                <span title='poliza'>Póliza</span>\r\n                            </th>\r\n                            <th style='width: 14%'>\r\n                                <span title='serie'>Serie</span>\r\n                            </th>\r\n                            <th style='width: 14%'>\r\n                                <span title='propietario'>Propietario</span>\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor='let item of vehiculo;  let i = index'>\r\n                            <td>{{ item.numero }}</td>\r\n                            <td>{{ item.modelo }}</td>\r\n                            <td>{{ item.motor }}</td>\r\n                            <td>{{ item.mutualidad }}</td>\r\n                            <td>{{ item.poliza }}</td>\r\n                            <td>{{ item.serie }}</td>\r\n                            <td>{{ item.propietario }}</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n\r\n                <!--<div class=\"panel-heading\"><h4>Ingreso por Liquidaciones</h4></div>\r\n                <table class='table table-striped'>\r\n                    <thead>\r\n                        <tr>\r\n                            <th style='width: 25%'>\r\n                                <span title='fecha'>Fecha</span>\r\n                            </th>\r\n                            <th style='width: 25%'>\r\n                                <span title='bonificado'>Bonificado</span>\r\n                            </th>\r\n                            <th style='width: 25%'>\r\n                                <span title='montopagado'>Monto Pagado</span>\r\n                            </th>\r\n                            <th style='width: 25%'>\r\n                                <span title='estado_idestado'>Estado</span>\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor='let item of liquidaciones;  let i = index'>\r\n                            <td>{{ item.fecha | date: 'dd/MM/y' }}</td>\r\n                            <td>{{ item.bonificado | currency: 'MXN' }}</td>\r\n                            <td>{{ item.montopagado | currency: 'MXN' }}</td>\r\n                            <td>{{ item.estado_idestado}}</td>\r\n                        </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                        <tr>\r\n                            <td colspan=\"4\" class=\"text-right\"><strong>TOTAL INGRESO: {{ total_ingreso | currency:'MXN' }}</strong></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td colspan=\"4\" class=\"text-right\">\r\n                                <button (click)='descargarCSV(liquidaciones, \"Permiso Ingreso por Liquidaciones\", true)' class='btn btn-sm btn-success'><i class='fa fa-excel'></i> Descargar como CSV</button>\r\n                            </td>\r\n                        </tr>\r\n                    </tfoot>\r\n                </table>-->\r\n      \r\n                <div class=\"panel-heading\"><h4>Egreso por Órdenes en Taller</h4></div>\r\n                <table class='table table-striped'>\r\n                    <thead>\r\n                        <tr>\r\n                            <th style='width: 10%'>\r\n                                <span title='idorden'>Id Orden</span>\r\n                            </th>\r\n                            <th style='width: 10%'>\r\n                                <span title='fecha'>Fecha</span>\r\n                            </th>\r\n                            <th style='width: 10%'>\r\n                                <span title='estado_estado_idestado'>Estado</span>\r\n                            </th>\r\n                            <th style='width: 10%'>\r\n                                <span title='abonado'>Abonado</span>\r\n                            </th>\r\n                            <th style='width: 10%'>\r\n                                <span title='subtotal'>Subtotal</span>\r\n                            </th>\r\n                            <th style='width: 10%'>\r\n                                <span title='total'>Total</span>\r\n                            </th>\r\n                            <th style='width: 10%'>\r\n                                <span title='factura'>Factura</span>\r\n                            </th>\r\n                            <th style='width: 20%'>\r\n                                <span title='comentarios'>Comentarios</span>\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor='let item of ordenes;  let i = index'>\r\n                            <td>{{ item.idorden }}</td>\r\n                            <td>{{ item.fecha | date:'dd/MM/y' }}</td>\r\n                            <td>{{ item.estado_estado_idestado }}</td>\r\n                            <td><strong>{{ item.abonado | currency: 'MXN' }}</strong></td>\r\n                            <td>{{ item.subtotal | currency: 'MXN' }}</td>\r\n                            <td>{{ item.total | currency: 'MXN' }}</td>\r\n                            <td>{{ item.factura ? 'Si' : 'No' }}</td>\r\n                            <td>{{ item.comentarios }}</td>\r\n                        </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                        <tr>\r\n                            <td colspan=\"9\" class=\"text-right\"><strong>TOTAL EGRESO: {{ total_egreso | currency:'MXN' }}</strong></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td colspan=\"9\" class=\"text-right\">\r\n                                <button (click)='descargarCSV(ordenes, \"Permiso Egreso por Órdenes en Taller\", true)' class='btn btn-sm btn-success'><i class='fa fa-excel'></i> Descargar como CSV</button>\r\n                            </td>\r\n                        </tr>\r\n                    </tfoot>\r\n                </table>\r\n\r\n            </div>\r\n        </ba-card>\r\n    </div>\r\n    <div class='row'>\r\n        <div class='col-sm-2' *ngIf=\"backpage\">\r\n            <button (click)='backPage()' class='btn btn-primary'><i class='fa fa-arrow-left'></i> Regresar</button>\r\n        </div>\r\n        <div class='col-sm-2'>\r\n            <button title='Imprimir Reporte' (click)='printReporte(data)' class='btn btn-info'><i class='fa fa-print'></i> Imprimir Reporte</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 1882:
/***/ (function(module, exports) {

module.exports = "<div class='widgets'>\r\n    <div class='row'>\r\n        <ba-card title='Listado' baCardClass='with-scroll' class='data-table-container'>\r\n            <div class='panel panel-default'>\r\n                <table class='table table-striped' [mfData]='data | nombreDataFilter : filterQuery1' #mf='mfDataTable' [mfRowsOnPage]='rowsOnPage' [(mfSortBy)]='sortBy' [(mfSortOrder)]='sortOrder'>\r\n                    <thead>\r\n                        <tr>\r\n                            <th style='width: 33%'>\r\n                                <mfDefaultSorter by='persona_nombre'>Chofer</mfDefaultSorter>\r\n                            </th>\r\n                            <th style='width: 33%'>\r\n                                <mfDefaultSorter by='liquidacion_fecha'>Fecha de Liquidación</mfDefaultSorter>\r\n                            </th>\r\n                            <th style='width: 33%'>\r\n                                <mfDefaultSorter by='estado_estado_idestado'>Estado de Liquidación</mfDefaultSorter>\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor='let item of mf.data;  let i = index'>\r\n                            <td>{{ item.persona_nombre }}</td>\r\n                            <td>{{ item.liquidacion_fecha }}</td>\r\n                            <td>{{ item.estado_estado_idestado }}</td>\r\n                        </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                        <tr>\r\n                            <td colspan='5'>\r\n                                <mfBootstrapPaginator [rowsOnPageSet]='[5,10,15]'></mfBootstrapPaginator>\r\n                            </td>\r\n                        </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n        </ba-card>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 1883:
/***/ (function(module, exports) {

module.exports = "<div class='widgets'>\r\n    <div class='row'>\r\n        <ba-card title='Listado' baCardClass='with-scroll' class='data-table-container'>\r\n            <div class='panel panel-default'>\r\n                <div class=\"panel-heading\" *ngIf=\"backpage\"><h2>Bitácora de ingresos y egresos para taller <strong>{{ taller }}</strong></h2></div>\r\n                \r\n                <table class='table table-striped'>                     \r\n                    <thead>\r\n                        <tr>\r\n                            <td colspan='1'>\r\n                                Desde Fecha:\r\n                                <input class='form-control' #fechaDesde type=\"date\"/>\r\n                            </td>\r\n                            <td colspan='1'>\r\n                                Hasta Fecha:\r\n                                <input class='form-control' #fechaHasta type=\"date\"/>\r\n                            </td>\r\n                            <td colspan='1'>\r\n                                <br>\r\n                                <button class='btn btn-sm btn-info' (click)='filtrarFechas(fechaDesde.value, fechaHasta.value)' >Filtrar por Fechas</button>\r\n                            </td>\r\n                        </tr>\r\n                    </thead>\r\n                </table>\r\n                <div class=\"panel-heading\"><h4>Ingresos por Órdenes</h4></div>\r\n                <table class='table table-striped'>                     \r\n                    <thead>\r\n                        <tr>\r\n                            <th style='width: 33%'>\r\n                                <span title='idorden'>Id Orden</span>\r\n                            </th>\r\n                            <th style='width: 33%'>\r\n                                <span title='orden_fecha'>Orden Fecha</span>\r\n                            </th>\r\n                            <th style='width: 33%'>\r\n                                <span title='orden_total'>Orden Total</span>\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor='let item of orden;  let i = index'>\r\n                            <td>{{ item.idorden }}</td>\r\n                            <td>{{ item.orden_fecha | date:'dd/MM/y' }}</td>\r\n                            <td>{{ item.orden_total | currency: 'MXN' }}</td>\r\n                        </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                        <tr>\r\n                            <td colspan=\"3\" class=\"text-right\"><strong>TOTAL: {{ total_orden_ingreso | currency:'MXN' }}</strong></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td colspan=\"3\" class=\"text-right\">\r\n                                <button (click)='descargarCSV(orden, \"Taller Ingresos por Órdenes\", true)' class='btn btn-sm btn-success'><i class='fa fa-excel'></i> Descargar como CSV</button>\r\n                            </td>\r\n                        </tr>\r\n                    </tfoot>\r\n                </table>\r\n\r\n                <div class=\"panel-heading\"><h4>Egresos por Compra de Refacciones para Órdenes Pagadas</h4></div>\r\n                <table class='table table-striped'>\r\n                    <thead>\r\n                        <tr>\r\n                            <th style='width: 16%'>\r\n                                <span title='refaccion'>Refacción</span>\r\n                            </th>\r\n                            <th style='width: 16%'>\r\n                                <span title='refaccion'>Orden Folio</span>\r\n                            </th>\r\n                            <th style='width: 16%'>\r\n                                <span title='refaccion'>Fecha de Ingreso a Orden</span>\r\n                            </th>\r\n                            <th style='width: 16%'>\r\n                                <span title='refaccion_precioCompra'>Refacción Precio Compra</span>\r\n                            </th>\r\n                            <th style='width: 16%'>\r\n                                <span title='refaccion_cantidad'>Refacción Cantidad</span>\r\n                            </th>\r\n                            <th style='width: 16%'>\r\n                                <span title='refaccion_cantidad'>Gasto Total</span>\r\n                            </th>\r\n                            <th style='width: 16%'>\r\n                                <span title='refaccion_preveedor'>Refacción Proveedor</span>\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor='let item of refaccion;  let i = index'>\r\n                            <td>{{ item.refaccion }}</td>\r\n                            <td>{{ item.folio }}</td>\r\n                            <td>{{ item.refaccion_orden | date:'dd/MM/y' }}</td>\r\n                            <td>{{ item.refaccion_precioCompra | currency: 'MXN' }}</td>\r\n                            <td>{{ item.refaccion_cantidad }}</td>\r\n                            <td>{{ item.refaccion_cantidad * item.refaccion_precioCompra | currency: 'MXN' }}</td>\r\n                            <td>{{ item.refaccion_preveedor }}</td>\r\n                        </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                        <tr>\r\n                            <td colspan=\"7\" class=\"text-right\"><strong>TOTAL: {{ total_refaccion_egreso | currency:'MXN' }}</strong></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td colspan=\"7\" class=\"text-right\">\r\n                                <button (click)='descargarCSV(refaccion, \"Taller Egresos por Compra de Refacciones\", true)' class='btn btn-sm btn-success'><i class='fa fa-excel'></i> Descargar como CSV</button>\r\n                            </td>\r\n                        </tr>\r\n                    </tfoot>\r\n                </table>\r\n\r\n                <div class=\"panel-heading\"><h4>Egresos por Conceptos</h4></div>\r\n                <table class='table table-striped'>\r\n                    <thead>\r\n                        <tr>\r\n                            <th style='width: 24%'>\r\n                                <span title='egresoconcepto_fecha'>Egreso Concepto Fecha</span>\r\n                            </th>\r\n                            <th style='width: 22%'>\r\n                                <span title='egresoconcepto_total'>Egreso Concepto Total</span>\r\n                            </th>\r\n                            <th style='width: 30%'>\r\n                                <span title='egreso_nombre'>Concepto</span>\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor='let item of egresoconcepto;  let i = index'>\r\n                            <td>{{ item.egresoconcepto_fecha | date:'dd/MM/y' }}</td>\r\n                            <td>{{ item.egresoconcepto_total | currency:'MXN' }}</td>\r\n                            <td>{{ item.egreso_nombre }}</td>\r\n                        </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                        <tr>\r\n                            <td colspan=\"3\" class=\"text-right\"><strong>TOTAL: {{ total_egresoconcepto_egreso | currency:'MXN' }}</strong></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td colspan=\"3\" class=\"text-right\">\r\n                                <button (click)='descargarCSV(egresoconcepto, \"Taller Egresos por Conceptos\", true)' class='btn btn-sm btn-success'><i class='fa fa-excel'></i> Descargar como CSV</button>\r\n                            </td>\r\n                        </tr>\r\n                    </tfoot>\r\n                </table>\r\n                <div class=\"panel-heading\"><h4>Totales</h4></div>\r\n                <table class='table table-striped'>\r\n                    <thead>\r\n                        <tr>\r\n                            <th style='width: 24%'>\r\n                                <span title='egresoconcepto_fecha'>Total Ingreso</span>\r\n                            </th>\r\n                            <th style='width: 22%'>\r\n                                <span title='egresoconcepto_total'>Total Egreso</span>\r\n                            </th>\r\n                            <th style='width: 30%'>\r\n                                <span title='egreso_nombre'>Ganancia</span>\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td><strong>{{ total_ingreso | currency:'MXN' }}</strong></td>\r\n                            <td><strong>{{ total_egreso | currency:'MXN' }}</strong></td>\r\n                            <td><strong>{{ ganancia | currency:'MXN' }}</strong></td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </ba-card>\r\n    </div>\r\n    <div class='row'>\r\n        <div class='col-sm-2' *ngIf=\"backpage\">\r\n            <button (click)='backPage()' class='btn btn-primary'><i class='fa fa-arrow-left'></i> Regresar</button>\r\n        </div>\r\n        <div class='col-sm-2'>\r\n            <button title='Imprimir Reporte' (click)='printReporte(data)' class='btn btn-info'><i class='fa fa-print'></i> Imprimir Reporte</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 1884:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ })

});
//# sourceMappingURL=0.chunk.js.map