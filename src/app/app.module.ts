import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CityService } from './Services/City-Service';
import { CustomerService } from './Services/Customer-Service';
import { CustomerComponentComponent } from './customer-component/customer-component.component';
import { ChangeChar } from './pipes/changeToCapital';
import { SearchPipe } from './pipes/SearchByPipe';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { appRouting } from './routes/customer-routes';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CustomerComponent } from './customer/customer.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponentComponent,
    ChangeChar,
    SearchPipe,
    CustomerDetailComponent,
    PagenotfoundComponent,
    CustomerComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
    appRouting
  ],
  providers: [CityService, CustomerService, ChangeChar, SearchPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
