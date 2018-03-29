import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/user'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  // Define Properties
 
  // bind to values on input
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
  }

  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;

  constructor() { }

  ngOnInit() {

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

    this.loaded = true;

  }

/*   addUser() {
    // make active
    this.user.isActive = true;
    // set the join date
    this.user.registered = new Date();

    // append or push to the front of the users arr
    this.users.unshift(this.user);

    // clear out the form
    this.user = {
      firstName: '',
      lastName: '',
      email: null,

    }
  } */

  toggleHide(user: User) {
    user.hide = !user.hide;
  }

  onSubmit({value, valid}: {value: User, valid: boolean}) {
    if (!valid) {
      console.log('Form is not valid');
    } else {
      // make active
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

      // append or push to the front of the users arr
      this.users.unshift(value);

      // reset the form
      this.form.reset();
    }
  }

}
