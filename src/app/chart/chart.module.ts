import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule} from '@swimlane/ngx-charts';
import { ChartComponent } from './chart.component';
import { ChartService } from './chart.service';

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule
  ],
  declarations: [ChartComponent],
  exports: [ChartComponent],
  providers: [ChartService]
})
export class ChartModule { }
