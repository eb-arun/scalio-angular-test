import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  result: any;
  error: any = false;
  errorLable = 'Enter login';
  repeatLable = 'Try different keyword';
  errorText: any;
  constructor(private data: LoginService) { }
  ngOnInit(): void {
  }

  submitKey(key: string) {
    if (key != this.data.searchKey.value) {
      this.error = false;
      this.data.searchKey.next(key);
      this.data.loginSearch(key).subscribe(res => {
        this.result = res;
        this.data.tableStore.next(this.result);
      }
      );
    } else if (key == '') {
      this.error = true;
      this.errorText = this.errorLable
    } else {
      this.error = true;
      this.errorText = this.repeatLable
    }


  }

}
