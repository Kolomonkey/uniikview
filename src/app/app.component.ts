import { Component, Input } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  links = [
    {path: '/home', icon: 'home', label: 'Home'},
    {path: '/products', icon: 'view_quilt', label: 'Products'}
  ];
  constructor() {}

  ngOnInit() {
  }

}
