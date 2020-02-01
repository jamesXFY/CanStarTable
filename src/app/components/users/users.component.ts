import { Component, OnInit } from '@angular/core';

import { IUser } from 'src/app/shared/interfaces';
import { UserComponent } from 'src/app/components/user/user.component';

@Component({
    selector: 'users',
    templateUrl: 'users.component.html'
})
export class UsersComponent implements OnInit {

    users: IUser[];
    addingUser: boolean = false;

    constructor() { }

    ngOnInit() {
    }

    removeUser(user: any) {
    }

    userCreated(user: any) {
    }

    addUser() {
    }

    cancelAddUser() {
    }
}