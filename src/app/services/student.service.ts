
export class StudentService{

      students = [
      {
      id:1,
      name: 'Henri',
      status: 'present'
      },
      {
      id:2,
      name: 'Louis',
      status: 'absent'
      },
      {
      id:3,
      name: 'Philippe',
      status: 'present'
      },
      ];

      getStudentById(id: number) {
        const student = this.students.find(
        (s) => {
        return s.id === id;
        }
        );
        return student;
      }

      switchOnOne(i: number) {
        this.students[i].status = 'present';
        }
      switchOffOne(i: number) {
        this.students[i].status = 'absent';
      }
      switchOnAll() {
        for(let student of this.students) {
          student.status = 'present';
        }
      }
      switchOffAll() {
        for(let student of this.students) {
          student.status = 'absent';
        }
      }
  constructor(){}
    }


