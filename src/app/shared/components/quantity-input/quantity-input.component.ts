import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-quantity-input',
  templateUrl: './quantity-input.component.html',
  styleUrls: ['./quantity-input.component.scss'],
})
export class QuantityInputComponent implements OnInit, OnChanges {
  @Input() min?: number = undefined;
  @Input() max?: number = undefined;
  @Input() disabled = false;
  @Input() value = 0;
  @Output() valueChange = new EventEmitter<number>();

  increaseDisabled = false;
  decreaseDisabled = false;

  ngOnInit(): void {
    this.disableButtonIfNeeded();
  }

  ngOnChanges(): void {
    this.disableButtonIfNeeded();
  }

  onIncrease(): void {
    if (!this.disabled) {
      this.value += 1;
      this.disableButtonIfNeeded();
      this.valueChange.emit(this.value);
    }
  }

  onDecrease(): void {
    if (!this.disabled) {
      this.value -= 1;
      this.disableButtonIfNeeded();
      this.valueChange.emit(this.value);
    }
  }

  private disableButtonIfNeeded(): void {
    this.increaseDisabled =
      this.max !== null && this.max !== undefined && this.value >= this.max;
    this.decreaseDisabled =
      this.min !== null && this.min !== undefined && this.value <= this.min;
  }
}
