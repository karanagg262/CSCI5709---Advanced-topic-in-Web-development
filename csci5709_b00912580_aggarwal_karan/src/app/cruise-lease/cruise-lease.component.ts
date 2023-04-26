import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cruise-lease',
  templateUrl: './cruise-lease.component.html',
  styleUrls: ['./cruise-lease.component.css']
})
export class CruiseLeaseComponent implements OnInit {

  id = "";
  cruisename = "";
  year = "";
  model = "";
  capacity = "";
  rooms = "";
  fromavailability = "";
  toavailability = "";
  firstname="";
  lastname="";
  email="";
  phone="";
  companyname="";
  rnumber="";
  editmydetails = false;
  idFail = false;
  cruisenameFail = false;
  yearFail = false;
  modelFail = false;
  capacityFail = false;
  roomsFail = false;
  fromAvailabilitFail = false;
  toavailabilityFail = false;
  firstnameFail = false;
  lastnameFail = false;
  emailFail = false;
  phoneFail = false;
  cruiseIdError = "Please enter the Cruise ID."

  constructor(private readonly router: Router) { }

  ngOnInit() {
  }
  onSubmit(f: NgForm) {
    this.refreshErrorPage();
    
    if(this.cruisename.length<1){
      this.cruisenameFail = true;
    }
    if(this.year.length<1){
      this.yearFail = true;
    }    
    if(this.model.length<1){
      this.modelFail = true;
    }
    if(this.capacity.length<1){
      this.capacityFail = true;
    }
    if(this.rooms.length<1){
      this.roomsFail = true;
    }
    if(this.fromavailability.length<1){
      this.fromAvailabilitFail = true;
    }
    if(this.toavailability.length<1){
      this.toavailabilityFail = true;
    }
    if(this.firstname.length<1){
      this.firstnameFail = true;
    }
    if(this.lastname.length<1){
      this.lastnameFail = true;
    }
    if(this.email.length<1){
      this.emailFail = true;
    }
    if(this.phone.length<1){
      this.phoneFail = true;
    }


    if(this.editmydetails && !this.fromAvailabilitFail && !this.toavailabilityFail){
      this.router.navigate(['/update']);
    }
    else if(!this.cruisenameFail && !this.yearFail &&  !this.modelFail && !this.capacityFail && 
      !this.roomsFail && !this.fromAvailabilitFail && !this.toavailabilityFail && !this.firstnameFail && !this.lastnameFail && 
      !this.emailFail && !this.phoneFail){
      this.router.navigate(['/confirmation']);
    }
    
  }
  
  onSubmitlease() {
    this.idFail = false;
    this.refreshErrorPage();
    if(this.id.length<1){
      this.idFail = true;
      this.cruiseIdError = "Please enter the Cruise ID."
    }
    else if(this.id.length < 6){
      this.idFail = true;
      this.cruiseIdError = "Please enter correct ID. (It is atleast 6 character long ID)"
    }
    if(this.id && !this.idFail){
      this.dummyData();
    }
  }

  onCancel(){
    this.router.navigate(['/cancel']);
  }

  refreshErrorPage(){
    this.cruisenameFail = false;
    this.yearFail = false;
    this.modelFail = false;
    this.capacityFail = false;
    this.roomsFail = false;
    this.fromAvailabilitFail = false;
    this.toavailabilityFail = false;
    this.firstnameFail = false;
    this.lastnameFail = false;
    this.emailFail = false;
    this.phoneFail = false;
  }

  dummyData(){
    this.idFail = false;
    this.cruisename = "Carnival";
    this.year = "1991";
    this.model = "BXK23SW33345";
    this.capacity = "156";
    this.rooms = "30";
    this.fromavailability = "";
    this.toavailability = "";
    this.firstname="Micky";
    this.lastname="Arison";
    this.email="mickyarison@carnival.com";
    this.phone="782 882 9876";
    this.companyname="Carnival Corporation";
    this.rnumber="BNDAI332NDJ22233223";
    this.editmydetails = true;
  }

  checkAlphanumeric(event: any){
    if((event.keyCode>47 && event.keyCode<58)||(event.keyCode>64 && event.keyCode<91)||(event.keyCode>96 && event.keyCode<123)){
      return true;
    }
    return false;
  }
  checkNumeric(event: any){
    if(event.keyCode>47 && event.keyCode<58){
      return true;
    }
    return false;
  }
  checkAlpha(event: any){
    if((event.keyCode>64 && event.keyCode<91)||(event.keyCode>96 && event.keyCode<123)){
      return true;
    }
    return false;
  }

}
