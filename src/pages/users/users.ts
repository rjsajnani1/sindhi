import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { User } from '../../models/user';

import {  GithubUsers } from '../../providers/github-users';
import { UserDetails } from '../user-details/user-details';
import {LoadingController} from 'ionic-angular';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {
  users: User[];
  loader:any;

  constructor(public navCtrl: NavController, private githubUsers: GithubUsers,public loading: LoadingController) {
    this.presentLoadingText();
    githubUsers.load().subscribe(users => {
       this.users = users;
       this.loader.dismiss();
       console.log(users)

    })
    // githubUsers.searchUsers('Alka H Jiandani').subscribe(users => {
    //     console.log(users)
    //   });
  }
  goToDetails(id: number) {
    this.navCtrl.push(UserDetails, {id});
  }
  search(searchEvent) {
    let term = searchEvent.target.value
    // We will only perform the search if we have 3 or more characters

      // Get the searched users from github
      this.githubUsers.searchUsers(term).subscribe(users => {
        this.users = users;
      console.log(term);
      });
    if (term == '') {
      this.presentLoadingText();

      this.githubUsers.load().subscribe(users => {
         this.users = users;
         console.log(users)
         this.loader.dismiss();

      })
    }
  }
  onClear(clear){
    this.presentLoadingText();

    this.githubUsers.load().subscribe(users => {
       this.users = users;
       console.log(users)
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
}
