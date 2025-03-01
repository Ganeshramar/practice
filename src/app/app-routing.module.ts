import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalsComponent } from './components/signals/signals.component';
import { TreasureComponent } from './components/treasure-component/treasure-component.component';
import { hideComponent } from './components/hide-component/hide-component.component';
import { visibleComponent } from './components/visible-component/visible-component.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { SignalFormComponent } from './components/signal-form/signal-form.component';
import { AbstractComponent } from './components/abstract/abstract.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CountDownSignalComponent } from './components/count-down-signal/count-down-signal.component';
import { UserListDeclarativeComponent } from './components/user-list-declarative/user-list-declarative.component';
import { UserListImperativeComponent } from './components/user-list-imperative/user-list-imperative.component';
import { UserListSignalsComponent } from './components/user-list-signals/user-list-signals.component';
import { CartSampleComponent } from './components/cart-sample/cart-sample.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

const routes: Routes = [
  { path: '', redirectTo: 'signals', pathMatch: 'full' },
  { path: 'signals', component: SignalsComponent },
  { path: 'treasure/:id', component: TreasureComponent},//Router Parameter
  { path: 'treasure', component: hideComponent},//Query Parameter
  { path: 'visible', component: visibleComponent, data: {title: 'Treasure'}},//Route data
  { path: 'react', component: ReactiveFormComponent },//Reactive Form
  { path: 'signalform', component: SignalFormComponent },//Reactive Form
  { path: 'abstract', component: AbstractComponent },//abstract
  { path: 'home', component: HomeComponent },//home
  { path: 'about', component: AboutComponent },//about
  { path: 'countSignal', component: CountDownSignalComponent },//countSignal
  { path: 'userDeclar', component: UserListDeclarativeComponent },//subject,rxjs
  { path: 'userImper', component: UserListImperativeComponent },//manual,rxjs
  { path: 'userSignalDeclar', component: UserListSignalsComponent },//signals
  { path: 'cartPage', component:CartSampleComponent },//signals
  { path: 'theme', component:NavBarComponent },//dark-rtheme
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
