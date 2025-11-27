import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Interface for Student
interface Student {
  stud_name: string;
  course: string;
  isActive: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './directives.html',
  styleUrls: ['./directives.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  // --- Component Logic and Data ---

  // Card 1: @if/@else
  isStaticNoteVisible: boolean = true;

  // Card 2: Visibility Control
  isNoteVisible: boolean = false;

  // Card 3: Toggle Logic
  isParagraphVisible: boolean = false;

  // Card 4: Static Switch
  monthNameStatic: string = 'Jan';

  // Card 5: Dynamic Switch
  monthNameDynamic: string = '';

  // Card 6: @for Array
  cityList: string[] = ['Manila', 'Cebu', 'Davao', 'Baguio', 'Iloilo'];

  // Student Table
  studentList: Student[] = [
    { stud_name: 'Alice Johnson', course: 'Computer Science', isActive: true },
    { stud_name: 'Bob Smith', course: 'Information Technology', isActive: false },
    { stud_name: 'Charlie Brown', course: 'Software Engineering', isActive: true },
    { stud_name: 'Diana Prince', course: 'Data Science', isActive: true },
    { stud_name: 'Ethan Hunt', course: 'Cyber Security', isActive: false },
  ];

  // Methods
  showNote() {
    this.isNoteVisible = true;
  }

  hideNote() {
    this.isNoteVisible = false;
  }

  toggleNote() {
    this.isParagraphVisible = !this.isParagraphVisible;
  }
}
