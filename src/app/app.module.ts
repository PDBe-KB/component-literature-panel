import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LiteratureComponent } from './literature/literature.component';
import { CsvExporterComponent } from './csv-exporter/csv-exporter.component';

@NgModule({
  declarations: [
    AppComponent,
    LiteratureComponent,
    CsvExporterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
