import { Component, OnInit } from '@angular/core';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = "";
  password: string = "";


  constructor() { }

  ngOnInit() {

  }

  LoginAction() {
    if (this.email != "" && this.password != "") {
      signInWithEmailAndPassword(getAuth(), this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
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
