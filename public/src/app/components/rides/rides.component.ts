import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ApiService } from 'src/app/services/api.service';
import { Ride } from 'src/app/models/ride';


@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.css']
})
export class RidesComponent implements OnInit {
  constructor(private apiService: ApiService) {
  }

  rides: Ride[] = [];
  displayedColumns: string[] = ['id', 'username', 'origin', 'destination', 'date', 'seats'];
  dataSource = new MatTableDataSource(this.rides);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.apiService.getRides().subscribe((data: Ride[]) => {
      data.forEach(element => {
        this.rides.push(element)
      });
      this.dataSource = new MatTableDataSource(this.rides);
      this.dataSource.paginator = this.paginator;
    });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
