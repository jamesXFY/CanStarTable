import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

@Component({
  selector: "app-home-component",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  animations: [
    trigger("flyInOut", [
      state("in", style({ opacity: 1, transform: "translateX(0)" })),
      transition("void => *", [
        style({
          opacity: 0,
          transform: "translateX(-100%)"
        }),
        animate("0.6s ease-in")
      ]),
      transition("* => void", [
        animate(
          "0.2s ease-out",
          style({
            opacity: 0,
            transform: "translateX(100%)"
          })
        )
      ])
    ])
  ]
})
export class HomeComponent {
  constructor() {}
}
