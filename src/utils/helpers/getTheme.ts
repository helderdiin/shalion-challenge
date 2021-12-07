import { get } from 'lodash';
import { Colors, SubColors, Theme } from '../types/theme';

type Concat<S1 extends string, S2 extends string> = `${S1}.${S2}`;

type themePropType<T> = T extends Colors
  ? keyof T | Concat<keyof Colors, keyof SubColors>
  : keyof T;

type GetThemeReturn = (props: { theme: Theme }) => string | number;

export const getTheme =
  (themeProp: themePropType<Theme>): GetThemeReturn =>
  ({ theme }) =>
    get(theme, themeProp);
