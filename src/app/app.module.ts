// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Third party components
import { MaterializeModule } from 'angular2-materialize';

// ProcessPuzzle components
import { AppComponent } from './app.component';
import { ContenttoolsModule } from 'angular2-contenttools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ContenttoolsModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
