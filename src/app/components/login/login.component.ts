import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule,],

  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email :string='johnd'
  pass :string='m38rmF$'
 constructor(private fb:FormBuilder, private loginServ:LoginService,private router:Router) { }
    myForm:FormGroup=this.fb.group({ email:['',[Validators.required]],
      passwd:['',[Validators.required]],
    })
     get formControlls():any{
      return this.myForm.controls;
    }
      submit(){
      if (this.myForm.valid){

        // this.toastr.success('well!,form submitted', 'hi');
        // alert("well")
        console.log(this.myForm);
        console.log(this.myForm.value);

      }
      else {
  this.myForm.markAllAsTouched();
      }


    }
      login(){
  let data={
    "username": this.myForm.value?.email,
    "password": this.myForm.value?.passwd
  }
    this.loginServ.login(data).subscribe({
      next:(res:any)=>{
if(res){
//   res={
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXIiOiJqb2huZCIsImlhdCI6MTc0NzQyNjkxM30.IR7xi4rszJENvkHhYyYA0DhDkYa-rsIcDX1xwc4bUZI"
// }
  localStorage.setItem('token',res?.token);
  this.myForm.reset();
this.router.navigate(['/home']);
}
      },
      error:(err:any)=>{},
      complete:()=>{}
    })
  }
  }
