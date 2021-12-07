import { borders, breakpoints, colors, radius, spacings } from '~/theme';

declare type Borders = typeof borders;
declare type Breakpoints = typeof breakpoints;
declare type Radius = typeof radius;
declare type Colors = typeof colors;
declare type Spacings = typeof spacings;

declare type SubColors = {
  light: string;
  main: string;
  dark: string;
  contrast: string;
};

declare type Theme = Borders & Colors & Radius & Spacings & Breakpoints;
