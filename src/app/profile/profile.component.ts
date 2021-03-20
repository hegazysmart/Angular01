import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  registrationForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) { 
    this.registrationForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[cno]/)]],
      userName:['', [Validators.required, Validators.pattern(/^\S+$/)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      repeatedPass: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit(): void {
  }

  get registrationControls() {
    return this.registrationForm.controls;
  }
  submitRegistration() {
    if (this.registrationForm.valid) {
      this.router.navigate(['/movies', {}]);
    }
    else {
      alert('You must enter correct information')
    }
  }

}
