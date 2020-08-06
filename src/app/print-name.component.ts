import { Component, OnInit } from '@angular/core';
import { User } from "./user";
@Component({
  selector: 'app-print-name',
  template: 
  `
  <form (ngSubmit)='show()'>
     UserName:<input [(ngModel)]='user.username' name='uname'>
     User Addrs: <input [(ngModel)]='user.useraddress' name='uage'>
     User age: <input [(ngModel)]='user.userage' name='uage'>
     <button type='submit'>submit</button>
     <img src=''/>
  </form>
    
  `,
  styles: [
  ]
})
export class PrintNameComponent implements OnInit {

imagepath='assets/Screenshot (62).png';






user = new User();
  
  constructor() { }

  show()
  {
    console.log(this.user.username+' '+this.user.userage+' '+this.user.useraddress);
  }

  ngOnInit(): void {
    console.log(this.user.username+' '+this.user.userage+' '+this.user.useraddress);
  }

}
