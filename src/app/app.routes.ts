import rm from "@angular/common/locales/extra/rm";
import { Routes } from '@angular/router';

export const routes: Routes = [


  {
    path: 'courses/:id',
    loadComponent: () => import('./features/course-detail/course-detail.component')
      .then(m => m.CourseDetailComponent)
  },

  {
    path: "dashboard",
    loadComponent: () => import("./features/student-dashboard/student-dashboard.component")
      .then(
        (m) => m.StudentDashboardComponent,

      ),
  },
  {
    path: 'instructor-dashboard',
    loadComponent: () =>
      import('./features/instructor-dashboard/instructor-dashboard')
        .then(m => m.InstructorDashboardComponent)
  },
  {
    path: 'enroll',
    loadComponent: () => import('./features/enrollment-form/enrollment-form.component')
      .then(m => m.EnrollmentFormComponent),
  },
  {
    path: 'enrollments',
    loadComponent: () =>
      import('./features/enrollment-list/enrollment-list.component')
        .then(m => m.EnrollmentListComponent)
  },
  {

    path: 'grade-submission',
    loadComponent: () =>
      import('./features/grade-submission/grade-submission.component')
        .then(m => m.GradeSubmissionComponent)
  
  },

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
]




