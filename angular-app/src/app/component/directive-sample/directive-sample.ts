import { Component } from '@angular/core';
import { HighlightAttributeDirective } from '../shared/directive/highlight-attribute-directive';
import { SelectStructuralDirective } from '../shared/directive/select-structural-directive';
import { DataSource } from '../shared/model/Types';
import { CdkNoDataRow } from '@angular/cdk/table';

@Component({
  selector: 'app-directive-sample',
  imports: [HighlightAttributeDirective, SelectStructuralDirective],
  templateUrl: './directive-sample.html',
  styleUrl: './directive-sample.css',
})
export class DirectiveSample {
  myDatasource: DataSource<unknown> = { load: async () => null };
  myDatasource2: DataSource<unknown> = { load: async () => ['item1', 'item2', 'item3'] };
  myDatasource3: DataSource<unknown> = { load: async () => ['item4', 'item5', 'item6'] };
}
