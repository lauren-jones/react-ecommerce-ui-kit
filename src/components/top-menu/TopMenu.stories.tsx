import React from "react";
import { TopMenu } from "./TopMenu";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Top Menu',
    component: TopMenu,
} as ComponentMeta<typeof TopMenu>;

const Template: ComponentStory<typeof TopMenu> = (args) => <TopMenu {...args} />;

export const Default = Template.bind({})
Default.args = {};