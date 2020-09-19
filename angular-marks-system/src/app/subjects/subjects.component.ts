import { Component, OnInit } from '@angular/core';
import { Subject } from "src/app/subject";
import { Grade } from "src/app/grade";

import { SubjectService } from "src/app/subject.service";
import { SUBJECTS } from '../mock-subjects';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
    
  // grade_: Grade = {
  //   id: 1,
  //   value: 5,
  //   description: 'kolokwium_1'
  // }

  // subject: Subject = {
  //   id: 1,
  //   name: 'PzwJS',
  //   grades: [this.grade_]
  // }

  toadd: boolean = false;
  todel: boolean = false;

  subjects: Subject[];
  newSubjectName: string;
  idToDel: number;
  
  //selectedSubject: Subject;

  constructor(private subjectService: SubjectService) { }

  getSubjectCollection(): void{
    this.subjectService.getSubjects().subscribe(subjects => this.subjects = subjects);
  }

  ngOnInit() {
    this.getSubjectCollection();
  }

  ADD_S()
  {
    this.subjectService.insertSubject(this.newSubjectName);
    this.toadd = false;
  }

  DEL_S()
  {
    this.subjectService.deleteSubject(this.idToDel);
    this.todel = false;
  }

  // onSelect(subject: Subject): void {
  //   this.selectedSubject = subject;
  // }

}
