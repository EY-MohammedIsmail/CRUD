import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUD';

  constructor(http:HttpClientModule){

    http.get('https://jsonplaceholder.typicode.com/posts');

  }
}
