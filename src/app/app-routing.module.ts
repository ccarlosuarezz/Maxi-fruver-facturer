import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultReportsWindowComponent } from './windows/consult-reports-window/consult-reports-window.component';
import { CreateCashierWindowComponent } from './windows/create-cashier-window/create-cashier-window.component';
import { CreateCustomerWindowComponent } from './windows/create-customer-window/create-customer-window.component';
import { CreateProductWindowComponent } from './windows/create-product-window/create-product-window.component';
import { CreateProviderWindowComponent } from './windows/create-provider-window/create-provider-window.component';
import { GenerateSaleWindowComponent } from './windows/generate-sale-window/generate-sale-window.component';
import { LoginWindowComponent } from './windows/login-window/login-window.component';
import { MainAdministratorWindowComponent } from './windows/main-administrator-window/main-administrator-window.component';
import { MainSystemWindowComponent } from './windows/main-system-window/main-system-window.component';
import { MakeSaleWindowComponent } from './windows/make-sale-window/make-sale-window.component';
import { UpdateProductListWindowComponent } from './windows/update-product-list-window/update-product-list-window.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main-system-window',
    pathMatch: 'full'
  },
  {
    path: 'main-system-window',
    component: MainSystemWindowComponent
  },
  {
    path: 'login-window',
    component: LoginWindowComponent
  },
  {
    path: 'main-administrator-window',
    component: MainAdministratorWindowComponent
  },
  {
    path: 'create-product-window',
    component: CreateProductWindowComponent
  },
  {
    path: 'create-provider-window',
    component: CreateProviderWindowComponent
  },
  {
    path: 'create-customer-window',
    component: CreateCustomerWindowComponent
  },
  {
    path: 'make-sale-window',
    component: MakeSaleWindowComponent
  },
  {
    path: 'update-product-list-window',
    component: UpdateProductListWindowComponent
  },
  {
    path: 'create-cashier-window',
    component: CreateCashierWindowComponent
  },
  {
    path: 'consult-reports-window',
    component: ConsultReportsWindowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
