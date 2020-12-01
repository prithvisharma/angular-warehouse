import { ProductService } from './../../product/product.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AccumulationChartComponent } from '@syncfusion/ej2-angular-charts/src/accumulation-chart/accumulationchart.component';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent implements OnInit {
  @ViewChild("accumulationChart", { static: true }) accumulationChart: AccumulationChartComponent;

  public tooltipSettings: Object;

  @Input()
  public data: Object[];

  palette: string[]; //color

  //Initializing Legend
  public legendSettings: Object = {
    visible: true,
  };
  //Initializing DataLabel
  public dataLabel: Object = {
    visible: true,
    name: 'text',
    position: 'Inside',
    font: {
      size: '0px',
      fontWeight: '1600',
      color: '#94405D'
    },
    template: '<div>${point.y}</div>'
  };


  // custom code end
  public tooltip: Object = { enable: true };
  public title: string = 'Product Statistics: Donut Chart';


  constructor(private productService: ProductService,
    private route: Router) { }


  ngOnInit(): void {

    this.accumulationChart.title = "Product Statistics: Donut Chart";
    this.tooltipSettings = {
      enable: true,
      format: '${point.x}:<b>${point.y}</b>'
    }
    this.accumulationChart.tooltip.header = 'Product Info';
    this.accumulationChart.width = '80%';
    this.accumulationChart.height = '70%';

    this.accumulationChart.margin.left = 0;
    this.accumulationChart.pointClick.subscribe(
      data => {
        this.productService.setCategory(data.point.x);
        this.route.navigateByUrl('/product/', data.point.x)
      }
    )

    this.palette = ['#E599F7', '#E9679B', '#80B5FE', '#FFDE79', '#91E19F'];
  }

}
