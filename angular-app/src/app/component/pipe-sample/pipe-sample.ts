import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-sample',
  imports: [CurrencyPipe, DatePipe, TitleCasePipe],
  templateUrl: './pipe-sample.html',
  styleUrl: './pipe-sample.css',
})
export class PipeSample {
  amount = 123.45;
  company = 'acme corporation';
  purchasedOn = '2024-07-08';
}
