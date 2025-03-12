import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignalsComponent } from './components/signals/signals.component';
import { TreasureComponent } from './components/treasure-component/treasure-component.component';
import { hideComponent } from './components/hide-component/hide-component.component';
import { visibleComponent } from './components/visible-component/visible-component.component';
import { ResuableFormComponent } from './components/resuable-form/resuable-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { SignalFormComponent } from './components/signal-form/signal-form.component';
import { AbstractComponent } from './components/abstract/abstract.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CountDownSignalComponent } from './components/count-down-signal/count-down-signal.component';
import { UserListImperativeComponent } from './components/user-list-imperative/user-list-imperative.component';
import { UserListDeclarativeComponent } from './components/user-list-declarative/user-list-declarative.component';
import { UserListSignalsComponent } from './components/user-list-signals/user-list-signals.component';
import { RouterButtonComponent } from './components/router-button/router-button.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { CartSampleComponent } from './components/cart-sample/cart-sample.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SignalsComponent,
    TreasureComponent,
    hideComponent,
    visibleComponent,
    ResuableFormComponent,
    ReactiveFormComponent,
    SignalFormComponent,
    AbstractComponent,
    HomeComponent,
    AboutComponent,
    CountDownSignalComponent,
    UserListImperativeComponent,
    UserListDeclarativeComponent,
    UserListSignalsComponent,
    RouterButtonComponent,
    ProductComponent,
    CartComponent,
    CartSampleComponent,
    ThemeToggleComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent],
  exports: [
    ResuableFormComponent
  ]
})
export class AppModule { }
