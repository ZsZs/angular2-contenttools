import { NgModule } from '@angular/core';
import { ContentToolsComponent } from './content-tools.component';
import { ContentEditor } from './content-editor';

@NgModule({
  imports: [],
  declarations: [ ContentToolsComponent ],
  exports: [ ContentToolsComponent],
  providers: [ ContentEditor ],
})
export class ContentToolsModule { }
