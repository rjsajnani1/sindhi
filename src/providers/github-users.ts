import { Injectable } from '@angular/core';
import { Http,Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { User } from '../models/user';

@Injectable()
export class GithubUsers {
  githubApiUrl = 'http://139.59.37.127:3001';
  search = 'http://139.59.37.127:3001/search.json?';

  constructor(public http: Http) { }

  // Load all github users
  load(): Observable<User[]> {
    return this.http.get(`${this.githubApiUrl}/contact_infos.json`)
      .map(res => <User[]>res.json());
  }
  banner(): Observable<User[]> {
    return this.http.get(`${this.githubApiUrl}/banners.json`)
      .map(res => <User[]>res.json());
  }
  loadDetails(id: number): Observable<User> {
    return this.http.get(`${this.githubApiUrl}/contact_infos/${id}.json`)
      .map(res => <User>(res.json()))
  }
  searchUsers(searchParam: string): Observable<User[]> {

    let body = {name: searchParam}

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log(this.search,options);
    return this.http.post(this.search, JSON.stringify(body), options)
          .map(res => <User[]>(res.json()))
    //return this.http.post(`${this.githubApiUrl}/search.json?name=${searchParam}`)
      //.map(res => <User[]>(res.json().items))
  }
}
