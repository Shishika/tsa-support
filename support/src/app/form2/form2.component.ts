import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component implements OnInit {
  supportForm: FormGroup;
  submitted: boolean;
  constructor(public formBuilder: FormBuilder) {
    this.supportForm = this.formBuilder.group({
    'email': this.formBuilder.control('', [Validators.required, Validators.email]),
    'phoneNumber': this.formBuilder.control('', [Validators.required, Validators.pattern('[0-9]*')]),
    'organisation': this.formBuilder.control('', [Validators.required]),
    'subject': this.formBuilder.control('', [Validators.required])
   });
  }

  ngOnInit() {

  }

  public onSubmit() {
    this.submitted = true;
    if (this.supportForm.invalid) {
      return;
    }
    alert('done');
  }
  public hasError(propertyName: string): boolean {
    return (
      !this.supportForm.controls[propertyName].valid &&
      (this.supportForm.controls[propertyName].touched || this.submitted)
    );
  }
}
