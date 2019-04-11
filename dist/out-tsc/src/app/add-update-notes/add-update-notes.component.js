import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
var AddUpdateNotesComponent = /** @class */ (function () {
    function AddUpdateNotesComponent() {
        this.noteCreated = new EventEmitter();
        this.clearNotes = function () {
            // Create an empty note object
            this.note = {
                id: undefined,
                title: '',
                description: ''
            };
        };
        this.addUpdateNote = function (event) {
            this.noteCreated.emit(this.note);
            this.clearNotes();
        };
        this.clearNotes();
        console.log(this.note.title);
    }
    AddUpdateNotesComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], AddUpdateNotesComponent.prototype, "noteCreated", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], AddUpdateNotesComponent.prototype, "note", void 0);
    AddUpdateNotesComponent = tslib_1.__decorate([
        Component({
            selector: 'app-add-update-notes',
            templateUrl: './add-update-notes.component.html',
            styleUrls: ['./add-update-notes.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], AddUpdateNotesComponent);
    return AddUpdateNotesComponent;
}());
export { AddUpdateNotesComponent };
//# sourceMappingURL=add-update-notes.component.js.map