import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'doc-main',
  template: `
    <p>
      ContentTools works!
    </p>
  `,
  styles: []
})
export class ContenttoolsComponent implements OnInit {
  greeting = 'Hello World';
  constructor() { }

  ngOnInit() {
  }

}
