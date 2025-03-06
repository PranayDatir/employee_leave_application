import { Component } from '@angular/core';
import { SpinnerComponent } from "../../shared/spinner/spinner.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SpinnerComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
