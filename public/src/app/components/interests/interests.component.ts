import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ApiService } from 'src/app/services/api.service';
import { Interest } from 'src/app/models/interest';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {
  constructor(private apiService: ApiService) {
  }

  interests: Interest[] = [];
  displayedColumns: string[] = ['id', 'username', 'origin', 'destination', 'date'];
  dataSource = new MatTableDataSource(this.interests);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.apiService.getInterests().subscribe((data: Interest[]) => {
      data.forEach(element => {
        this.interests.push(element)
      });
      this.dataSource = new MatTableDataSource(this.interests);
      this.dataSource.paginator = this.paginator;
    });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
