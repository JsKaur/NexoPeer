import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from "./homepage/homepage.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { FooterComponent } from "./components/dashboard/footer/footer.component";
import { ProfileComponent } from './components/profile/profile.component';
import { StudyGoupsComponent } from "./study-goups/study-goups.component";
import { NewpostComponent } from "./newpost/newpost.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HomepageComponent, NavbarComponent, DashboardComponent, FooterComponent, ProfileComponent,  StudyGoupsComponent, NewpostComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NexoPeer';

  profilePicture = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
  showProfile = false;

  showEditProfile() {
    this.showProfile = !this.showProfile;
  }

  updateProfilePicture(newProfilePicture: string) {
    this.profilePicture = newProfilePicture;
  }
}