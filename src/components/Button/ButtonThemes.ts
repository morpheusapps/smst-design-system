export type Themes =
  | 'negative'
  | 'positive'
  | 'primary'
  | 'secondary'
  | 'tertiary';

export interface ThemeProps {
  color: string;
  hoverColor: string;
  activeColor: string;
  textColor: string;
  hoverTextColor?: string;
  borderColor?: string;
}

export const ThemesMap: Record<Themes, ThemeProps> = {
  negative: {
    color: '#b53f53',
    hoverColor: '#e34f68',
    activeColor: '#b53f53',
    textColor: 'white'
  },
  positive: {
    color: '#4cae4c',
    hoverColor: '#63db63',
    activeColor: '#4cae4c',
    textColor: 'white'
  },
  primary: {
    color: '#389ec9',
    hoverColor: '#70d5ff',
    activeColor: '#389ec9',
    textColor: 'white'
  },
  secondary: {
    color: 'white',
    hoverColor: '#389ec9',
    activeColor: '#b53f53',
    textColor: '#389ec9',
    hoverTextColor: 'white',
    borderColor: '#389ec9'
  },
  tertiary: {
    color: '#6c757d',
    hoverColor: '#a6adb5',
    activeColor: '#b53f53',
    textColor: 'white'
  }
};
