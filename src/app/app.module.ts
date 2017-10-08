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
import { TabsPage } from '../pages/tabs/tabs';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UsersPage,
    ReposPage,
    OrganisationsPage,
    UserDetails,
    TabsPage

  ],
  imports: [
     BrowserModule,HttpModule,
    IonicModule.forRoot(MyApp,{tabPlacement:'bottom'}),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UsersPage,
    ReposPage,
    OrganisationsPage,
    UserDetails,
    TabsPage
  ],
  providers: [GithubUsers]
})
export class AppModule {}
