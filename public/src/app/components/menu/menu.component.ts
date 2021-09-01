import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private app: AppComponent) { }
  user: User = { username: '', phone: '' }


  ngOnInit(): void {
    this.user = this.app.getUser()
  }

}
