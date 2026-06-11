import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { CustomPipePipe } from '../shared/pipe/custom-pipe-pipe';

@Component({
  selector: 'app-pipe-sample',
  imports: [CurrencyPipe, DatePipe, TitleCasePipe, CustomPipePipe],
  templateUrl: './pipe-sample.html',
  styleUrl: './pipe-sample.css',
})
export class PipeSample {
  amount = 123.45;
  company = 'acme corporation';
  purchasedOn = '2024-07-08';
}
