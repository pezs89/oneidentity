import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-action',
  templateUrl: './user-action.component.html',
  styleUrls: ['./user-action.component.scss'],
})
export class UserActionComponent {
  @Input() label?: string;
  @Input() icon?: string;
  @Output() actionClicked = new EventEmitter();

  onActionClicked() {
    this.actionClicked.emit();
  }
}
