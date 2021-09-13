import { Component } from '@angular/core';


@Component({
  selector: 'got-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title= 'Game of Thrones Characters';
  links= [
    {path: '', icon: 'home', title: 'Home'},
    {path: 'characters', icon: 'view_list', title: 'Game of Thrones Characters'}
  ]
}
