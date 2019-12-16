import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
 function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
  @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  })
export class AppComponent {
  title = 'FlightBooking';
  val:string;
 
  public show: any = false;
   
  constructor(public dialog: MatDialog) {
    
   }
  ;
 
    
  closeNavbu()
  {
     closeNav();
  }
  openNavbu()
  {
    openNav();
  }
  //-----for popup component-----------
  // openDialog(): void {
  //   const dialogRef = this.dialog.open(PopupComponent, {

  //     width: '800px',
  //     data: {myvar:"breeze airways from other comp!!"}

  //    });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     console.log( result)
  //   });
  // }
    ngOnInit(){ 
    }   
   
}
