export default {
  extends: ["stylelint-config-standard"],
  rules: {
    'selector-class-pattern': null,
    'color-hex-length': "short",
    'color-function-notation': null,
    'alpha-value-notation': null,
    'color-function-alias-notation': null,
    'custom-property-empty-line-before': null,
    'media-feature-range-notation': null,
    'color-hex-length': null,
    'no-descending-specificity': null,
    'no-duplicate-selectors': null,
  },
  ignoreFiles: ["dist/**", "node_modules/**"],
};
