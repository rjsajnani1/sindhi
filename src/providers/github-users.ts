import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { User } from '../models/user';

@Injectable()
export class GithubUsers {
  githubApiUrl = 'http://139.59.37.127:3001';

  constructor(public http: Http) { }

  // Load all github users
  load(): Observable<User[]> {
    return this.http.get(`${this.githubApiUrl}/contact_infos.json`)
      .map(res => <User[]>res.json());
  }
  loadDetails(id: number): Observable<User> {
    return this.http.get(`${this.githubApiUrl}/contact_infos/${id}.json`)
      .map(res => <User>(res.json()))
  }
}
