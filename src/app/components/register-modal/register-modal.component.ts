import { AppComponent } from 'src/app/app.component';
import { UserService } from 'src/app/services/user.service';
import { ClientMessage } from './../../models/client-message';
import { Component} from '@angular/core';
import { User } from 'src/app/models/users';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.css']
})
export class RegisterModalComponent {

  user: User = new User(0, "", "", "");
  clientMessage: ClientMessage = new ClientMessage('');

  constructor(private userService: UserService, public appComponent: AppComponent) { }

  printUser() {

    console.log(this.user);
    this.closePopup();
  }


  openPopup() {

    this.appComponent.registerModalVisibility = "block";

  }

  closePopup() {

    this.appComponent.registerModalVisibility = "none"

  }

  registerUser(): void {

    this.userService.registerUser(this.user)
    .subscribe(
      data => this.clientMessage.message = `Successfully registered ${data.username}, you may now log in!`,
      error => this.clientMessage.message = `Unable to register. Check that all constraints have been met.`
    )


  }

  findAllUsers(): void {
    console.log(this.userService.findAllUsers());
  }

}
