import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements OnInit {
  authStatus:boolean=false;
  constructor( private authService: AuthService, private router:Router){

  }
  ngOnInit(){
    this.authStatus=this.authService.isAuth;
  }
  onSignIn() {
      this.authService.signIn().then(
        () => {
          alert('Sign in successful!');
          this.authStatus = this.authService.isAuth;
          this.router.navigate(['students']);
        }
      );
    }
  onSignOut() {
      this.authService.signOut();
      this.authStatus = this.authService.isAuth;
  }

}
