import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the OrganisationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-organisations',
  templateUrl: 'organisations.html',
})
export class OrganisationsPage {

  constructor(public navCtrl: NavController,public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('Hello Organisations Page');
  }
  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Coming Soon',
      duration: 2000,
      position: 'middle'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
}
