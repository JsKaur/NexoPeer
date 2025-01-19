import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../components/dashboard/footer/footer.component';

@Component({
  selector: 'app-newpost',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './newpost.component.html',
  styleUrl: './newpost.component.css'
})
export class NewpostComponent {

}
