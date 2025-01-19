import { Component , OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostComponent } from "../components/post/post.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../components/dashboard/footer/footer.component";
import { Router } from '@angular/router';
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [PostComponent, NavbarComponent, FooterComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
campuses: string[] = ['Campus A', 'Campus B', 'Campus C'];
  courses: string[] = ['Course 1', 'Course 2', 'Course 3'];
  selectedCampus: string = '';
  selectedCourse: string = '';
  searchQuery: string = '';

  constructor(private router: Router) {}

createPost(){
  this.router.navigateByUrl('/new');
};
  onSearch(): void {
    // Implement your search logic here
    console.log('Searching with:', {
      campus: this.selectedCampus,
      course: this.selectedCourse,
      query: this.searchQuery
    });
  }


}
