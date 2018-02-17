import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { columns, rows } from './data';
import { TableService } from './table.service';
import { Data } from './iData';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class TableComponent implements OnInit {
  rows: Data[];
  /*
  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane', age: 35 },
    { name: 'Dany', gender: 'Male', company: 'KFC', age: 50 },
    { name: 'Molly', gender: 'Female', company: 'Burger King', age: 45 },
  ];
  */
  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];

  constructor(private _svc: TableService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this._svc.getData().subscribe(data => this.rows = data);
  }

  getCellClass({ row, column, value }): any {
    return {
      'is-female': value === 'female'
    };
  }

  getRowClass(row) {
    return {
      'age-is-ten': (row.age % 10) === 0
    };
  }

}
