import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-data-table-demo',
  templateUrl: './data-table-demo.component.html',
  styleUrls: ['./data-table-demo.component.css']
})
export class DataTableDemoComponent implements OnInit {
  posts: any;
  @ViewChild(DataTableDirective, {
    static: false
  })
  dtElement!: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  filters = {
    search: ''
  }
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient) {
    this.filters = {
      search: ''
    };
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
   }

  ngOnInit(): void {

    this.http.get('http://jsonplaceholder.typicode.com/posts')
      .subscribe(posts => {
        this.posts = posts;
      });

  }
}
