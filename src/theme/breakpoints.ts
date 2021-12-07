const breakpoints = {
  sm: '991px',
  md: '1200px',
};

export default {
  inSmallScreen: `@media (max-width: ${breakpoints.sm})`,
  inMediumScreen: `@media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md})`,
  inLargeScreen: `@media (min-width: ${breakpoints.md})`,
};
