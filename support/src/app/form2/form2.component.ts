import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,  } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
  supportForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.supportForm = new FormGroup({
      email: new FormControl(),
      phoneNumber: new FormControl(),
      organization: new FormControl(),
      subject: new FormControl(),
    });
  }

}
