
import { Component, OnInit, Input } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
selector: 'app-students',
templateUrl: './students.component.html',
styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
@Input() id: number=0;
@Input() index!: number  ;
@Input() studentName: string = 'Henri';
@Input() studentStatus:string ='present';

constructor(private studentService: StudentService) {}

onSwitch() {
  if (this.studentStatus === 'present') {
    this.studentService.switchOffOne(this.index);
  } else if (this.studentStatus === 'absent') {
    this.studentService.switchOnOne(this.index);
  }
}

getColor() {
  if(this.studentStatus === 'present') {
  return 'green';
  } else if(this.studentStatus === 'absent') {
  return 'red';
  }
  else {
    return 'default-color'; // Add a default return statement or choose another default color.
  }
}

getStatus() {
  return this.studentStatus;
}

ngOnInit() {
}

}
