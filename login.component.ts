import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder , Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  loginForm: FormGroup;
  submitted = false;
  invalidLogin = false;

  constructor(private formBuilder: FormBuilder
    , private router:Router) { }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid){
    return;
    }
    if (this.loginForm.controls.email.value  === 'devansh.aggarwal@robomq.io' && this.loginForm.controls.password.value === 'root'){
      alert('login successfully');
      this.router.navigate(['register']);
    }
    else {
      this.invalidLogin = true;
    }
  }

  ngOnInit() {
  this.loginForm= this.formBuilder.group({
  email: ['',Validators.required],
  password: ['',Validators.required]
});
  }

}
