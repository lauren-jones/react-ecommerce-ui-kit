import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Values } from "./Values";

export default {
  title: 'Our ethics',
  component: Values,
} as ComponentMeta<typeof Values>;

const Template: ComponentStory<typeof Values> = (args) => <Values {...args} />

export const Ethics = Template.bind({});
  Ethics.args = {
    title: "Our ethics",
    values: [{
        heading: "100% Cruelty Free",
        description: "We're proud to be totally cruelty free - none of our ingredients or finished products are tested on animals!",
        image: "https://cdn.shopify.com/s/files/1/0270/1557/7715/files/bunny_png_720x.png?v=1627920723",
    },
    {
        heading: "Totally Eco-Friendly",
        description: "Our products and packaging are 100% plastic-free! We're talking compostable, biodegradable & re-useable only.",
        image: "https://cdn.shopify.com/s/files/1/0270/1557/7715/files/earth_copy_720x.png?v=1627920852",
    },
    {
        heading: "Completely Vegan",
        description: "We're big animal lovers, so we don't use any animal products or by-products in our goodies!",
        image: "https://cdn.shopify.com/s/files/1/0270/1557/7715/files/leaf_copy_720x.png?v=1627921009",
    }]
  };