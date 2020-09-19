import { Component, OnInit, Input } from '@angular/core';
import { Subject } from "src/app/subject";
import { Grade } from "src/app/grade";

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { SubjectService } from "src/app/subject.service";


@Component({
  selector: 'app-subject-detail',
  templateUrl: './subject-detail.component.html',
  styleUrls: ['./subject-detail.component.css']
})
export class SubjectDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private subjectService: SubjectService,
    private location: Location
  ) { }

  @Input() subject: Subject;

  toadd: boolean = false;
  todel: boolean = false;
  
  newGradeValue: number;
  newGradeDescription: string;
  idToDel: number;

  ngOnInit() { 
    this.getSubjectInstance();
  }

  getSubjectInstance(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.subjectService.getSubjectInstance(id)
      .subscribe(subject => this.subject = subject);
  }

  goBack(): void{
    this.location.back();
  }

  ADD_G(): void{
    this.subjectService.insertGrade(this.subject, this.newGradeValue, this.newGradeDescription);
    this.toadd = false;
  }

  DEL_G(): void{
    this.subjectService.deleteGrade(this.subject, this.idToDel);
    this.todel = false;
  }

}
