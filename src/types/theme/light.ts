import getMuiTheme from "./mui";

const light = {
  name: "light",

  // MUI theme
  ...getMuiTheme("light"),

  zigWalletIndicator: {
    valueTextColor: "#FFFFFF",
    levelTextColor: "#706F82",
    tokenTextColor: "#9864EF",
  },
};

export default light;
