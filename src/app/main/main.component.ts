import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {


  constructor(private router: Router) {}
  isActive(route: string): boolean {
    return this.router.url === route;
  }

}
