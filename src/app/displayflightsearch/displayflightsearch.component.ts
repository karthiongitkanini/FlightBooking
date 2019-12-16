import { OnInit } from '@angular/core';
import {Inject} from '@angular/core';
import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import  * as $ from 'jquery';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { Router } from '@angular/router';

function openNav() {
  document.getElementById("mySidenav").style.width = "240px";
}
 function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

@Component({
  selector: 'app-displayflightsearch',
  templateUrl: './displayflightsearch.component.html',
  styleUrls: ['./displayflightsearch.component.css'],
 })

// ---------EXPORT CLASS OF OLD ONE STEPPER------------------
export class DisplayflightsearchComponent implements OnInit {


  
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isOptional = false;
 

  constructor(private _formBuilder: FormBuilder, public router: Router) {}

  closeNavbu()
  {
     closeNav();
  }
  openNavbu()
  {
    openNav();
  }
  goToLogin(){
    this.router.navigateByUrl("/login");
  }
  goToRegister(){
    this.router.navigateByUrl("/Home");
  } 
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ''
    });
  }
}

  //----------------OLD ONE---------------------------
  // constructor(public dialog: MatDialog) {}

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(PopupComponent, {

  //     width: '800px',
  //     data: {myvar:"breeze airways from other comp!!"}

  //    });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     console.log(result)
  //   });
  // }
 
 

 
 