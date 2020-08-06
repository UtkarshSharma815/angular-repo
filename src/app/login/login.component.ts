import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{

 
  userNames:any[]=["utkarsh","sharma"];
  userPass:any[]=["utkarsh123","sharma123"];


  uname="";
  pwd="";

  

  result="";
  constructor() 
  {

  }

  ngOnInit(): void 
  {

  }

  validate(name, pass)
  {

    

    this.uname=name;
    this.pwd=pass;
    
    var uname=this.userNames.find(x=>x==name);
    var pwd=this.userPass.find(y=>y==pass);

    if(uname==this.uname && pass==this.pwd)
    {
      this.result="login successfull";
    }
    else
    {
      this.result="login failed";
    }

  


  
  }

  
  
}
