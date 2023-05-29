import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = "";
  password: string = "";


  constructor(private router: Router) { }

  ngOnInit() {
    getAuth().onAuthStateChanged(user => {
      if(!user?.isAnonymous){
        this.router.navigate(['/home'])
      }
    });
  }

  LoginAction() {
    if (this.email != "" && this.password != "") {
      signInWithEmailAndPassword(getAuth(), this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;
          if (!user.isAnonymous){
            this.router.navigate(['/home'])
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          alert(error.message);
        });
    } else {
      alert("Ingresa tu email y contraseña");
    }
  }

}
