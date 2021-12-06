import { setCompodocJson } from "@storybook/addon-docs/angular";
import { themes } from "@storybook/theming";
import docJson from "../documentation.json";

setCompodocJson(docJson);

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "store",
    toolbar: {
      icon: "circlehollow",
      items: ["company", "store"],
    },
  },
};

export const decorators = [
  (storyFunc, context) => {
    const story = storyFunc();
    if (document.body.classList.contains("company-theme")) {
      document.body.classList.remove("company-theme");
    }
    if (document.body.classList.contains("store-theme")) {
      document.body.classList.remove("store-theme");
    }
    document.body.classList.add(context.globals.theme + "-theme");
    console.log(global);
    return story;
  },
];

export const MINIMAL_VIEWPORTS = {
  mobile: {
    name: "Mobile",
    styles: {
      height: "736px",
      width: "390px",
    },
    type: "mobile",
  },
  tablet: {
    name: "Tablet",
    styles: {
      height: "1024px",
      width: "769px",
    },
    type: "tablet",
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    theme: themes.dark,
  },
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
  },
};
