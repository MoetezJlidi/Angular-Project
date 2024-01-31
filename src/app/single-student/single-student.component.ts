import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-single-student',
  templateUrl: './single-student.component.html',
  styleUrl: './single-student.component.scss'
})
export class SingleStudentComponent implements OnInit{

  name:string='Etudiant';
  status:string='Status';


 ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    const student = this.studentService.getStudentById(id);
    if (student) {
      this.name = student.name;
      this.status = student.status;
    }
  }
  constructor(private studentService: StudentService, private route:ActivatedRoute){};

}
