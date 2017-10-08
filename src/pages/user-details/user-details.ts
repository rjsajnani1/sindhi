import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { User } from '../../models/user';

import { GithubUsers } from '../../providers/github-users';
import {LoadingController} from 'ionic-angular';
import { ToastController } from 'ionic-angular';

// import { SocialSharing } from '@ionic-native/social-sharing';


@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html'
})
export class UserDetails {
  user: User;
  id: number;
  loader:any;

constructor(public navCtrl: NavController,public toastCtrl: ToastController,public navParams: NavParams, public githubUsers: GithubUsers,public loading: LoadingController) {
this.id = navParams.get('id');
console.log(this.id);
this.presentLoadingText();
githubUsers.loadDetails(this.id).subscribe(user => {
  this.user = user;
  console.log(user);
  this.loader.dismiss();

})

}
presentLoadingText() {
this.loader = this.loading.create({
  spinner: 'bubbles',
  content: 'Loading Please Wait...'
});
this.loader.present();
}
sharepresentToast() {
  const toast = this.toastCtrl.create({
    message: 'Share will be added soon',
    duration: 2000,
    position: 'bottom'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}
}
