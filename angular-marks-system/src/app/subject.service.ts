import { Injectable } from '@angular/core';
import { Subject } from "src/app/subject";
import { Grade } from "src/app/grade";
import { SUBJECTS  } from "src/app/mock-subjects";
import { Observable, of } from 'rxjs';
import { MessageService } from "src/app/message.service";

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  getSubjects(): Observable<Subject[]>
  {
    this.messageService.addMessage('SubjectService: fetched subjects');
    return of (SUBJECTS);
  }

  getSubjectInstance(id: number)
  {
    this.messageService.addMessage(`SubjectService: fetched subject id=${id}`);
    return of (SUBJECTS.find(subject => subject.id === id));
  }

  insertSubject(name: string)
  {
    var newSubject = new Subject();
    if(SUBJECTS.length != 0)
    {
    var max = SUBJECTS[SUBJECTS.length-1].id + 1;
    }
    else
    {
    var max = 1;
    }

    newSubject.id = max;
    newSubject.name = name;
    newSubject.grades = [];

    SUBJECTS.push(newSubject);
    this.messageService.addMessage(`SubjectService: added subject id=${max}, name=${name}`);
  }

  deleteSubject(id: number)
  {
    var name = SUBJECTS[id-1].name;
    SUBJECTS.splice(id-1,1);

    this.messageService.addMessage(`SubjectService: deleted subject id=${id}, name=${name}`);
  }

  insertGrade(subject: Subject, value: number, description: string)
  {
    if(subject.grades.length != 0)
    {
    var max = subject.grades[subject.grades.length-1].id + 1;
    }
    else
    {
    var max = 1;
    }
    
    subject.grades[max-1] = new Grade();
    subject.grades[max-1].id = max;
    subject.grades[max-1].value = value;
    subject.grades[max-1].description = description;

    this.messageService.addMessage(`SubjectService: added grade to subject id=${subject.id}, name=${subject.name}`);
  }

  deleteGrade(subject: Subject, id: number)
  {
    subject.grades.splice(id-1,1);
    
    this.messageService.addMessage(`SubjectService: deleted grade from subject id=${subject.id}, name=${subject.name}`);
  }


  constructor(private messageService: MessageService) { }
}
