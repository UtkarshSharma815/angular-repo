import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-directivecomp',
  templateUrl: './directivecomp.component.html',
  styleUrls: ['./directivecomp.component.css']
})
export class DirectivecompComponent implements OnInit {
  

  

  constructor() { }
 
   isValid: boolean=false;


  ngOnInit(): void {}
    cities:any[]=["Mumbai","gujju"];
  

}
