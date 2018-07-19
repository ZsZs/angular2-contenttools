import { AfterViewInit, Component, OnDestroy, OnChanges } from '@angular/core';
import { ContentEditor } from './content-editor';

@Component({
  selector: 'content-tools',
  template: `
    <div #contenttools class="content-tools">
      <ng-content></ng-content>
    </div>'
  `,
  styles: []
})

export class ContentToolsComponent  implements AfterViewInit, OnDestroy, OnChanges {

  constructor( private editor: ContentEditor ) {}

  ngAfterViewInit() {
    this.editor.initialize();
  }

  ngOnChanges() {
  }

  ngOnDestroy() {
    this.editor.destroy();
  }
}
