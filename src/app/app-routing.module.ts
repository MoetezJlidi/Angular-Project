import { NgModule } from '@angular/core';
import { AuthGuard } from './services/auth-guard.service';
import { RouterModule, Routes } from '@angular/router';
import { StudentViewComponent } from './student-view/student-view.component';
import { AuthComponent } from './auth/auth.component';
import { SingleStudentComponent } from './single-student/single-student.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'students' },
  { path: 'students', canActivate: [AuthGuard], component: StudentViewComponent },
  { path: 'students/:id', canActivate: [AuthGuard], component: SingleStudentComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'not-found', component: FourOhFourComponent},
  { path: '**', redirectTo: 'not-found' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routedComponents = [StudentViewComponent, AuthComponent] ;
