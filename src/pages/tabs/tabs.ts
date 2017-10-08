import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReposPage } from '../repos/repos';
import { UsersPage } from '../users/users';
import { OrganisationsPage } from '../organisations/organisations';
import { HomePage } from '../home/home';
import { ToastController } from 'ionic-angular';


/*
  Generated class for the Tabs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  // this tells the tabs component which Pages
  // should be each tab's root Page
  users: any = UsersPage;
  home: any = HomePage;
  repo: any = ReposPage;
  organisations: any = OrganisationsPage;

  constructor(public navCtrl: NavController,public toastCtrl: ToastController) {

  }
  closeFab(){
    this.navCtrl.setRoot(TabsPage)
  }
  NotipresentToast() {
    const toast = this.toastCtrl.create({
      message: 'We will notify soon',
      duration: 2000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
  UserpresentToast() {
    const toast = this.toastCtrl.create({
      message: 'This is a demo',
      duration: 2000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
}
