import { Component } from "@angular/core";
import { StylesCompileDependency } from '@angular/compiler';



@Component({
    selector :'hello-name',
    template:`
    <form>
      eneter ur name: <input [(ngModel)]=username name='nm'>
      <button type ="submit">submit</button>
      <p> hello {{username}}</p>
    </form>`,
    styles :[]
})    



export class HelloName{
    username: string ="noname";
}