import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SubjectsComponent } from "src/app/subjects/subjects.component";
import { SubjectDetailComponent } from "src/app/subject-detail/subject-detail.component";

const routes: Routes = [
  { path: '', redirectTo: '/subjects', pathMatch: 'full' },
  { path: 'subjects', component: SubjectsComponent },
  { path: 'detail/:id', component: SubjectDetailComponent }];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

