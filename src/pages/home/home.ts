import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {  GithubUsers } from '../../providers/github-users';
import { User } from '../../models/user';

import { UserDetails } from '../user-details/user-details';
import { ToastController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
banners: User[]
image:any;
image1:any;
text:string;
text1:string;
users:User[];
  constructor(public navCtrl: NavController,private githubUsers: GithubUsers,public toastCtrl: ToastController) {
    this.githubUsers.banner().subscribe(users => {
       this.banners= users;
      //  console.log(this.banner[0]);
      //  console.log(this.banner[1]);
      //  this.image =  this.banner[0].banner_image;
      //  this.text =   this.banner[0].description;
      //  this.image1 = "http://139.59.37.127:3001"+ this.banner[1].banner_image;
      //  this.text1 =   this.banner[1].description;


    })
    githubUsers.load().subscribe(users => {
       this.users = users;
    })

  }
  goToDetails(id: number) {
    this.navCtrl.push(UserDetails, {id});
  }
  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Coming Soon',
      duration: 2000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
}
