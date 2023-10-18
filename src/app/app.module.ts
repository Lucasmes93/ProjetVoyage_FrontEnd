import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MatTableModule} from '@angular/material/table';


import {HttpClientModule} from "@angular/common/http";
import {UserService} from "./user/user.service";
import {UserViewComponent} from './user/user-view/user-view.component';

@NgModule({
  declarations: [
    AppComponent,
    UserViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
