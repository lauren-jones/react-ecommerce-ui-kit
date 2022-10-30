import React from "react";
import { ProductCounter } from "./ProductCounter";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Product Counter',
    component: ProductCounter,
} as ComponentMeta<typeof ProductCounter>;

const Template: ComponentStory<typeof ProductCounter> = (args) => <ProductCounter {...args} />;

export const Default = Template.bind({})
Default.args = {
    quantity: 1,
}