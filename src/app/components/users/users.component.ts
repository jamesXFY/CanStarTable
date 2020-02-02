import { Component, OnInit, ViewChild, ElementRef, Renderer2, Input, OnChanges, SimpleChanges} from '@angular/core';

import { IUser } from 'src/app/shared/interfaces';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FakeBackendService } from 'src/app/shared/services/fakebackend.service';
import { UserComponent } from 'src/app/components/user/user.component';
import { Observable } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.css'],
  animations: [
    trigger("flyInOut", [
      state("in", style({ opacity: 1, transform: "translateY(0)" })),
      transition("void => *", [
        style({
          opacity: 0,
          transform: "translateY(-100%)"
        }),
        animate("0.6s ease-in")
      ]),
      transition("* => void", [
        animate(
          "0.2s ease-out",
          style({
            opacity: 0,
            transform: "translateY(100%)"
          })
        )
      ])
    ])
  ]
})
export class UsersComponent implements OnInit{
  @Input() users: IUser[];

  private ngModuleRef: NgbModalRef;

  constructor(
    private modalService: NgbModal,
    private fakeBackendService: FakeBackendService,
    private render: Renderer2
  ) {}

  ngOnInit() {
    this.users = this.fakeBackendService.getUsers();
  }

  removeUser(user: any) {}

  openModal() {
    this.ngModuleRef = this.modalService.open(UserComponent);
  }
}
