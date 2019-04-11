import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
var NotesListingComponent = /** @class */ (function () {
    function NotesListingComponent() {
        this.recordDeleted = new EventEmitter();
        this.newClicked = new EventEmitter();
        this.editClicked = new EventEmitter();
    }
    NotesListingComponent.prototype.deleteRecord = function (record) {
        this.recordDeleted.emit(record);
    };
    NotesListingComponent.prototype.editRecord = function (record) {
        var clonedRecord = Object.assign({}, record);
        this.editClicked.emit(clonedRecord);
    };
    NotesListingComponent.prototype.newRecord = function () {
        this.newClicked.emit();
    };
    NotesListingComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], NotesListingComponent.prototype, "notes", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], NotesListingComponent.prototype, "recordDeleted", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], NotesListingComponent.prototype, "newClicked", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], NotesListingComponent.prototype, "editClicked", void 0);
    NotesListingComponent = tslib_1.__decorate([
        Component({
            selector: 'app-notes-listing',
            templateUrl: './notes-listing.component.html',
            styleUrls: ['./notes-listing.component.css']
        })
    ], NotesListingComponent);
    return NotesListingComponent;
}());
export { NotesListingComponent };
//# sourceMappingURL=notes-listing.component.js.map