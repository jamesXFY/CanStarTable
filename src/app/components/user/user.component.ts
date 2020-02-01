import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { NgbActiveModal, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { IUser } from 'src/app/shared/interfaces';
import { FakeBackendService } from 'src/app/shared/services/fakebackend.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user: IUser;
  @Input() errMessage: string;

  @ViewChild('nameOfUser', { static: true }) nameOfUser: ElementRef;
  @ViewChild('dateOfBirth', { static: true }) dateOfBirth: ElementRef;

  

  constructor(
    public activeModal: NgbActiveModal,
    private fakeBackendService: FakeBackendService,
    private ngbDateFormatter: NgbDateParserFormatter
  ) {}

  ngOnInit() {
    if (this.user === undefined) {
      this.user = {
        id: '',
        avator: '',
        name: '',
        dateOfBirth: ''
      };
    }
  }
  setAvator($event) {
    this.user.avator = $event.currentTarget.value;
  }

  setName($event) {
    this.user.name = $event.currentTarget.value;
  }

  setDateOfBirthByChange($event) {
    this.user.dateOfBirth = $event.currentTarget.value;
  }

  setDateOfBirthByselect($event) {
    this.user.dateOfBirth = this.ngbDateFormatter.format($event);
  }

  createUser() {
    if (this.verifyUser()) {
      this.fakeBackendService.addUser(this.user);
      this.activeModal.close();
    } else {
      this.errMessage = 'please fill all the fields';
    }
  }

  dismiss() {
    this.activeModal.dismiss();
  }

  private verifyUser() {
    if (this.user.name === undefined || this.user.name === ''
      || this.user.avator === undefined || this.user.avator === ''
      || this.user.dateOfBirth === undefined || this.user.dateOfBirth === ''
    ) {
      return false;
    }
    return true;
  }
}
