import { AppRegistry } from 'react-native';

import Root from './App';
// import Storybook from './storybook';

import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => Root);
