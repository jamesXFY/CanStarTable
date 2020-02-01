import { Injectable } from '@angular/core';
import { IUser } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class FakeBackendService {
  private usersStorage : IUser[];

  constructor() { }

  public getUsers(){
    return this.usersStorage;
  }

  public getUserById(id:string){
    let user;
    this.usersStorage.forEach((user:IUser) => {
      if(user.id === id){
        user = user;
        return;
      }
    });
    return user;
  }

  public addUser(user:IUser){
    this.usersStorage.push(user);
  }

  public updateUser(){

  }

  public removeUser(user:IUser){
    this.usersStorage.pop();
  }
}
