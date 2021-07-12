import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { People } from '../people';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {

  people=new People;

  constructor(private service:LoginService) { }

  ngOnInit(): void {
  }

  registeredfirst(){
    this.service.registerUserFromRemote(this.people).subscribe(
      data=>console.log("its access"),
      error=>console.log("error occured")
    ) 
  }
}
