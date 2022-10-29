import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Price } from "./Price";

export default {
    title: 'Price',
    component: Price,
} as ComponentMeta<typeof Price>;

const Template: ComponentStory<typeof Price> = (args) => <Price {...args} />

export const Full = Template.bind({});
    Full.args = {
        currentPrice: 7.50,
        onSale: false,
    }

export const Discounted = Template.bind({});
    Discounted.args = {
        currentPrice: 7.50,
        onSale: true,
        originalPrice: 9.50, 
    }