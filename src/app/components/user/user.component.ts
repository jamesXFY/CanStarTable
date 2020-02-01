import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { IUser } from "src/app/shared/interfaces";
import { FakeBackendService } from "src/app/shared/services/fakebackend.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  @Input() user: IUser;

  @ViewChild("nameOfUser", { static: true }) nameOfUser: ElementRef;
  @ViewChild("dateOfBirth", { static: true }) dateOfBirth: ElementRef;

  constructor(
    public activeModal: NgbActiveModal,
    private fakeBackendService: FakeBackendService
  ) {}

  ngOnInit() {
    if(this.user === undefined) {
      this.user = {
        id: "",
        avator: "",
        name: "",
        dateOfBirth: ""
      };
    }
  }
  setAvator($event) {
    this.user.avator = $event.currentTarget.value;
  }

  setName($event) {
    this.user.name = $event.currentTarget.value;
  }

  setDateOfBirth($event) {
    this.user.dateOfBirth = $event.currentTarget.value;
  }

  createUser() {
    this.fakeBackendService.addUser(this.user);
    this.activeModal.close();
  }
}
