import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { By } from '@angular/platform-browser';
import { AppModule } from 'src/app/app.module';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

fdescribe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[AppModule],
      providers:[NgbActiveModal]
    });

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    component.user = {
      id: '',
      avator: '',
      name: '',
      dateOfBirth: ''
    };
    fixture.detectChanges();
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  it('setAvator should be called', () => {
    let select = fixture.debugElement.query(By.css('#avatorSelector'));
    let setAvatorSpy = spyOn(component, 'setAvator');

    select.triggerEventHandler('change',{});;
    fixture.detectChanges();
    expect(setAvatorSpy).toHaveBeenCalled();
  });

  it('setName should be called', () => {
    let nameInput = fixture.debugElement.query(By.css('#nameOfUser'));
    let setNameSpy = spyOn(component, 'setName');

    nameInput.triggerEventHandler('change',{});;
    fixture.detectChanges();
    expect(setNameSpy).toHaveBeenCalled();
  });

  it('setDateOfBirth should be called', () => {
    let dateOfBirth = fixture.debugElement.query(By.css('#dateOfBirth'));
    let selectSpy = spyOn(component, 'setDateOfBirthByselect');

    dateOfBirth.triggerEventHandler('dateSelect',{});;
    fixture.detectChanges();
    expect(selectSpy).toHaveBeenCalled();
  });

  it('verifyUser should reture', () => {
    component.user.name = "test";
    component.createUser();
    expect(component.errMessage).not.toBe("");

    component.user.avator = "test";
    component.createUser();
    expect(component.errMessage).not.toBe("");

    component.user.dateOfBirth = "test";
    component.createUser();
    expect(component.errMessage).toBe("");

  });
});
