import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './pages/demo/heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './pages/demo/detail/hero-detail/hero-detail.component';
import { MessagesComponent } from './pages/demo/message/messages/messages.component';
import { DashboardComponent } from './pages/demo/dashboard/dashboard.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './pages/service/InMemoryData/in-memory-data.service'
import { HeroSearchComponent } from './pages/demo/hero-search/hero-search.component';
import { ZippyBasicComponent } from './pages/demo2/zippy-basic/zippy-basic.component';
import { NewDemoComponent } from './pages/demo/new-demo/new-demo.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    ZippyBasicComponent,
    NewDemoComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
