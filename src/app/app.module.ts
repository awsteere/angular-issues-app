import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { IssuesComponent } from './issues/issues.component';
import { TruncateTextPipe } from './truncate-text.pipe';

@NgModule({
  declarations: [
    AppComponent,
    IssuesComponent,
    TruncateTextPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
