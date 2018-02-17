import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Data } from './iData';
import { ChartService } from './chart.service';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class ChartComponent implements OnInit {
  DataSeries: Data[];

  view: any[] = [500, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Cloud provider';
  showYAxisLabel = true;
  yAxisLabel = 'Service Latency';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;
  constructor(private _svc: ChartService) {
    //Object.assign(this, {single, multi})
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this._svc.getData().subscribe(data => 
      {
        this.DataSeries = data;
        console.log(this.DataSeries);
      });
  }

  onSelect(event) {
    console.log(event);
  }

}
