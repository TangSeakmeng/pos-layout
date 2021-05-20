import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { HeaderComponent } from './shared/header/header.component';
import { PaymentDetailBlockComponent } from './components/payment-detail-block/payment-detail-block.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { OrderDetailBlockComponent } from './components/order-detail-block/order-detail-block.component';
import { OrderComponent } from './pages/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FrontLayoutComponent,
    HeaderComponent,
    PaymentDetailBlockComponent,
    PaymentComponent,
    OrderDetailBlockComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
