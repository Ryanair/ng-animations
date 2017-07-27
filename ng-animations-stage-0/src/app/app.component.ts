import { Component } from '@angular/core';
import { Hero } from '../hero-list/hero/hero.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Angular Animations';

  public heroes: Hero[] = [];
}
