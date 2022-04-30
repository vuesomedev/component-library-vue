import Button from '../buttons/Button.vue';

export default {
  title: 'Example/Button',
  component: Button,
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args" />',
});

//👇 Each story then reuses that template
export const Default = Template.bind({});
