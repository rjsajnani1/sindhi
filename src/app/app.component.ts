import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';
import firebase from 'firebase';


// import { StatusBar } from '@ionic-native/status-bar';

import { ReposPage } from '../pages/repos/repos';
import { UsersPage } from '../pages/users/users';
import { OrganisationsPage } from '../pages/organisations/organisations';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
 @ViewChild(Nav) nav: Nav;

  // make UsersPage the root (or first) page
  rootPage: any = UsersPage;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,  public menu: MenuController) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Users', component: UsersPage },
      { title: 'Repos', component: ReposPage },
      { title: 'Organisations', component: OrganisationsPage },
    ];
    const firebaseConfig = {
      apiKey: "AIzaSyCOsB4iBoNeQuwF3Ym00EgikBHooWi2Zw8",
      authDomain: "sindhi-c534e.firebaseapp.com",
      databaseURL: "https://sindhi-c534e.firebaseio.com",
      projectId: "sindhi-c534e",
      storageBucket: "sindhi-c534e.appspot.com",
      messagingSenderId: "619060539374"
    };
    firebase.initializeApp(firebaseConfig);

    const unsubscribe = firebase.auth().onAuthStateChanged( user => {
      if (user){
        this.rootPage = HomePage;
        unsubscribe();
      } else {
        this.rootPage = 'LoginPage';
        unsubscribe();
      }
    });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
    // statusBar.styleDefault();
    // statusBar.backgroundColorByHexString("#13204c");
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
