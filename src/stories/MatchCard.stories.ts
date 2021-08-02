import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import { MatchcardComponent } from '../app/matchcard/matchcard.component';

export default {
  title: 'Example/MatchCard',
  component: MatchcardComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<MatchcardComponent> = (args: MatchcardComponent) => ({
  props: args,
});

export const singlePlayer = Template.bind({});
singlePlayer.args = {
  isSinglePlayer: true,
  isDoublePlayer: false,
  isTiming: true,
};

export const DoublePlayer = Template.bind({});
DoublePlayer.args = {
  isSinglePlayer: false,
  isDoublePlayer: true,
  isTiming: false,
};

export const TimingVisible = Template.bind({});
TimingVisible.args = {
  isSinglePlayer: false,
  isDoublePlayer: true,
  isTiming: true,
};

export const TimingInVisible = Template.bind({});
TimingInVisible.args = {
  isSinglePlayer: false,
  isDoublePlayer: true,
  isTiming: false,
};
