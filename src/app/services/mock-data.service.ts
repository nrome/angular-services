import { Injectable } from '@angular/core';

import { User } from '../models/user';

@Injectable()
export class MockDataService {

  users: User[];

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

  getUsers(): User[] {
    console.log('Fetching users from service...');
    return this.users;
  }

}
