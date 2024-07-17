import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/service/validators.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ["", [Validators.required, Validators.pattern(this.validatorsService.firstNameAndLastnamePattern)]],
    email: ["", [Validators.required, Validators.pattern(this.validatorsService.emailPattern)]],
    username: ["", [Validators.required, this.validatorsService.cantBeStrider]],
    password: ["", [Validators.required, Validators.minLength(6)]],
    password2: ["", [Validators.required]],
  }, {
    validators: [
      this.validatorsService.isFieldoneEqualFieldTwo("password", "password2"),
    ]
  })

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService) { }

  isInvalidField(field: string) {
    return this.validatorsService.isInValidField(this.myForm, field)
  }

  onSubmit() {
    this.myForm.markAllAsTouched()
    console.log(this.myForm.value)
  }

}
