import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {InputTextModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { ServerDetailComponent } from './pages/server/server-detail/server-detail.component';

import { Ng2IpModule } from './components/ng2-ip';

@NgModule({
  declarations: [
    AppComponent,
    ServerDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    InputTextModule,
    Ng2IpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
