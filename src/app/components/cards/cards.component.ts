import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/shared/interfaces';
import { FakeBackendService } from 'src/app/shared/services/fakebackend.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
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
