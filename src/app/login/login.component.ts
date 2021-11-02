import { Component, OnInit } from '@angular/core';
import {  Validators,FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public fb: FormBuilder, private service: UserService) { }
  userdata!:any; 

  loginform = this.fb.group({
    username:['',[Validators.required]],
    password:['',[Validators.required]]

  });

  ngOnInit(): void {
  
}

setdata(){
  this.service.setdata(this.loginform.value).subscribe((_response: any) =>{
    localStorage.setItem('token', 'bmF6aW1AbmltYXBpbmZvdGVjaC5jb206dGVzdEAxMjM=')
  });
}
}

