import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/shared/interfaces';
import { FakeBackendService } from 'src/app/shared/services/fakebackend.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  animations: [
    trigger("flyInOut", [
      state("in", style({ opacity: 1, height: '0' })),
      transition("void => *", [
        style({
          opacity: 0,
          height: '100%'
        }),
        animate("0.6s ease-in")
      ]),
      transition("* => void", [
        animate(
          "0.2s ease-out",
          style({
            opacity: 0,
            height: '100%'
          })
        )
      ])
    ])
  ]
})
export class CardsComponent implements OnInit {

  public users: IUser[];

  constructor(
    private fakeBackendService: FakeBackendService
  ) {}

  ngOnInit() {
    this.users = this.fakeBackendService.getUsers();
  }


}
