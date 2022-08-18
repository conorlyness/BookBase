import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

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
    private snackbarService: SnackbarService,
    private authService: AuthenticateService,
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
    if (!this.firstName.valid || !this.lastName.valid || !this.email.valid || !this.password.valid) {
      console.log("error")
      this.snackbarService.openSnackBar("Invalid fields, please retry","")
    } else {
      console.log("form submitted: ", this.firstName.value, this.lastName.value, this.email.value, this.password.value);
      const user = {firstName: this.firstName.value, lastName: this.lastName.value, email: this.email.value, password: this.password.value}
      //add some logic here, make a call to the auth service and a func to check if there is a user in the db with this email already, if so then 
      //output an error message in a snackbar "account with this email already exists"
      this.authService.createUser(user).subscribe({});
      }
      this.snackbarService.openSnackBar("Account successfully created","")
      this.router.navigate(['']);
    }

  }

