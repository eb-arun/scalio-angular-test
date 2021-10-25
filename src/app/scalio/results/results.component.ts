import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  displayedColumns: string[] = ['avatar_url', 'login', 'type'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator, {static:false}) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  tableDataSource:any;
  resultsLength:number = 0;
  pageEvent:PageEvent = new PageEvent();
  constructor(private data:LoginService) { 
    this.data.tableStore.subscribe(res=>{
      this.tableDataSource = res;
      this.resultsLength = this.tableDataSource.total_count;
      this.dataSource = new MatTableDataSource(this.tableDataSource.items);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
    
  }

  ngOnInit(): void {
    this.pageEvent.pageSize = 9;
    this.pageEvent.pageIndex = 0;
    console.log('am results ', this.data.tableStore.value)
    this.data.tableStore.subscribe(res=> {
      console.log('result subs', res)
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onPagination(data:PageEvent) {
    this.pageEvent = data;
    this.data.loginSearch(this.data.searchKey.value, data.pageSize, data.pageIndex+1).subscribe(res=> {
      this.dataSource = new MatTableDataSource(res.items);
      this.dataSource.sort = this.sort;
    })
    console.log('event', data);                                                                  
    console.log('paginator', this.paginator.getNumberOfPages())
  }


}
