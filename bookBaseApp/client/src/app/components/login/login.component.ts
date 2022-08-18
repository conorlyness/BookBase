import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
  
})
export class LoginComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);
  isValidLogin!: any;


  constructor(    
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private snackbarService: SnackbarService,
    private authService: AuthenticateService,
    public nav: NavbarService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.email.valid || !this.password.valid) {
      console.log("error")
      this.snackbarService.openSnackBar("Invalid fields, please retry","")
    } else {
      console.log("form submitted: ", this.email.value, this.password.value);
      const user = {email: this.email.value, password: this.password.value}
      //add some logic here, make a call to the auth service and a func to check if there is a user in the db with this email already, if so then 
      //output an error message in a snackbar "account with this email already exists"
      
        this.authService.loginUser(user).subscribe((value) => {
          this.isValidLogin = value;
          if (this.isValidLogin.userId) {
              this.snackbarService.openSnackBar("Login Successful, welcome back","");
              localStorage.setItem("sessionUserId", this.isValidLogin.userId)
              //now that its a valid login we can show the navbar
              this.nav.showNav();
              this.router.navigate(['/home']);
            }
            else {
              this.password.reset();
              this.snackbarService.openSnackBar("Invalid credentials, please retry","");
            }

        });
      
      }
    }

}
