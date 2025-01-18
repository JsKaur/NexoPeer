import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  @Output() closeProfileEvent = new EventEmitter<void>();
  @Output() profilePictureChanged = new EventEmitter<string>();

  editProfilePicture = false;
  editCollege = false;
  editCampus = false;
  editInterest = false;
  editEvent = false;

  profilePicture = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
  college = 'College Name';
  campus = 'Campus Name';
  interest = 'Interest Name';
  event = 'Event Name';

  toggleEdit(field: string) {
    switch (field) {
      case 'profilePicture':
        this.editProfilePicture = !this.editProfilePicture;
        break;
      case 'college':
        this.editCollege = !this.editCollege;
        break;
      case 'campus':
        this.editCampus = !this.editCampus;
        break;
      case 'interest':
        this.editInterest = !this.editInterest;
        break;
      case 'event':
        this.editEvent = !this.editEvent;
        break;
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profilePicture = e.target.result;
        this.profilePictureChanged.emit(this.profilePicture);
      };
      reader.readAsDataURL(file);
    }
  }

  closeProfile() {
    this.closeProfileEvent.emit();
  }
}