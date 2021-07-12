import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterationService } from '../registeration.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user=new User;
  msg='';

  constructor(private service:RegisterationService,private router:Router) { }

  ngOnInit(): void {
    
  }                                           

  loginuser(){
    this.service.loginUserFromRemote(this.user).subscribe(
      data=>{
        console.log("its access");
        this.handleresponse(data);
        this.router.navigate(["/home"]);
      },
      error=>{console.log("error occoured");
     this. msg="bad credential please enter valid username and password";
    }
    )

  }
  handleresponse(data:any){
    sessionStorage.setItem('loggeduser',JSON.stringify(data.username));
  }

  
}
