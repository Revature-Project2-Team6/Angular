import { AppComponent } from 'src/app/app.component';
import { RegisterModalComponent } from './../register-modal/register-modal.component';
import { Component} from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {


  constructor(public appComponent: AppComponent) { }


  showModal() {
    this.appComponent.registerModalVisibility = "block" 
  }



}
