import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-csv-exporter',
  template: '<html></html>',
  styles: ['']
})
export class CsvExporterComponent {
  @Input() data: any;
  @Input() optionalData: any;
  @Input() accession: string;
  @Input() section: string;
  @Input() category: string;
}
