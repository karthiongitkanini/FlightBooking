import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlightModel } from 'src/models/flightsearch.model';
@Injectable({
    providedIn: 'root'
  })
  export class FlightService
{
    places:any;
    dflight:FlightModel[];
    constructor(private myHttp:HttpClient)
    {
        this.places=[];
    }

     getAllPlacesFromAPI(){
        return this.myHttp.get("https://localhost:44381/api/SearchFlight");
         }
    // getPlaces():string[]{
    //     this.getAllPlacesFromAPI().subscribe((data)=>{
    //         //console.log(data)
    //         this.places=data;
    //     });
        
        //return this.places;
    //}

    httpRequest(date,source,destination):Observable<any>
    {
     return this.myHttp.get("https://localhost:44381/api/SearchFlight?date="+date+"&source="+source+
      "&destination="+destination)
      
    }
} 