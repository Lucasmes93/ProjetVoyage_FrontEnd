import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {UserService} from "./user/user.service";
import {UserViewComponent} from './user/user-view/user-view.component';

import {MatTableModule} from '@angular/material/table';
import {PostViewComponent} from './post/post-view/post-view.component';
import {PostService} from "./post/post.service";
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { BookingsViewComponent } from './bookings/bookings-view/bookings-view.component';
import { DestinationsViewComponent } from './destinations/destinations-view/destinations-view.component';
import { UserprofileViewComponent } from './userprofile/userprofile-view/userprofile-view.component';
import { UserprofileCreateComponent } from './userprofile/userprofile-create/userprofile-create.component';
import { DestinationsCreateComponent } from './destinations/destinations-create/destinations-create.component';
import { BookingsCreateComponent } from './bookings/bookings-create/bookings-create.component';
import { AuthTokenComponent } from './auth/auth-token/auth-token.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    UserViewComponent,
    PostViewComponent,
    BookingsViewComponent,
    DestinationsViewComponent,
    UserprofileViewComponent,
    UserprofileCreateComponent,
    DestinationsCreateComponent,
    BookingsCreateComponent,
    AuthTokenComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    MatTabsModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [UserService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
