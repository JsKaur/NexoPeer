import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignINComponent {

  constructor(private http: HttpClient, private router: Router){}

  api="http://localhost:3000/nexo/";

  student = {
    studentId: '',
    password: ''
  }

 

  onSubmit(){

    this.http.post(this.api + "sign-in", this.student ).subscribe((res:any) =>{
      console.log("login successfull",res);
      this.router.navigateByUrl("/home")

    })

  }
  
}
