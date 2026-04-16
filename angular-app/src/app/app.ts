import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Board } from "./component/board/board/board";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Board],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
