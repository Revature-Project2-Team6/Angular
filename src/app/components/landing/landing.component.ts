import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ClientMessage } from 'src/app/models/client-message';
import { User } from 'src/app/models/users';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/app/services/auth.service';
import { RegisterModalComponent } from './../register-modal/register-modal.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  user = new User(0, "", "", "");

  constructor(public appComponent: AppComponent, public authServ: AuthService) { }


  showModal() {
    this.appComponent.registerModalVisibility = "block"
  }

  logIn(): void {
    this.authServ.login(this.user.username, this.user.password).subscribe(
      (response) => {
        const token = response.headers.get("auth-token");
        sessionStorage.setItem("token", token);

        this.appComponent.isLoggedIn = true;

        this.user.username = "";
        this.user.password = "";
      },
      (error) => {
        this.user.password = "";
      }
    )
  }
}
