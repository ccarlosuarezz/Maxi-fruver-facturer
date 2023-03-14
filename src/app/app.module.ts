import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { NgxElectronModule } from 'ngx-electron';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainSystemWindowComponent } from './windows/main-system-window/main-system-window.component';
import { LoginWindowComponent } from './windows/login-window/login-window.component';
import { MainAdministratorWindowComponent } from './windows/main-administrator-window/main-administrator-window.component';
import { CreateProductWindowComponent } from './windows/create-product-window/create-product-window.component';
import { CreateProviderWindowComponent } from './windows/create-provider-window/create-provider-window.component';
import { CreateCustomerWindowComponent } from './windows/create-customer-window/create-customer-window.component';
import { DatePanelComponent } from './components/date-panel/date-panel.component';
import { MakeSaleWindowComponent } from './windows/make-sale-window/make-sale-window.component';
import { UpdateProductListWindowComponent } from './windows/update-product-list-window/update-product-list-window.component';
import { CreateCashierWindowComponent } from './windows/create-cashier-window/create-cashier-window.component';
import { ConsultReportsWindowComponent } from './windows/consult-reports-window/consult-reports-window.component';
import { GenerateSaleWindowComponent } from './windows/generate-sale-window/generate-sale-window.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    MainSystemWindowComponent,
    LoginWindowComponent,
    MainAdministratorWindowComponent,
    CreateProductWindowComponent,
    CreateProviderWindowComponent,
    CreateCustomerWindowComponent,
    DatePanelComponent,
    MakeSaleWindowComponent,
    UpdateProductListWindowComponent,
    CreateCashierWindowComponent,
    ConsultReportsWindowComponent,
    GenerateSaleWindowComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // NgxElectronModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
