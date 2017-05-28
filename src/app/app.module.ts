import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { RouterModule } from '@angular/router';

import { MenuItem, PanelMenuModule } from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { AppRoutingModul } from './app-routing.module';

import { ServerDetailComponent } from './pages/server/server-detail/server-detail.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { Ng2IpModule } from './components/ng2-ip';
import { AppMenuComponent } from './app-menu/app-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerDetailComponent,
    DashboardComponent,
    AppMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModul,
    InputTextModule,
    Ng2IpModule,
    PanelMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
