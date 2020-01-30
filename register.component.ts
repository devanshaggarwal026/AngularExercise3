import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  invalidLogin = false;


  constructor(private formBuilder: FormBuilder ,private router:Router) { }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid){
    return;
    }
  
  
    else {
      this.invalidLogin = true;
    }
  }

  ngOnInit() {
  this.registerForm= this.formBuilder.group({
    name: ['', [Validators.required,Validators.pattern('^[a-zA-Z ]*$')]],
    id: ['', Validators.required],
    mobile: ['', [Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
    email: ['', [Validators.required,Validators.email]],
    password: ['', [Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]]
});
  }

}
