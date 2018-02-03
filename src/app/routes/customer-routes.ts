import { RouterModule, Routes } from '@angular/router';
import { CustomerComponentComponent } from '../customer-component/customer-component.component';
import { CustomerDetailComponent } from '../customer-detail/customer-detail.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { CustomerComponent } from '../customer/customer.component';
import { HomeComponent } from '../home/home.component';
/*
    * Providing the routes configuration for Home, Customers, PageNotFound
    * Assigning it to the RouterModule.forRoot()
    * Assigning Default and wildcard routes
*/
const routes: Routes = [
   { path: 'customers', component: CustomerComponent, pathMatch: 'full',
   children: [
     { path: 'customer-form', component: CustomerComponentComponent, pathMatch: 'full' },
     { path: 'customer-detail', component: CustomerDetailComponent, pathMatch: 'full' },
   ]
    },
    { path: 'Home', component: HomeComponent, pathMatch: 'full'},
   { path: 'not-found', component: PagenotfoundComponent },
   { path: '', redirectTo: 'Home', pathMatch: 'full' },
   { path: '**', redirectTo: 'not-found'},
];

export const appRouting = RouterModule.forRoot(routes);
