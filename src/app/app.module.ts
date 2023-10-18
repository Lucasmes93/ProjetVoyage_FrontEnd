import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {HttpClientModule} from "@angular/common/http";
import {UserService} from "./user/user.service";
import {ViewComponent} from './user/user-view/view.component';
import { UserViewComponent } from './user/user-view/user-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    UserViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
