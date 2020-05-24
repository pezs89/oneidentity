import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';

const COMPONENTS = [HeaderComponent, FormInputComponent, ButtonComponent];

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [...COMPONENTS],
  declarations: [...COMPONENTS],
  providers: [],
})
export class SharedModule {}
