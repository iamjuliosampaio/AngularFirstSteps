import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NotesService } from './notes-service.service';
import * as _ from 'lodash';
var AppComponent = /** @class */ (function () {
    function AppComponent(notesService) {
        var _this = this;
        this.notesService = notesService;
        this.createUpdateNote = function (note) {
            var _this = this;
            // if jogging is present in joggingData, we can assume this is an update
            // otherwise it is adding a new element
            var noteWithId;
            noteWithId = _.find(this.notes, (function (el) { return el.id === note.id; }));
            if (noteWithId) {
                var updateIndex_1 = _.findIndex(this.notes, { id: noteWithId.id });
                this.notesService.update(note).subscribe(function (noteRecord) { return _this.notes.splice(updateIndex_1, 1, note); });
            }
            else {
                this.notesService.add(note).subscribe(function (noteRecord) { return _this.notes.push(note); });
            }
            this.currentNote = this.setInitialValuesForNote();
        };
        this.editNote = function (record) {
            this.currentNote = record;
        };
        this.newNote = function () {
            this.currentNote = this.setInitialValuesForNote();
        };
        notesService.get().subscribe(function (data) { return _this.notes = data; });
        this.currentNote = this.setInitialValuesForNote();
    }
    AppComponent.prototype.setInitialValuesForNote = function () {
        return {
            id: undefined,
            title: '',
            description: ''
        };
    };
    AppComponent.prototype.deleteNote = function (record) {
        var _this = this;
        var deleteIndex = _.findIndex(this.notes, { id: record.id });
        console.log(record);
        this.notesService.remove(record).subscribe(function (result) { return _this.notes.splice(deleteIndex, 1); });
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [NotesService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map