"use strict";
var home_component_1 = require("./home/home.component");
var finance_component_1 = require("./finance/finance.component");
var company_component_1 = require("./company/company.component");
var statistics_component_1 = require("./statistics/statistics.component");
var page_not_found_component_1 = require("./page-not-found/page-not-found.component");
exports.routes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    { path: 'finance', component: finance_component_1.FinanceComponent },
    { path: 'company', component: company_component_1.CompanyComponent },
    { path: 'statistics', component: statistics_component_1.StatisticsComponent },
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent }
];
//# sourceMappingURL=app.routes.js.map