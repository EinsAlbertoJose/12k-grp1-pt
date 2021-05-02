import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  gender: string;
  CombHeight: number;
  HeightFt: number;
  HeightIn: number;
  FactHeight: number;
  WRob: number;
  WMil: number;
  WHam: number;
  WDev: number;
  Fmsg: string;

  constructor(public navCtrl: NavController) {}

  Weight(){
    
    this.CombHeight = (this.HeightFt*12) + this.HeightIn;
    this.WRob =parseFloat(this.WRob.toFixed(2));
    this.WMil =parseFloat(this.WMil.toFixed(2));
    this.WHam =parseFloat(this.WHam.toFixed(2));
    this.WDev =parseFloat(this.WDev.toFixed(2));
    
      if (this.gender = "m") {
        
        if (this.CombHeight <= 60){
          this.WRob = 52.00
          this.WMil = 56.20
          this.WHam = 48.00
          this.WDev = 50.00

        } else{
          this.FactHeight = this.CombHeight - 60
          
          this.WRob = 52.00 + (this.FactHeight*1.90)
          this.WMil = 56.20 + (this.FactHeight*1.41)
          this.WHam = 48.00 + (this.FactHeight*2.70)
          this.WDev = 50.00 + (this.FactHeight*2.30)
        }

      } else if (this.gender= "f") {
        
        if (this.CombHeight <= 60){
          this.WRob = 49.00
          this.WMil = 53.10
          this.WHam = 45.50
          this.WDev = 45.50

        } else{
          this.FactHeight = this.CombHeight - 60
          
          this.WRob = 49.00 + (this.FactHeight*1.70)
          this.WMil = 53.10 + (this.FactHeight*1.36)
          this.WHam = 45.50 + (this.FactHeight*2.20)
          this.WDev = 45.50 + (this.FactHeight*2.30)
        }

      }else {
        this.Fmsg = "Kindly Input Your Gender & Height"
      }
    }
    
}
