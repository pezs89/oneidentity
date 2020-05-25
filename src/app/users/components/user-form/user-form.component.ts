import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { User } from '../../models/user';
import { FormCreatorService } from 'src/app/core/services/form-creator.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  @Input() user: User;
  @Output() updateUser = new EventEmitter<{ id: number; user: User }>();
  @Output() deleteUser = new EventEmitter<number>();
  userForm: FormGroup;

  get addressFieldsGroup(): AbstractControl {
    return this.userForm.get('address');
  }

  get companyFieldsGroup(): AbstractControl {
    return this.userForm.get('company');
  }

  constructor(
    private fb: FormBuilder,
    private formCreator: FormCreatorService
  ) {}

  ngOnInit() {
    this.userForm = this.fb.group(this.formCreator.createForm<User>(this.user));
  }

  submitForm() {
    if (this.userForm.valid) {
      this.updateUser.emit({ id: this.user.id, user: this.userForm.value });
    }
  }

  onUserDeleteClicked() {
    this.deleteUser.emit(this.user.id);
  }
}
