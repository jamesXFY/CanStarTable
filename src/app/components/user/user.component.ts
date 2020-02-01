import { Component, Input, Output, OnInit, ViewContainerRef, EventEmitter, ViewChild} from '@angular/core';

import {trigger, state, style, animate, transition} from '@angular/animations';

import { IUser } from 'src/app/shared/interfaces';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FakeBackendService } from 'src/app/shared/services/fakebackend.service';

@Component({
  selector: 'user',
  templateUrl: 'user.component.html',
  animations: [
      trigger('flyInOut', [
          state('in', style({ opacity: 1, transform: 'translateX(0)' })),
          transition('void => *', [
              style({
                  opacity: 0,
                  transform: 'translateX(-100%)'
              }),
              animate('0.5s ease-in')
          ]),
          transition('* => void', [
              animate('0.2s 10 ease-out', style({
                  opacity: 0,
                  transform: 'translateX(100%)'
              }))
          ])
      ])
  ]
})
export class UserComponent implements OnInit {
  @Input() user: IUser;
  @Output() removeUser = new EventEmitter();
  @Output() userCreated = new EventEmitter();

  edittedUser: IUser;
  onEdit: boolean = false;
  apiHost: string;
  // Modal properties
  @ViewChild('modal',{static:true})
  modal: any;
  items: string[] = ['item1', 'item2', 'item3'];
  selected: string;
  output: string;
  userSchedulesLoaded: boolean = false;
  index: number = 0;
  backdropOptions = [true, false, 'static'];
  animation: boolean = true;
  keyboard: boolean = true;
  backdrop: string | boolean = true;

  constructor(private fakebackendService: FakeBackendService
      ) { }

  ngOnInit() {
  }

  editUser() {
  }

  createUser() {
  }

  updateUser() {
  }

  openRemoveModal() {
  }

  viewSchedules(user: IUser) {
      
  }

  opened() {
  }

  isUserValid(): boolean {
      return !(this.edittedUser.name.trim() === "")
          && !(this.edittedUser.profession.trim() === "");
  }

}