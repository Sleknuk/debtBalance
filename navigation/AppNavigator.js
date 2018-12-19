import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
// import navigation from './navigation';

export default createSwitchNavigator({
  // Main: navigation,
  Main: MainTabNavigator,
});