import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  student = {
    studentId:'',
    name: '',
    email: '',
    password: '',
    address: ''
  }

  route = inject(Router)

  constructor(private http : HttpClient, private router: Router){}
  api="http://localhost:3000/nexo";

  onsubmit(){
    this.http.post(this.api + "/register", this.student).subscribe((res)=>{
      console.log("Signup successfully", res);
      this.router.navigateByUrl("/sign");
    })
  }
}
