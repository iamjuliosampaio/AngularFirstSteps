import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var NotesService = /** @class */ (function () {
    function NotesService(http) {
        this.http = http;
        this.accessPointUrl = 'https://localhost:44324/api/notes';
        this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    }
    NotesService.prototype.get = function () {
        // Get all jogging data
        return this.http.get(this.accessPointUrl, { headers: this.headers });
    };
    NotesService.prototype.add = function (payload) {
        return this.http.post(this.accessPointUrl, payload, { headers: this.headers });
    };
    NotesService.prototype.remove = function (payload) {
        return this.http.delete(this.accessPointUrl + '/' + payload.id, { headers: this.headers });
    };
    NotesService.prototype.update = function (payload) {
        return this.http.put(this.accessPointUrl + '/' + payload.id, payload, { headers: this.headers });
    };
    NotesService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], NotesService);
    return NotesService;
}());
export { NotesService };
//# sourceMappingURL=notes-service.service.js.map