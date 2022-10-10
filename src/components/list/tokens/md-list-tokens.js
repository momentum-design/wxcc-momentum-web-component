/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const colors = require("@momentum-ui/tokens/dist/colors.json");

const list = {
  prefix: "md",
  component: "list",
  "text-color": {
    light: colors.gray[100].name,
    dark: colors.gray["05"].name
  },
  hover: {
    background: {
      light: colors.blue[10].name,
      dark: colors.blue[80].name
    }
  },
  disabled: {
    "text-color": {
      light: colors.gray[40].name,
      dark: colors.gray[70].name
    }
  },
  active: {
    background: {
      light: colors.blue[20].name,
      dark: colors.blue[70].name
    }
  },
  focus: {
    "border-color": {
      light: colors.blue[60].name,
      dark: colors.blue[40].name
    }
  }
};

module.exports = list;
