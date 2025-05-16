import { UsersService } from './../../services/users.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  users:any
    password: string = '';
constructor(private userService:UsersService){}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.getUsers()
}
getUsers():void{
this.userService.getAllUsers().subscribe({
  next:(res:any)=>{
    console.log(res)
     this.users=res;
  },
  error:()=>{},
  complete:()=>{}
})
  }
   maskedPassword(password:string): string {
    if (password.length <= 3) return password;
    const visiblePart = password.substring(0, 3);
    const hiddenPart = '*'.repeat(password.length - 3);
    return visiblePart + hiddenPart;
  }
}
