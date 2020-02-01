import { Injectable } from '@angular/core';
import { IUser } from '../interfaces';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeBackendService {
  private userIdCounter = 0;
  private usersStorage: IUser[];

  public userSubject: Subject<IUser[]> = new Subject();

  constructor() {
    this.usersStorage = new Array();
  }

  public usersObservable(): Observable<IUser[]> {
    return this.userSubject.asObservable();
  }

  public getUsers() {
    return this.usersStorage;
  }

  public addUser(user: IUser) {
    user.id = (this.userIdCounter++).toString();
    this.usersStorage.push(user);
    this.userSubject.next(this.usersStorage);
  }

  public updateUser() {}

  public removeUser(user: IUser) {
    this.usersStorage.pop();
  }
}
