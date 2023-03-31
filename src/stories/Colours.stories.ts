import ColoursStory from '../stories/ColoursStory.vue'

export default {
    title: 'Colours',
    component: ColoursStory,
};

const Template = () => ({
    components: { ColoursStory },
    template: '<ColoursStory />',
});

export const Colours = Template.bind({});
