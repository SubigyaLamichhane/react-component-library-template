import { addons } from "@storybook/manager-api";
import harnessTheme from "./harnessTheme";

addons.setConfig({
  theme: harnessTheme,
});
