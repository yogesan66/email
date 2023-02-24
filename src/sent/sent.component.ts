import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from '../app/employee';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.css'],
})
export class SentComponent implements AfterViewInit {


  constructor(private service: TransferService) {}
  ngOnInit(): void {
    // console.log('in sent component')
    // this.storage_list = this.service.getData();
    // console.log("datasource",this.dataSource)

    // this.dataSource = this.data_list

    // console.log('storage list',this.storage_list)
  }

  ngDoCheck() {
    this.storage_list = this.service.getData();
    console.log('storage list', this.storage_list);
    this.dataSource = this.storage_list
    console.log("datasource",this.dataSource)

  }
  storage_list = [];
  public dataSource;

  // displayedColumns: string[] = [
  //   'Subject',
  //   'details',
  //   'date'
  // ];

  // EmpData: Employee[] = [
  //   {
  //    Subject:'one',
  //    details:'gghj',
  //    date:'kkk'
  //   },
  //   {
  //     Subject:'two',
  //     details:'gghj',
  //     date:'kkk'
  //    },{
  //     Subject:'three',
  //     details:'gghj',
  //     date:'kkk'
  //    }
  // ]

  regarding ='';
  from = '';
  details=''
  to =''
  cc =''
  date =''
  getdata(data:any){
    console.log('data====>',data)
    this.regarding = data.subject
    this.to = data.to
    this.details = data.message
    this.from = data.from
    this.cc = data.cc
    this.date = data.date
  }

  // dataSource = new MatTableDataSource(this.EmpData);
  dataSourceWithPageSize = new MatTableDataSource(this.storage_list);

  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('paginatorPageSize') paginatorPageSize: MatPaginator;

  pageSizes = [5, 10, 20];

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSourceWithPageSize.paginator = this.paginatorPageSize;
    this.dataSource.paginator = this.paginator;

  }

  displayedColumns: any[] = [
    'subject',
    'message',
    'date',

  ];
  // dataSource = new MatTableDataSource(this.storage_list);

  // clickedRows = new Set<PeriodicElement>();

  // @ViewChild(MatPaginator) paginator: MatPaginator;

  // ngAfterViewInit() {
  //   this.storage_list = this.service.getData();
  //   console.log('storage list', this.storage_list);
    // this.dataSource.paginator = this.paginator;
  // }
  // data_list:PeriodicElement[] = this.storage_list
  // dataSource = this.data_list

}

interface PeriodicElement {
  from:string;
       to:string;
       cc:string;
       bc:string;
       subject:string;
       file:string;
       message:string;
       date:string;
}

// const ELEMENT_DATA: PeriodicElement[] = this.storage_list
