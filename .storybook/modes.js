/**
 * Object containing all the available modes.
 * @typedef {Object} AllModes
 * @property {Object} xsm - Extra small mode.
 * @property {string} xsm.viewport - Viewport size for extra small mode.
 * @property {Object} md - Medium mode.
 * @property {string} md.viewport - Viewport size for medium mode.
 * @property {Object} xl - Extra large mode.
 * @property {string} xl.viewport - Viewport size for extra large mode.
 * @property {Object} 2xl - Double extra large mode.
 * @property {string} 2xl.viewport - Viewport size for double extra large mode.
 */

/**
 * Object containing all the available modes.
 * @type {AllModes}
 */
export const allModes = {
  xsm: {
    viewport: "xsm",
  },
  md: {
    viewport: "md",
  },
  xl: {
    viewport: "xl",
  },
  "2xl": {
    viewport: "2xl",
  },
};
