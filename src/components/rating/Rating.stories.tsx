import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Rating } from "./Rating";

export default {
    title: 'Rating',
    component: Rating,
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />

export const Five = Template.bind({});
    Five.args = {
        stars: 5,
    };

export const Three = Template.bind({});
    Three.args = {
        stars: 3,
    };

export const Zero = Template.bind({});
    Zero.args = {
        stars: 0,
    };