import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  loginForm = new FormGroup({
    user:new FormControl('', [Validators.required, Validators.email]),
    password:new FormControl('', [Validators.required, Validators.minLength(5)])
  })

  constructor() { }

  ngOnInit(): void {
  }

  loginUser() {
    console.warn(this.loginForm.value)
  }

  get user() {
    return this.loginForm.get('user');
  }

  get password() {
    return this.loginForm.get('password')
  }

}
