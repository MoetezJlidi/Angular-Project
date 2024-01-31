import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AuthGuard } from './services/auth-guard.service';
import { AppRoutingModule,routedComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { FormsModule } from '@angular/forms';
import { StudentService } from './services/student.service';
import { AuthService } from './services/auth.service';
import { AuthComponent } from './auth/auth.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { SingleStudentComponent } from './single-student/single-student.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    AuthComponent,
    StudentViewComponent,
    routedComponents,
    SingleStudentComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [
    provideClientHydration(),
    StudentService,
    AuthService,
    [AuthGuard]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
