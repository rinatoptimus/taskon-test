"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var pipe_task_1 = require("./home/search-task/pipe-task");
var app_routes_1 = require("./app.routes");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var finance_component_1 = require("./finance/finance.component");
var company_component_1 = require("./company/company.component");
var statistics_component_1 = require("./statistics/statistics.component");
var page_not_found_component_1 = require("./page-not-found/page-not-found.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot(app_routes_1.routes)
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            finance_component_1.FinanceComponent,
            company_component_1.CompanyComponent,
            statistics_component_1.StatisticsComponent,
            page_not_found_component_1.PageNotFoundComponent,
            pipe_task_1.FilterPipe
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map