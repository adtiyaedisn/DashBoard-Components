import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import { HeaderComponent } from '../app/header/header.component';

export default {
  title: 'Example/Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  props: args,
});

export const companyProfile = Template.bind({});
companyProfile.args = {
  isCompanyLogoVisible: true,
  isUserProfileVisible: false,
};

export const userProfile = Template.bind({});
userProfile.args = {
  isCompanyLogoVisible: false,
  isUserProfileVisible: true,
};
