import { async, TestBed } from '@angular/core/testing';
import { AddUpdateNotesComponent } from './add-update-notes.component';
describe('AddUpdateNotesComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AddUpdateNotesComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AddUpdateNotesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=add-update-notes.component.spec.js.map