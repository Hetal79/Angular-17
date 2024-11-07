import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestComponent, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // encapsulation:ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'Angular_17';
  age =25
  name = 'DIya'
}
