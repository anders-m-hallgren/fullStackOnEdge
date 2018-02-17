import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TableComponent } from './table.component';
import { TableService } from './table.service';

@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule
  ],
  declarations: [TableComponent],
  exports: [TableComponent],
  providers: [TableService]
})
export class TableModule { }
