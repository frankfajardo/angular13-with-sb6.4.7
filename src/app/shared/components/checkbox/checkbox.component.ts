import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Input() name!: string;
  @Input() label?: string;
  @Input() checkMark: 'check' | 'dash' = 'check';
  @Input() disabled = false;
  /**
   * Indicates if on 'light' or 'dark' background.
   * On 'dark' background, the label is set to primary-text-color (#ffffff).
   * On 'light' background, the label is set to primary-text-color-alternate (#0b132b)
   */
  @Input() bgtheme: 'light' | 'dark' = 'dark';
  @Input() value = false;
  @Output() valueChange = new EventEmitter<boolean>();

  onChange(checked: boolean): void {
    if (!this.disabled) {
      this.value = checked;
      this.valueChange.emit(this.value);
    }
  }
}
