import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { User } from 'src/app/models/users';

@Component({
  selector: 'app-info-menu',
  templateUrl: './info-menu.component.html',
  styleUrls: ['./info-menu.component.css']
})
export class InfoMenuComponent implements OnInit {

  user = new User(0, "", "", "");
  // characters: Character[] = [];

  constructor(public appComponent: AppComponent, public uServ: UserService) { }

  ngOnInit(): void {
    this.uServ.getUserById(this.appComponent.userId).subscribe(
      (response) => {
        this.user = response;
      }
    );
  }

}
