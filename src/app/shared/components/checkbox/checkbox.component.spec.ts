import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { CheckboxComponent } from './checkbox.component';

describe('Checkbox Component', () => {
  let component: CheckboxComponent;
  let fixture: ComponentFixture<CheckboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckboxComponent]
    });

    fixture = TestBed.createComponent(CheckboxComponent);
    component = fixture.componentInstance;
  });

  it('should emit true when checkbox is checked', fakeAsync(() => {
    component.value = false;
    fixture.detectChanges();
    const spyOnValueChange = spyOn(component.valueChange, 'emit');

    const checkbox: HTMLInputElement =
      fixture.nativeElement.querySelector('input[type="checkbox"]');
    checkbox.click();
    tick();

    expect(spyOnValueChange).toHaveBeenCalledTimes(1);
    expect(spyOnValueChange).toHaveBeenCalledWith(true);
  }));

  it('should emit false when checkbox is not checked', fakeAsync(() => {
    component.value = true;
    fixture.detectChanges();
    const spyOnValueChange = spyOn(component.valueChange, 'emit');

    const checkbox: HTMLInputElement =
      fixture.nativeElement.querySelector('input[type="checkbox"]');
    checkbox.click();
    tick();

    expect(spyOnValueChange).toHaveBeenCalledTimes(1);
    expect(spyOnValueChange).toHaveBeenCalledWith(false);
  }));

  describe(`when label is clicked`, () => {
    it('should toggle the checbox', fakeAsync(() => {
      component.value = true;
      fixture.detectChanges();
      const spyOnValueChange = spyOn(component.valueChange, 'emit');

      const checkboxLabel: HTMLElement = fixture.nativeElement.querySelector('.checkbox__label');
      checkboxLabel.click();
      tick();

      expect(spyOnValueChange).toHaveBeenCalledTimes(1);
      expect(spyOnValueChange).toHaveBeenCalledWith(false);
    }));
  });

  describe(`when ui is clicked`, () => {
    it('should toggle the checbox', fakeAsync(() => {
      component.value = true;
      fixture.detectChanges();
      const spyOnValueChange = spyOn(component.valueChange, 'emit');

      const checkboxUI: HTMLElement = fixture.nativeElement.querySelector('.checkbox__ui');
      checkboxUI.click();
      tick();

      expect(spyOnValueChange).toHaveBeenCalledTimes(1);
      expect(spyOnValueChange).toHaveBeenCalledWith(false);
    }));
  });
});
