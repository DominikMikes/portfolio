import React from 'react';
import { Meta } from '@storybook/react';

import Skill from '@components/skill/skill';

export default {
  title: 'Components/Skill',
  component: Skill,
} as Meta;

export const All: React.VFC<{}> = () => <Skill></Skill>;