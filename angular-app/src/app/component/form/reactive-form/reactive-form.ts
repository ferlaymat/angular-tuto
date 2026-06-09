import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
//IMPORTANT: In reactive forms, the form model is the source of truth;
//it provides the value and status of the form element at any given point in time,
//through the [formControl] directive on the <input> element.
export class ReactiveForm {
  myControl = new FormControl('default value');
  myControlValidator = new FormControl('default value');
  myControlOnChange = new FormControl('default value');
  myControlOnBlur = new FormControl('default value', { updateOn: 'blur' });
  myControlNoReset = new FormControl('default value');
  myControlReset = new FormControl('default value', { nonNullable: true });

  //we define explicitely the formgroup (the model).
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  submit() {
    console.log(this.form.get('email')?.value);
  }
}
