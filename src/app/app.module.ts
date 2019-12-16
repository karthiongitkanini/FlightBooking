import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import{Route,RouterModule} from '@angular/router';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { SearchPageComponent } from './search-page/search-page.component';
import { FlightService } from 'src/services/flight.sevice';
import { DisplayflightsearchComponent } from './displayflightsearch/displayflightsearch.component';
import { DefaultComponent } from './default/default.component';
import { PopupComponent } from './popup/popup.component';
import { RegisterComponent } from './register/register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { LoginService } from 'src/services/login.service';
import { RegistrationService } from 'src/services/registration.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SendEmailComponent } from './send-email/send-email.component';
import { AddPassengerComponent } from './add-passenger/add-passenger.component';
     
const myRoutes:Route[]=[
                         {path:'displaysearchpage',component:DisplayflightsearchComponent},
                         {path:'displayAfterBooknow',component:DisplayflightsearchComponent},
                         //{path:'userLogin',component:UserLoginComponent},
                         {path:'register',component:RegisterComponent},
                        {path:'Home',component:SearchPageComponent},
                        {path:'ForgotPassword',component:SendEmailComponent},
                        // {path:'addPassenger',component:AddPassengerComponent},
                        {path:'**',component:UserLoginComponent}
                       ]

@NgModule({
  declarations: [
    AppComponent,
    DisplayflightsearchComponent,
    SearchPageComponent,
    DefaultComponent,
    PopupComponent,
    RegisterComponent,
    UserLoginComponent,
    SendEmailComponent,
    AddPassengerComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(myRoutes),
    AngularMaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,

    ],
    entryComponents:[PopupComponent],
  providers: [FlightService,LoginService,RegistrationService],
  
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }


 