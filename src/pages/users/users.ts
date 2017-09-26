import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { User } from '../../models/user';

import {  GithubUsers } from '../../providers/github-users';
import { UserDetails } from '../user-details/user-details';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {
  users: User[]

  constructor(public navCtrl: NavController, private githubUsers: GithubUsers) {
    githubUsers.load().subscribe(users => {
       this.users = users;
       console.log(users)
    })
  }
  goToDetails(id: number) {
    this.navCtrl.push(UserDetails, {id});
  }
}
