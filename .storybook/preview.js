import { muiTheme } from 'storybook-addon-material-ui';

import { darkTheme } from '@styles/darktheme';

export const decorators = [
	muiTheme([darkTheme])
];

// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// }