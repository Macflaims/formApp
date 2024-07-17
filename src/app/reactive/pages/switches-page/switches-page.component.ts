import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches-page',
  templateUrl: './switches-page.component.html',
  styles: ``
})
export class SwitchesPageComponent {
  public myForm: FormGroup = this.fb.group({
    gender: ["M", Validators.required],
    wantNotifications: [true, Validators.required],
    termsAndConditions: [false, Validators.requiredTrue]
  })

  constructor(private fb: FormBuilder) { }

  isInValidField(field: string): boolean | null {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched
  }


  onSave() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
    }
    console.log(this.myForm.value)
  }
}
