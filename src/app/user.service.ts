import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
constructor(private http: HttpClient,public router:Router) { }

  setdata(userdata:any): Observable<any>{
    const user = {
      emailOrMobileNo: "9987387022",
      otp: 3055
    }
    return this.http.post("https://testffc.nimapinfotech.com/api/Account/LoginWithOTP",{
      emailOrMobileNo: "9987387022",
      otp: 3055
    });
  }
   
  getdata(){
    const user = { username: '9987387022', password: 'Komal1999' };
  return this.http.post("https://testffc.nimapinfotech.com/api/CRM/Leads", {});
  } 

    data(dilg:any){
      return this.http.post("https://testffc.nimapinfotech.com/api/CRM/AddLead",dilg);
    }

  guard(){
    if(localStorage.getItem('token')){
      return true;
    }else{
      return false;
    }
  }

  guard1(){
    if(localStorage.getItem('token')){
      return (this.router.navigate(['/customer']))
    }else{
      return false;
    }
  }

}
