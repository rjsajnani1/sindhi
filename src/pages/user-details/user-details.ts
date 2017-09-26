import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { User } from '../../models/user';

import { GithubUsers } from '../../providers/github-users';

@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html'
})
export class UserDetails {
  user: User;
  id: number;

constructor(public navCtrl: NavController, private navParams: NavParams, private githubUsers: GithubUsers) {
this.id = navParams.get('id');
console.log(this.id);
githubUsers.loadDetails(this.id).subscribe(user => {
  this.user = user;
  console.log(user)
})
}
}
