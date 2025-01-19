import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  imports:[RouterLink],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() profilePicture: string = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
  @Output() profilePictureClicked = new EventEmitter<void>();

  constructor (private router: Router) {}
  onProfilePictureClick() {
    this.profilePictureClicked.emit();
    this.router.navigateByUrl('/profile');
  }
}