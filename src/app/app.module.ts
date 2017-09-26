import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { UsersPage }  from "../pages/users/users";
import { ReposPage }  from "../pages/repos/repos";
import { OrganisationsPage }  from "../pages/organisations/organisations";
import { GithubUsers } from '../providers/github-users';
import { HttpModule } from '@angular/http';
import {UserDetails } from '../pages/user-details/user-details';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UsersPage,
    ReposPage,
    OrganisationsPage,
    UserDetails

  ],
  imports: [
     BrowserModule,HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UsersPage,
    ReposPage,
    OrganisationsPage,
    UserDetails
  ],
  providers: [GithubUsers]
})
export class AppModule {}
