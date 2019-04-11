import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-update-notes',
  templateUrl: './add-update-notes.component.html',
  styleUrls: ['./add-update-notes.component.css']
})
export class AddUpdateNotesComponent implements OnInit {

  @Output() noteCreated = new EventEmitter<any>();
  @Input() note: any;

  constructor() {
    this.clearNotes();
  }

  ngOnInit() {
  }

  // Create an empty note object
  private clearNotes = function () {
    this.note = {
      id: undefined,
      title: '',
      description: ''
    };
  };

  public addUpdateNote = function(event) {
    this.noteCreated.emit(this.note);
    this.clearNotes();
  };

}
