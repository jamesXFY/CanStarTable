import { Component, OnInit } from '@angular/core';
import { FakeBackendService } from './shared/services/fakebackend.service';
import { IUser } from './shared/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private users: IUser[];

  constructor() {}

  ngOnInit() {}
}
