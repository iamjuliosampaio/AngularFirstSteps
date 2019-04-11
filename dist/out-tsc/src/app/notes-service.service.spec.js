import { TestBed } from '@angular/core/testing';
import { NotesService } from './notes-service.service';
describe('NotesService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(NotesService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=notes-service.service.spec.js.map