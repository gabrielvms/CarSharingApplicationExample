import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Ride } from 'src/app/models/ride';
import { Interest } from 'src/app/models/interest';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  public avaliableRides: Ride[] = []
  public avaliablePassengers: Interest[] = []

  ngOnInit(): void {
    this.apiService
    .getServerSentEvent()
    .subscribe(event => {
      this.avaliableRides = JSON.parse(event.data).rides;
      this.avaliablePassengers = JSON.parse(event.data).interests;
    });
  }

}
