import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
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
    console.log('am results ', this.data.tableStore.value)
    this.data.tableStore.subscribe(res=> {
      console.log('result subs', res)
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


}
