/**
 * @format
 */
// 自定义主题
// 第一步，这个必须放在最前面
// import './customTheme'

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';


AppRegistry.registerComponent(appName, () => App);
