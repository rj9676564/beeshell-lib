import * as React from 'react';
import {Theme} from './Theme';
import {Appearance, Text} from 'react-native';
import {ColorSchemeName} from 'react-native-appearance/src/Appearance.types';
export declare interface IBUThemeProviderProps {}
export declare interface IBUThemeProviderState {
  theme: Theme;
}
export const ThemeContext = React.createContext<'light' | 'dark'>('light');
const isInChromeDebugMode = false;
//ThemeProvider
export enum ThemeMode {
  light = 'light',
  dark = 'dark',
}
export class ThemeProvider extends React.Component<
  IBUThemeProviderProps,
  IBUThemeProviderState
> {
  // 引入文件时同步获取一次 theme
  public static theme: ThemeMode = isInChromeDebugMode
    ? ThemeMode.light
    : Theme.getTheme();

  constructor(props: IBUThemeProviderProps) {
    super(props);
    // 实例创建时, 再次同步一次theme
    const theme: ThemeMode = isInChromeDebugMode
      ? ThemeMode.dark
      : Theme.getTheme();
    ThemeProvider.theme = theme;
    this.state = {
      theme: theme,
    };
  }

  componentDidMount() {
    let colorSchemeName: ColorSchemeName = Appearance.getColorScheme();
    if (colorSchemeName === 'light') {
      ThemeProvider.theme = ThemeMode.light;
    } else {
      ThemeProvider.theme = ThemeMode.dark;
    }
    this.setState({
      theme: ThemeProvider.theme,
    });
    Appearance.addChangeListener(({colorScheme}) => {
      console.log(colorScheme);
      alert('klsfdj');
    });
  }
  componentWillUnmount() {}

  render(): JSX.Element {
    const {theme} = this.state;
    const {children} = this.props;
    return (
      <ThemeContext.Provider value={theme}>
        <Text
          style={{fontSize: 20, padding: 20}}
          onPress={() => {
            if (this.state.theme === ThemeMode.light) {
              this.setState({
                theme: ThemeMode.dark,
              });
            } else {
              this.setState({
                theme: ThemeMode.light,
              });
            }
          }}>
          switch {this.state.theme}
        </Text>
        {children}
      </ThemeContext.Provider>
    );
  }
}
