import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: 'form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
})
export class FormInputComponent {
  @Input() label: string;
  @Input() placeholder: string;
  @Input() controlName: FormControl;
  @Input() groupName: FormGroup;
  @Input() name: string;
  @Input() required = false;
  @Input() inputType = 'text';
}
