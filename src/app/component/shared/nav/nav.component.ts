import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
userdata=''
  constructor() { }

  ngOnInit(): void {
    this.userdata= JSON.parse(sessionStorage.getItem('loggeduser')||'{}');
  }

}
