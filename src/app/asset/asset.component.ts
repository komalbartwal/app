import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { DilgComponent } from '../dilg/dilg.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css']
})
export class AssetComponent implements OnInit {
  Data: any;  
  
  

  constructor(private service: UserService, private dialog:MatDialog,public router:Router) { }
 

  ngOnInit(): void {
    this.service.getdata().subscribe((response: any) => {
      this.Data = response;
      console.log(this.Data);
      
    });
  }

  add(){
    const dialogRef = this.dialog.open(DilgComponent, {
      width: '400px'
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      this.ngOnInit();
    });
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  
  }

  
}
