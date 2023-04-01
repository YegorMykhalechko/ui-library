import { UiGrid, UiGridCol, UiContainer } from "../components/UiLoyout";

import "./main.css";

export default {
  title: "Loyout",
  component: UiGrid,
};

const Template = () => ({
  components: { UiGrid, UiGridCol, UiContainer },
  template:
    '<UiContainer><UiGrid><UiGridCol span="2" lgSpan="1">span 2/lg 1</UiGridCol><UiGridCol span="1" mdSpan="4">span 1/ md 4/ lg 5</UiGridCol><UiGridCol span="1" mdSpan="6">span 1/ md6</UiGridCol></UiGrid></UiContainer>',
});

export const Grid = Template.bind({});
