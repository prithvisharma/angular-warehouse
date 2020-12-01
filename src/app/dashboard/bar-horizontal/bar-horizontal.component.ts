import { Input, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ChartComponent, ILoadedEventArgs } from '@syncfusion/ej2-angular-charts';

@Component({
  selector: 'dashboard-bar-horizontal',
  templateUrl: './bar-horizontal.component.html',
  styleUrls: ['./bar-horizontal.component.css']
})
export class BarHorizontalComponent implements OnInit {

  @ViewChild("chart", { static: true }) chart: ChartComponent;

  @Input()
  data: Object[];

  palette: string[];

  //Initializing Primary X Axis
  public primaryXAxis: Object = {
    valueType: 'Category',
    majorGridLines: { width: 0 }
  };
  //Initializing Primary Y Axis
  public primaryYAxis: Object = {
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
    labelFormat: '{value}',
    edgeLabelPlacement: 'Shift'
  };
  public tooltip: Object = {
    enable: true
  };

  //Initializing Marker
  public marker: Object = {
    dataLabel: {
      visible: true,
      position: 'Top',
      font: {
        fontWeight: '600', color: '#ffffff'
      }
    }
  }


  // custom code start
  public load(args: ILoadedEventArgs): void {
  };
  // custom code end
  public title: string = 'Product Statistics: Bar Chart (Horizontal)';
  public chartArea: Object = {
    border: {
      width: 0
    }
  };

  constructor() { }

  ngOnInit(): void {
    this.chart.theme = 'Bootstrap4';
    this.chart.height = '60%';
    this.chart.width = '60%;'
    this.chart.pointClick.subscribe(
      data => {
        let point = data.pointIndex;
        let series = data.seriesIndex;
        console.log(point + ' ' + series);
      }
    );

    this.palette = ['#92E2A0', '#E9679B'];
  }
}
