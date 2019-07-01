import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'harri-io';

  cards = [
    { name: 'awesome', content: 'lorem ipsum doler', height: '150px' },
    { name: 'awesome', content: 'lorem ipsum doler', height: '300px' },
    // { name: 'awesome', content: 'lorem ipsum doler', height: 400 },
    {
      name: 'awesome',
      content: `
    lorem ipsum doler 
    lorem ipsum doler 
    lorem ipsum doler 
    lorem ipsum doler 
    lorem ipsum doler 
    lorem ipsum doler 
    lorem ipsum doler 

    ${this.title}
    `,
      height: 'fit-content'
    }
  ];
}
