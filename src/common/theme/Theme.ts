import {ThemeMode} from './ThemeProvider';

export class Theme {
  // @ts-ignore
  static getTheme(): ThemeMode {
    return ThemeMode.light;
  }
}
