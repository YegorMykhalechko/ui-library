import Grid from '../components/Grid/Grid.vue';
import GridCol from  '../components/Grid/GridCol.vue'

export default {
    title: 'Grid',
    component: Grid,
};

const Template = () => ({
    components: { Grid, GridCol },
    template: '<Grid><GridCol span="1/3">1/3</GridCol><GridCol span="3/8">3/8</GridCol></Grid>',
});

export const GridStory = Template.bind({});
