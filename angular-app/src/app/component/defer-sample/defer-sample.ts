import { Component } from '@angular/core';
import { HelloWorld } from '../shared/ui/hello-world/hello-world';

@Component({
  selector: 'app-defer-sample',
  imports: [HelloWorld],
  templateUrl: './defer-sample.html',
  styleUrl: './defer-sample.css',
})
export class DeferSample {}
