import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public appComponent: AppComponent) { }

  ngOnInit(): void {
  }

  logOut() {
    if (this.appComponent.isLoggedIn && sessionStorage.getItem("token")) {
      sessionStorage.removeItem("token");
      this.appComponent.isLoggedIn = false;
    }
  }

}
