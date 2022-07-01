import { Component, OnInit } from '@angular/core';
import define from "../../library/index.js";
import { Runtime, Inspector } from "../../library/runtime.js";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "d3-demo";
  constructor() {
    const runtime = new Runtime();
    const main = runtime.module(define, Inspector.into(document.body));
  }
  ngOnInit(): void {
    console.log("no empty hooks rule");
  }
}