import { Component, OnInit, ElementRef, TemplateRef } from '@angular/core';

import { IUser } from 'src/app/shared/interfaces';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FakeBackendService } from 'src/app/shared/services/fakebackend.service';

@Component({
    selector: 'users',
    templateUrl: 'users.component.html'
})
export class UsersComponent implements OnInit {

    users: IUser[];
    addingUser: boolean = false;

    constructor(private modalService: NgbModal,private fakeBackendService:FakeBackendService) { }

    ngOnInit() {
        this.users = this.fakeBackendService.getUsers();
    }

    removeUser(user: any) {
    }

    userCreated(user: any) {
    }

    addUser(content:any) {
        this.modalService.open(content)
    }
}