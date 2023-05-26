/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: "default",
      values: [
        { name: "default", value: "gray" },
        { name: "light", value: "white" },
        { name: "dark", value: "black" },
      ],
    },
  },
};

export default preview;
