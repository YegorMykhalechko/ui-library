import { UiGridCol } from "../../components/UiLoyout";
import LayoutStory from "./LayoutStory.vue";

import "../main.css";

export default {
  title: "Loyout",
  component: UiGridCol,
};

const Template = () => ({
  components: { LayoutStory },
  template: '<LayoutStory />',
});

export const Grid = Template.bind({});
