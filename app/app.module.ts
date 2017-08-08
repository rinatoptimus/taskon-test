import { NgModule }              from '@angular/core';
import { BrowserModule }         from '@angular/platform-browser';
import { FormsModule }           from '@angular/forms';
import { RouterModule }          from '@angular/router';

import { Pipe,PipeTransform} from '@angular/core';
import { FilterPipe } from './home/search-task/pipe-task';

import { routes }                from './app.routes';
import { AppComponent }          from './app.component';
import { HomeComponent }         from './home/home.component';
import { FinanceComponent }      from './finance/finance.component';
import { CompanyComponent }      from './company/company.component';
import { StatisticsComponent }   from './statistics/statistics.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
    imports:      [ 
        BrowserModule, 
        FormsModule,
        RouterModule.forRoot(routes) 
    ],
    declarations: [ 
        AppComponent,
        HomeComponent,
        FinanceComponent,
        CompanyComponent,
        StatisticsComponent,
        PageNotFoundComponent,
        
        FilterPipe
    ],
    providers:    [ ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }