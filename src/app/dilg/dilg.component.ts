import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dilg',
  templateUrl: './dilg.component.html',
  styleUrls: ['./dilg.component.css']
})
export class DilgComponent implements OnInit {

  constructor(public f: FormBuilder,private service: UserService,private dialogRef:MatDialogRef<DilgComponent>) { }
  dilg: any;
  myData1 :any;

  data(){
  this.service.data(this.form.value).subscribe((response: any) => {
    this.dialogRef.close(true);
    this.myData1 = response;
      console.log(response);
  })
}

  form = this.f.group({
    LeadName:['',[Validators.required]],
    MobileNo:['',[Validators.required]]

  });
  ngOnInit(): void {
  }

}
