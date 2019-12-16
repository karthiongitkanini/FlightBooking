import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/services/flight.sevice';
import { FlightModel } from 'src/models/flightsearch.model';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { ThrowStmt } from '@angular/compiler';
function openNav() {
  document.getElementById("mySidenav").style.width = "240px";
}
 function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

 
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})

export class SearchPageComponent implements OnInit {

  places: string[];
  place: any
  selectSource: string = '';
  selectDestination: string = '';
  selectDate: string = '';
  selectcount:number;
  flightshow: FlightModel[];
  result:string;
  public hide: boolean = false;

  public show: boolean = false;
  public buttonName: any = 'Show';

  constructor(private flightService: FlightService, public router: Router) {
    this.flightService.getAllPlacesFromAPI().subscribe(res => {
      this.place = res;
      // console.log(this.place);
    })
  }
  minDate = new Date(2019,11,10);
  maxDate = new Date(2019, 11, 31);
   
  getUrl() { 
    return "url(' ')";
  }

  selectedSource(event: any) {
    this.selectSource = event.target.value;
    console.log(this.selectSource); 
  }
  selectedDestination(event: any) {
    this.selectDestination = event.target.value;
    console.log(this.selectDestination);
  }
  selectedDate(event: any) {
     this.selectDate = event.target.value;
    console.log(this.selectDate);
  }
  selectedPassengercount(event: any) {
    this.selectcount = event.target.value;
   console.log(this.selectcount);
   localStorage.setItem("value",this.selectcount.toString());
 }
  goToLogin(){
    this.router.navigateByUrl("/login");
  }
  goToRegister(){
    this.router.navigateByUrl("/Home");
  }  
  closeNavbu()
  {
     closeNav();
  }
  openNavbu()
  {
    openNav();
  }
  submit() {
    
    if(this.selectDestination==this.selectSource || this.selectDate=='' || this.selectSource=='' 
    || this.selectDestination=='')
    {
      if(this.selectSource=='' && this.selectDestination!='' && this.selectDate !='')
          {
            this.result="Please fill the Source"

          }
            if(this.selectDestination=='' && this.selectSource !='' && this.selectDate !='' )
            {
              this.result="Please fill Destination"

            }
      if(this.selectSource=='' && this.selectDestination==''&& this.selectDate=='')
      {
        this.result="Please fill the above field";
      }
         if(this.selectDate=='' && this.selectDestination !='' && this.selectSource !='' && this.selectSource!==this.selectDestination)
      {
        this.result="Please fill Date"
      }
      if((this.selectDestination == this.selectSource && this.selectDate !=''&& this.selectSource!=''&& this.selectDestination!=''))
      
      {
        this.result="Source and destination cannot be same";
      }
      if(this.selectSource==''&& this.selectDate=='' && this.selectDestination !='')
      {
        this.result="Please fill Source and Date"
      }
      if(this.selectSource!=''&& this.selectDate=='' && this.selectDestination =='')
      {
        this.result="Please fill Destination and Date"
      }
      if(this.selectDestination==this.selectSource  && this.selectSource!=''&& this.selectDestination!='' && this.selectDate =='')
      {
        this.result="Same location and no date really??"
      }
    }
    else{
    this.flightService.httpRequest(this.selectDate, this.selectSource, this.selectDestination).subscribe((dat => {
      console.log(dat)
      this.flightshow = dat
      console.log(this.flightshow);
      this.hide=!this.hide;
      this.show = !this.show;

      // CHANGE THE NAME OF THE BUTTON.
      if (this.show)
        this.buttonName = "Hide";
      else
        this.buttonName = "Show";

    }))
  }
  }
  bookNow() {
    this.router.navigate(['/displayAfterBooknow']);
  }
  ngOnInit() {

  }
}
