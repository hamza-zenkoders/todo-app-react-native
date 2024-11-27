import { registerRootComponent } from 'expo';

import Todo from './Todo';
import Calculator from './Calculator';
import Demo from './Demo';
import StopWatch from './StopWatch';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately

// registerRootComponent(Todo);
// registerRootComponent(Calculator);
// registerRootComponent(Demo);
registerRootComponent(StopWatch);