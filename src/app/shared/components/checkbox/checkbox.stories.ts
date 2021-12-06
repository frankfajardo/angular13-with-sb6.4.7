import { Meta, Story } from '@storybook/angular';
import { CheckboxComponent } from './checkbox.component';

export default {
  title: 'Controls/Checkbox',
  component: CheckboxComponent
} as Meta;

interface UnlabeledCheckboxTemplateInput {
  name: string;
  value: boolean;
  disabled: boolean;
  bgtheme: 'dark' | 'light';
  checkMark: 'check' | 'dash';
}

interface CheckboxTemplateInput extends UnlabeledCheckboxTemplateInput {
  label: string;
}

const Template: Story<CheckboxTemplateInput> = (args: CheckboxTemplateInput) => ({
  props: args,
  template: `
      <div
        style="width: 100%; height: calc(100vh - 32px); padding: 8px;"
        [ngStyle]="{'background-color': bgtheme === 'light' ? 'var(--primary-text-color)' : 'transparent'}">

        <app-checkbox
          [bgtheme]="bgtheme"
          [name]="name"
          [label]="label"
          [value]="value"
          [disabled]="disabled"
          [checkMark]="checkMark">
        </app-checkbox>

      </div>`
});

export const Default = Template.bind({});
Default.args = {
  name: 'remember-me',
  label: 'Remember me',
  value: true,
  disabled: false,
  bgtheme: 'dark',
  checkMark: 'check'
};

export const WithDashMarker = Template.bind({});
WithDashMarker.args = {
  name: 'remember-me',
  label: 'Remember me',
  value: true,
  disabled: false,
  bgtheme: 'dark',
  checkMark: 'dash'
};

const TransclusionTemplate: Story<UnlabeledCheckboxTemplateInput> = (
  args: UnlabeledCheckboxTemplateInput
) => ({
  props: args,
  template: `
      <div
        style="width: 100%; height: calc(100vh - 32px); padding: 8px;"
        [ngStyle]="{'background-color': bgtheme === 'light' ? 'var(--primary-text-color)' : 'transparent'}">

        <app-checkbox
          [bgtheme]="bgtheme"
          [name]="name"
          [value]="value"
          [disabled]="disabled"
          [checkMark]="checkMark">
          <label [for]="name">A transcluded label</label>
        </app-checkbox>
      </div>`
});

export const WithTranscludedLabel = TransclusionTemplate.bind({});
WithTranscludedLabel.args = {
  name: 'remember-me',
  value: true,
  disabled: false,
  bgtheme: 'dark',
  checkMark: 'dash'
};
