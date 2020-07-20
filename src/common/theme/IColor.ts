import {ThemeMode} from "./ThemeProvider";

export class IColor {
    static quaternaryGray() {
        return 'gray'
    }
    static orange(theme:ThemeMode) {
        if (theme === ThemeMode.dark) {
            return '#FFA500';
        }
        return '#aaA500';
    }
}
