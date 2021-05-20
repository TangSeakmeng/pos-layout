import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderDetailBlockComponent } from './components/order-detail-block/order-detail-block.component';
import { PaymentDetailBlockComponent } from './components/payment-detail-block/payment-detail-block.component';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { OrderComponent } from './pages/order/order.component';
import { PaymentComponent } from './pages/payment/payment.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent 
  },
  {
    path: 'home',
    component: FrontLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        outlet: 'child1'
      },
      {
        path: '',
        component: PaymentDetailBlockComponent,
        outlet: 'child2'
      },
    ]
  },
  {
    path: 'payment',
    component: FrontLayoutComponent,
    children: [
      {
        path: '',
        component: PaymentComponent,
        outlet: 'child1'
      },
      {
        path: '',
        component: PaymentDetailBlockComponent,
        outlet: 'child2'
      },
    ]
  },
  {
    path: 'order',
    component: FrontLayoutComponent,
    children: [
      {
        path: '',
        component: OrderComponent,
        outlet: 'child1'
      },
      {
        path: '',
        component: OrderDetailBlockComponent,
        outlet: 'child2'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
