import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: [
    
  ]
})
export class LoginComponent {
	private username;
	private password;

  constructor(private router: Router) {
   
 }
	login():void{
		if(this.username == "test" && this.password == "test"){
      this.router.navigateByUrl('/service_detail');
      
		}
		else {
			alert("Give username and password 'test'");
		}
	}
}
