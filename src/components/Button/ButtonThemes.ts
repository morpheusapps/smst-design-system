export type Themes =
  | 'important'
  | 'positive'
  | 'primary'
  | 'secondary'
  | 'tertiary';

export interface ThemeProps {
  color: string;
  hoverColor: string;
  textColor: string;
  hoverTextColor?: string;
  borderColor?: string;
}

export const ThemesMap: Record<Themes, ThemeProps> = {
  important: {
    color: '#d43f3a',
    hoverColor: '#d9534f',
    textColor: 'white'
  },
  positive: {
    color: '#4cae4c',
    hoverColor: '#5cb85c',
    textColor: 'white'
  },
  primary: {
    color: '#40b4e5',
    hoverColor: '#70d5ff',
    textColor: 'white'
  },
  secondary: {
    color: 'white',
    hoverColor: '#40b4e5',
    textColor: '#40b4e5',
    hoverTextColor: 'white',
    borderColor: '#40b4e5'
  },
  tertiary: {
    color: '#6c757d',
    hoverColor: '#a6adb5',
    textColor: 'white'
  }
};
