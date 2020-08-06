import { Component, OnInit } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';



@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css']
})
export class GreetingsComponent implements OnInit 
{

  randomValue="";
  greet:any[]=["hi","hello","bonjour","namaste"];


  show(value)
  {
    this.randomValue = this.greet [Math.floor (Math.random () * this.greet.length)];
    this.randomValue=this.randomValue+" "+value;
  }

  constructor() 
  {

  }

  ngOnInit(): void 
  {

  }

}
