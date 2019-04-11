import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesListingComponent } from './notes-listing.component';

describe('NotesListingComponent', () => {
  let component: NotesListingComponent;
  let fixture: ComponentFixture<NotesListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
