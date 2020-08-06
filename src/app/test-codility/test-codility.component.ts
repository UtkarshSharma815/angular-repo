import { Component, OnInit } from '@angular/core';
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-test-codility',
  template: `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
  
  <input [(ngModel)]="userName" id="txt-name" type="text"/>
  <span class="msg-show" >Welcome {{outPut}} </span>
  <button (click)=click() > click </button>


  </body>

</html>
  `,
  styleUrls: ['test-codility.component.css']
})
export class TestCodilityComponent implements OnInit {

  userName: string;
  outPut: string;

  click() {
    if (this.userName == "Ramu") {
      this.outPut = "Ramu"
    }
    else {
      this.outPut = "<name>"
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
