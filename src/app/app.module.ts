import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { NotesListingComponent } from './notes-listing/notes-listing.component';
import { AddUpdateNotesComponent } from './add-update-notes/add-update-notes.component';

import { NotesService } from './notes-service.service';

const appRoutes: Routes = [
  { path: '', component: AppComponent }
];

@NgModule({
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
export class AppModule { }
