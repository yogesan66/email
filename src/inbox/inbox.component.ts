import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from '../app/employee';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  displayedColumns: string[] = [
    'Subject',
    'details',
    'date'
  ];

  EmpData: Employee[] = [
    {
     Subject:'hjjjj',
     details:'gghj',
     date:'kkk'
    },
    {
      Subject:'hjjjj',
      details:'gghj',
      date:'kkk'
     },{
      Subject:'hjjjj',
      details:'gghj',
      date:'kkk'
     }
  ]
    
  dataSource = new MatTableDataSource(this.EmpData);
  dataSourceWithPageSize = new MatTableDataSource(this.EmpData);

  constructor() {}
ngOnInit(): void {

}

  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('paginatorPageSize') paginatorPageSize: MatPaginator;

  pageSizes = [3, 5, 7];

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSourceWithPageSize.paginator = this.paginatorPageSize;
  }

}