import { Routes }                from '@angular/router';

import { HomeComponent }         from './home/home.component';
import { FinanceComponent }      from './finance/finance.component';
import { CompanyComponent }      from './company/company.component';
import { StatisticsComponent }   from './statistics/statistics.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
    // children: [
    //   { path: '', component: AboutHomeComponent },
    //   { path: 'item/:id', component: AboutItemComponent }
    // ]
  },
  { path: 'finance',        component: FinanceComponent },
  { path: 'company',        component: CompanyComponent },
  { path: 'statistics',     component: StatisticsComponent },
  { path: '**',             component: PageNotFoundComponent }
];