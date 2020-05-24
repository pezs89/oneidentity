import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() type: string;
  @Input() label: string;
  @Output() buttonClicked = new EventEmitter();

  onButtonClicked() {
    this.buttonClicked.emit();
  }
}
