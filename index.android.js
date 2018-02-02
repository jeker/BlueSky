/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import Root from './app/root';
// import App from './app/containers/app'; //如果不用react-redux 可以直接走app

// export default class BlueSky extends Component {
//   render() {
//     return (
//       <Root/>
//     );
//   }
// }


AppRegistry.registerComponent('BlueSky', () => Root);
