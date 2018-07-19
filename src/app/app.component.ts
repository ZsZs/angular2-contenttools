import { Component } from '@angular/core';
import { ContenttoolsComponent} from 'angular2-contenttools';

@Component({
  selector: 'pp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ContentTools';
  contentTools: ContenttoolsComponent = new ContenttoolsComponent();

  greeting(): string {
    return this.contentTools.greeting;
  }
}
