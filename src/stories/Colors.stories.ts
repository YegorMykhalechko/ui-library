import ColorsStory from './ColorsStory.vue'

export default {
    title: 'Colors',
    component: ColorsStory,
};

const Template = () => ({
    components: { ColorsStory },
    template: '<ColorsStory />',
});

export const Colors = Template.bind({});
