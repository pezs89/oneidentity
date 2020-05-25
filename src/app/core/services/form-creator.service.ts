import { Injectable } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder,
  FormControl,
} from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class FormCreatorService {
  constructor(private fb: FormBuilder) {}

  createForm<T>(data: T): { [key: string]: FormControl | FormGroup } {
    return Object.keys(data).reduce((group, key) => {
      if (typeof data[key] === 'string') {
        group[key] = this.fb.control(data[key], Validators.required);
      } else if (typeof data[key] === 'object') {
        group[key] = this.fb.group(this.createForm(data[key]));
      }
      return group;
    }, {});
  }
}
