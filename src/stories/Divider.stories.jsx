import { Divider } from '../component/divider/Divider';

export default {
  title: 'Example/Divider',
  component: Divider,
};

const Template = (args) => <Divider {...args} />;

export const Default = Template.bind({});
Default.args = {
  weight: 'light',
  align: 'center',
  style: 'solid',
  label: 'Center',
};