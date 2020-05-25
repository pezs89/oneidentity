import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';

const COMPONENTS = [HeaderComponent];

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [COMPONENTS],
  declarations: [COMPONENTS],
  providers: [],
})
export class CoreModule {}
