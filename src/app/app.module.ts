import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatogoryComponent } from './catogory/catogory.component';
import { Catogory2Component } from './catogory2/catogory2.component';
import { Catogory3Component } from './catogory3/catogory3.component';
import { Catogory4Component } from './catogory4/catogory4.component';
// import { GamesComponent } from './games/games.component';
import { Catogory1Component } from './catogory1/catogory1.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { InstantComponent } from './instant/instant.component';
import { CommunityComponent } from './community/community.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { RestComponent } from './rest/rest.component'
// import {AngularFontAwesomeModule} from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    CatogoryComponent,
    Catogory2Component,
    Catogory3Component,
    Catogory4Component,
    Catogory1Component,
    HomeComponent,
    ErrorComponent,
    InstantComponent,
    CommunityComponent,
    RestComponent,
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
