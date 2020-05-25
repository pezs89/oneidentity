import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormInputComponent } from './components/form-input/form-input.component';
import { ButtonComponent } from './components/button/button.component';

const COMPONENTS = [FormInputComponent, ButtonComponent];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  exports: [COMPONENTS],
  declarations: [COMPONENTS],
  providers: [],
})
export class SharedModule {}
