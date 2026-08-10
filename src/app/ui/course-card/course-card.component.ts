import { Component, Input, Output, EventEmitter, signal, computed, inject } from "@angular/core";
import { Course } from "../../models/course.model";
import { rxResource } from "@angular/core/rxjs-interop";
import { CourseService } from "../../services/course.service";

@Component({
  selector: "tms-course-card",
  standalone: true,
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.scss"],
})
export class CourseCardComponent {
  @Input() course!: Course;
  @Output() enrollClicked = new EventEmitter<Course>();
}
export class StudentDashboardComponent {
  
  private api = inject(CourseService);
studentName = signal("Liya Kebede");
earnedCredits = signal(45);
graduationStatus = computed(() =>
this.earnedCredits() >= 120 ? "Eligible for Graduation" : "In Progress",
);coursesResource = rxResource({
stream: () => this.api.getAll(),
});
}

