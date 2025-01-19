import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../components/dashboard/footer/footer.component";

@Component({
  selector: 'app-study-goups',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './study-goups.component.html',
  styleUrl: './study-goups.component.css'
})
export class StudyGoupsComponent {

  studyGroup: any[] =[];

  joinGroup(){
    alert("Group Joined Successfully");
  }

}
