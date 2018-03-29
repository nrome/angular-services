import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { User } from '../models/user';

@Injectable()
export class MockDataService {

  users: User[];
  data: Observable<any>;

  constructor() { 

    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'j.doe@gmail.com',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Remi',
        lastName: 'James',
        email: 'r.james@gmail.com',
        isActive: false,
        registered: new Date('03/22/2017 06:30:00'),
        hide: true
      },
      {
        firstName: 'Stephen',
        lastName: 'Lander',
        email: 's.lander@gmail.com',
        isActive: true,
        registered: new Date('11/02/2016 10:30:00'),
        hide: true
      }
    ];
  }

  // set up observable open data stream 
  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(3);
      }, 1000);

      setTimeout(() => {
        observer.next(2);
      }, 2000);

      setTimeout(() => {
        observer.next(1);
      }, 3000);

      setTimeout(() => {
        observer.next('BLAST OFF!');
      }, 4000);
    });

    return this.data;
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }

}
