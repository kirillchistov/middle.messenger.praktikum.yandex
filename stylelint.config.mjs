/** @type {import("stylelint").Config} */
export default {
  extends: ["stylelint-config-standard"],
  rules: {
    "selector-class-pattern": null,
    "identation": 2,
    "color-hex-length": "short",
  },
  ignoreFiles: ["dist/**", "node_modules/**"],
};
