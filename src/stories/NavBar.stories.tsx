import React from 'react';
import { Meta } from '@storybook/react';

import NavBar from '@components/navbar/navbar';
import { ThemeProvider } from '@emotion/react';
import { darkTheme } from '@styles/darktheme';

export default {
  title: 'Components/NavBar',
  component: NavBar,
  decorators: [
      (Story) => (
        <ThemeProvider theme={darkTheme}>
            <div className="App dark">
                <section className="header-container">
                    <div className="header flex-box center">
                        <Story />
                    </div>
                </section>
            </div>
        </ThemeProvider>
      )
  ]
} as Meta; 

export const All: React.VFC<{}> = () => <NavBar></NavBar>;