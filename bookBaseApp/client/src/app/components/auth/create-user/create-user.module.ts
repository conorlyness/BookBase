import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';

const routes:Routes = [
  { path: '', component: CreateUserComponent },
]


@NgModule({
  declarations: [CreateUserComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    RouterModule.forChild(routes),
  ],
  exports: [CreateUserComponent]
})
export class CreateUserModule { }
