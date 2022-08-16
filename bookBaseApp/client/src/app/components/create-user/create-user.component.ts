import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  form!: FormGroup;
  loading = false;
  submitted = false;
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  getErrorMessage() {
    if (this.firstName.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.lastName.hasError('required')) {
      return 'You must enter a value';
    }
    return;
  }

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return 'Passwords must be at least 6 characters long';
    }

    return this.password.hasError('minlength') ? 'Passwords must be at least 6 characters long' : '';
  }


  onSubmit() {
    if (this.firstName && this.lastName && this.email && this.password) {
      console.log("form submitted: ", this.firstName.value, this.lastName.value, this.email.value, this.password.value);
    }
    //else output some error message
  }

}
