import React from 'react';
import { storiesOf } from '@storybook/react';
import Calendar from "../src/components/Calendar";
import { action, configureActions } from '@storybook/addon-actions';

storiesOf('Calendar', module).add('Default', () => <Calendar onSelectDate={action('button-click')} />);