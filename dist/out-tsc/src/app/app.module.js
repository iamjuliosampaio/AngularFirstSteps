import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NotesService } from './notes-service.service';
import { HttpClientModule } from '@angular/common/http';
import { NotesListingComponent } from './notes-listing/notes-listing.component';
import { AddUpdateNotesComponent } from './add-update-notes/add-update-notes.component';
var appRoutes = [
    { path: '', component: AppComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                NotesListingComponent,
                AddUpdateNotesComponent
            ],
            imports: [
                BrowserModule,
                RouterModule.forRoot(appRoutes),
                AppRoutingModule,
                FormsModule,
                HttpModule,
                HttpClientModule
            ],
            providers: [NotesService],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map