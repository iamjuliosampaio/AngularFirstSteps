import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes-listing',
  templateUrl: './notes-listing.component.html',
  styleUrls: ['./notes-listing.component.css']
})
export class NotesListingComponent implements OnInit {

  @Input() notes: Array<any>;

  @Output() recordDeleted = new EventEmitter<any>();
  @Output() newClicked = new EventEmitter<any>();
  @Output() editClicked = new EventEmitter<any>();

  public delete(data) {
    this.recordDeleted.emit(data);
  }

  public edit(data) {
    this.editClicked.emit(Object.assign({}, data));
  }

  public new() {
    this.newClicked.emit();
  }

  ngOnInit() {
  }

}
