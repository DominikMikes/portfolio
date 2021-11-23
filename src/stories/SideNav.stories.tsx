import React from 'react';
import { Meta } from '@storybook/react';

import SideNav from '@components/navbar/sidenav';

export default {
  title: 'Components/SideNav',
  component: SideNav,
} as Meta; 

export const All: React.VFC<{}> = () => <SideNav></SideNav>;