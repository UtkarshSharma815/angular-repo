/*import { Component, OnInit } from '@angular/core';
import { NgModel } from "@angular/forms";

@Component({
  selector: 'app-testcodility2',
  template: `
  <div>
    <section [class]="isGreater ? class1: class2" >
        <button (click)="click()" >Click me</button>
        
    </section>
    clicked {{count}} times
  </div>
  `,
  styles: [`
.done
{
  background-color:green;
}
.notdone
{
  background-color:black;
}

  `]
})
export class Testcodility2Component implements OnInit 
{

  count:number=10;
 
  isGreater:boolean=false;

  class1:string="done"

  class2:string="notdone"

  isClicked:boolean=false;

  click()
  {
    this.count++
    if(this.count>15)
    {
         this.isGreater=true;
    }

  }

  constructor() { }

  ngOnInit(): void {
  }

}*/
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-testcodility2',
 template: ` <div>
              <button (click)="onClickMe()" [class]="clickedMax?'done': 'notdone'">
              <section>  
              Clicked {{initialValue}} times!
              </section>
              
              </button> 
              </div>`,
  styles: [ `
          .done
          {
            border-color: green;
            color: green;
          }
          .notdone
          {
            color : black;
          }
          
          ` ]
})
export class Testcodility2Component  {
  initialValue = 10;
  clickedMax: boolean;
  constructor()
  {
    this.clickedMax= false;
  }


  onClickMe()
  {
    this.initialValue++;
    if(this.initialValue>15)
    {
      this.clickedMax = true;
      
    }
  }
}
