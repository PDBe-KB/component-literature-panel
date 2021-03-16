import {Component} from '@angular/core';
import {PublicationList} from "./literature/literature.models";
import {MOCK_DATA} from "../assets/mockData";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  accession: string;
  publicationData: PublicationList;

  constructor() {
    this.accession = 'Q14676';
    this.publicationData = MOCK_DATA;
  }
}
