import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  styleUrls: ['contact.css']
})
export class ContactPage {
  gender: string;
  CombHeight: number;
  HeightFt: number;
  HeightIn: number;
  WRob: number;
  WMil: number;
  WHam: number;
  WDev: number;
  Fmsg: string;

  constructor(public navCtrl: NavController) {}

  Compute(){
    this.CombHeight = ((this.HeightFt*12)-60) + this.HeightIn;
    
      if (this.gender == "m") {
        
        if (this.CombHeight <= 0){
          this.WRob = 52.00
          this.WMil = 56.20
          this.WHam = 48.00
          this.WDev = 50.00;


        } else {

          this.WRob = 52.00 + ((this.HeightFt-5)*12*1.9) + (this.HeightIn*1.9)
            this.WRob = parseFloat(this.WRob.toFixed(2));
            
          this.WMil = 56.20 + ((this.HeightFt-5)*12*1.41) + (this.HeightIn*1.41)
            this.WMil = parseFloat(this.WMil.toFixed(2));

          this.WHam = 48.00 + ((this.HeightFt-5)*12*2.70) + (this.HeightIn*2.70)
            this.WHam = parseFloat(this.WHam.toFixed(2));

          this.WDev = 50.00 + ((this.HeightFt-5)*12*2.30) + (this.HeightIn*2.30)
            this.WDev = parseFloat(this.WDev.toFixed(2));
        }

      } else if (this.gender == "f") {
        
        if (this.CombHeight <= 0){
          this.WRob = 49.00
          this.WMil = 53.10
          this.WHam = 45.50
          this.WDev = 45.50;

        } else{
          
          this.WRob = 49.00 + ((this.HeightFt-5)*12*1.7) + (this.HeightIn*1.7)
            this.WRob = parseFloat(this.WRob.toFixed(2));

          this.WMil = 53.10 + ((this.HeightFt-5)*12*1.36) + (this.HeightIn*1.36)
            this.WMil = parseFloat(this.WMil.toFixed(2));

          this.WHam = 45.50 + ((this.HeightFt-5)*12*2.2) + (this.HeightIn*2.2)
            this.WHam = parseFloat(this.WHam.toFixed(2));

          this.WDev = 45.50 + ((this.HeightFt-5)*12*2.3) + (this.HeightIn*2.3)
            this.WDev = parseFloat(this.WDev.toFixed(2));
        }

      }else {}
    }
    
}
