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
  errorMsg = "";

  constructor(public appComponent: AppComponent, public authServ: AuthService) { }


  showModal() {
    this.appComponent.registerModalVisibility = "block"
  }

  showGalaxy() {
    this.appComponent.isGalaxyLoaded = true;
  }


  logIn(): void {
    this.authServ.login(this.user.username, this.user.password).subscribe(
      (response) => {
        console.log(response.headers);
        const token = response.headers.get("auth-token");
        sessionStorage.setItem("token", token);

        this.appComponent.isLoggedIn = true;

        this.user.username = "";
        this.user.password = "";

        const id = response.headers.get("user-id");
        this.appComponent.userId = id;
      },
      (error) => {
        this.errorMsg = "Login failed. Please try again."
        this.user.password = "";
      }
    )
  }
}
