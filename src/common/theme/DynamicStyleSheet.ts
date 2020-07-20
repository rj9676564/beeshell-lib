import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {ThemeProvider} from './ThemeProvider';

type NamedStyles<T> = {[P in keyof T]: ViewStyle | TextStyle | ImageStyle};

export function DynamicStyleSheet<T extends NamedStyles<T> | NamedStyles<any>>(
  callback: () => T | NamedStyles<T>,
): (theme?: 'light' | 'dark') => T {
  const cache: {light?: T; dark?: T} = {
    light: undefined,
    dark: undefined,
  };
  return (theme?: 'light' | 'dark'): T => {
    const currentTheme = theme || ThemeProvider.theme;
    let style = cache[currentTheme];
    if (!style) {
      style = StyleSheet.create(callback());
      cache[currentTheme] = style;
    }
    return style;
  };
}
