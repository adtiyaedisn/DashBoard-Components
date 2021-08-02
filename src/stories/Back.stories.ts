import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import { BackComponent } from '../app/back/back.component';

export default {
  title: 'Example/Back',
  component: BackComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<BackComponent> = (args: BackComponent) => ({
  props: args,
});

export const Back = Template.bind({});
Back.args = {};
