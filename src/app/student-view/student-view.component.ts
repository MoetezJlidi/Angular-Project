import { Component, Input, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.scss']
})
export class StudentViewComponent implements OnInit {

  @Input() id!: number;
  isAuth: boolean = false;
  title = 'etudiants';
  students: any[] = [];

  allAbsent() {
    if(confirm('Etes-vous sûr qu\’ils sont tous absents ?')) {
      this.studentService.switchOffAll();}

    else {
    return undefined;
    }
    }

    allPresent() {
      alert('Ils sont tous là !');
        this.studentService.switchOnAll();
    }
 // lastUpdate = new Date();
lastUpdate:Promise<Date> = new Promise((resolve, reject) => {
  const date = new Date();
  setTimeout(
  () => {
  resolve(date);
  }, 3000
  );
  });

  constructor(private studentService: StudentService){
  // Simulate authentication after 4 seconds
  setTimeout(() => {
    this.isAuth = true;
  }, 4000);
  }



ngOnInit(){
      this.students = this.studentService.students;}

}
