import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  result: any;
  constructor(private data: LoginService) { }
  ngOnInit(): void {
  }

  submitKey(key: string) {
    this.data.loginSearch(key).subscribe(res => {
      this.result = res;
      this.data.tableStore.next(this.result);
    }
    );
  }

}
