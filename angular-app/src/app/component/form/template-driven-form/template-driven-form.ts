import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule],
  templateUrl: './template-driven-form.html',
  styleUrl: './template-driven-form.css',
})
//IMPORTANT: In a template-driven form, the source of truth is the template.
//The NgModel directive automatically manages the FormControl instance for you.
export class TemplateDrivenForm {
  favoriteColor = signal('');

  submit(value: any) {
    console.log(value?.email);
  }
}
