// Angular
import { Component, OnInit, ViewChild } from '@angular/core';
// Models
import { User } from '../../models/user'
// Services
// import { MockDataService } from '../../services/mock-data.service'
import { UserService } from '../../services/user.service'

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
  data: any;

  // constructor(private mockDataService: MockDataService) { }
  constructor(private userService: UserService) { }

  ngOnInit() {
    // subscribe to the streaming observable 
    this.userService.getData().subscribe(data => {
      console.log(data);
    });

    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    })

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
        // this.users.unshift(value);
      // run addUser from mock-data.service
      // this.mockDataService.addUser(value);
      this.userService.addUser(value);

      // reset the form
      this.form.reset();
    }
  }

}
