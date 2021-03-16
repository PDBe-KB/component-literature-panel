import {Component, AfterContentChecked, Input} from '@angular/core';
import {Publication, PublicationList} from './literature.models';


@Component({
  selector: 'app-literature',
  templateUrl: './literature.component.html',
  styleUrls: ['./literature.component.css']
})
export class LiteratureComponent implements AfterContentChecked {

  @Input() data: PublicationList;
  @Input() accession: string;
  @Input() pdbList: string[];
  sortedPublications: Publication[];
  sortedBy: string;
  collapsed: boolean;
  paginationButtonLimit: number;
  pagination: number[];
  paginationOffset: number;
  currentPageIndex: number;
  authorLimit: number;

  constructor() {
    this.collapsed = false;
    this.paginationButtonLimit = 4;
    this.pagination = [];
    this.paginationOffset = 0;
    this.currentPageIndex = 0;
    this.authorLimit = 5;
  }

  ngAfterContentChecked() {
    this.createPagination();
  }

  showOrCollapse() {
    if (this.collapsed) {
      this.createPagination();
      this.sortByYear();
    }
    this.collapsed = !this.collapsed;
  }

  setPaginationOffset(i: number) {
    if (this.paginationOffset + i < 0) {
      this.paginationOffset = 0;
      return;
    }
    if (this.paginationOffset + i > this.pagination.length) {
      return;
    } else {
      this.paginationOffset += i;
      this.currentPageIndex += i;
    }
  }

  showPage(i: number) {
    return i - this.paginationOffset >= 0 && i - this.paginationOffset <= this.paginationButtonLimit - 1;
  }

  setPage(i: number) {
    this.currentPageIndex = i;
  }

  sortByYear() {
    this.sortedPublications = this.data.publications;

    this.sortedPublications.sort((a, b) => {
      if (a.year > b.year) {
        return -1;
      }
      if (a.year < b.year) {
        return 1;
      }
      return 0;
    });
    this.sortedBy = 'desc_year';

    return this.sortedPublications;
  }

  showPublication(i: number, limit: number) {
    return i >= (this.currentPageIndex * limit) && i < limit + (this.currentPageIndex * limit);
  }

  checkSortClass(sortingClass: string) {
    if (sortingClass === this.sortedBy) {
      return 'active';
    }
  }

  checkActivePage(pageIndex: number) {
    if (pageIndex === this.currentPageIndex) {
      return 'activeButton';
    }
  }

  createPagination() {
    this.pagination = [];
    let counter = 0;
    for (let i = 0; i < this.data.publications.length; i++) {
      if (i === 0 || i % this.data.show_limit === 0) {
        counter++;
        this.pagination.push(counter);
      }
    }
  }

  limitAuthorList(authors: string) {
    const limitedAuthorList = [];
    const splittedAuthorList = authors.split(',');
    for (let i = 0; i < splittedAuthorList.length; i++) {
      limitedAuthorList.push(splittedAuthorList[i]);
      if (i === this.authorLimit - 1) {
        return limitedAuthorList.join(',') + ' et al.';
      }
    }
    return limitedAuthorList.join(',');
  }
}


