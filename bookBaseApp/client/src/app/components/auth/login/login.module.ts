import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../../home/home.component';

const routes:Routes = [
  { path: '', component: LoginComponent } ,
  { path: 'home', component: HomeComponent  } ,
]


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    RouterModule.forChild(routes),
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
