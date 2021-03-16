import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LiteratureComponent} from './literature.component';
import {PublicationList} from './literature.models';
import {CsvExporterComponent} from '../csv-exporter/csv-exporter.component';
import {MOCK_DATA} from '../../assets/mockData';


describe('LiteratureComponent', () => {
  let component: LiteratureComponent;
  let fixture: ComponentFixture<LiteratureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LiteratureComponent, CsvExporterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiteratureComponent);
    component = fixture.componentInstance;
    component.data = MOCK_DATA;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('showOrCollapse() should work', () => {
    component.collapsed = false;
    component.showOrCollapse();
    expect(component.collapsed).toBeTruthy();
  });

  it('setPaginationOffset() should work', () => {
    component.paginationOffset = 1;
    component.setPaginationOffset(-2);
    expect(component.paginationOffset).toBe(0);
    component.pagination = [1, 2, 3];
    component.paginationOffset = 0;
    component.setPaginationOffset(1);
    expect(component.paginationOffset).toBe(1);
    component.paginationOffset = 0;
    component.setPaginationOffset(1000);
    expect(component.paginationOffset).toBe(0);
  });

  it('showPage() should work', () => {
    component.paginationOffset = 5;
    component.paginationButtonLimit = 10;
    expect(component.showPage(10)).toBeTruthy();
    expect(component.showPage(4)).toBeFalsy();
    component.paginationButtonLimit = 1;
    expect(component.showPage(10)).toBeFalsy();
  });

  it('setPage() should work', () => {
    component.currentPageIndex = 0;
    component.setPage(42);
    expect(component.currentPageIndex).toBe(42);
  });

  it('sortByYear() should work', () => {
    component.sortedBy = 'foo';
    component.sortByYear();
    expect(component.sortedBy).toBe('desc_year');
    expect(component.sortedPublications[0].year).toBe(2017);
  });

  it('showPublication() should work', () => {
    component.currentPageIndex = 2;
    expect(component.showPublication(70, 30)).toBeTruthy();
    expect(component.showPublication(90, 30)).toBeFalsy();
    expect(component.showPublication(10, 30)).toBeFalsy();
  });

  it('checkSortClass() should work', () => {
    component.sortedBy = 'foo';
    expect(component.checkSortClass('foo')).toBe('active');
    expect(component.checkSortClass('bar')).toBeFalsy();
  });

  it('checkActivePage() should work', () => {
    component.currentPageIndex = 0;
    expect(component.checkActivePage(0)).toBe('activeButton');
    expect(component.checkActivePage(1)).toBeFalsy();
  });

  it('createPagination() should work', () => {
    component.createPagination();
    expect(component.pagination.length).toBe(2);
  });

});
