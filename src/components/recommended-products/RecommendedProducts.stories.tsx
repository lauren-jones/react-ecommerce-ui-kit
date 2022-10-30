import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RecommendedProducts } from "./RecommendedProducts";

export default {
  title: 'You may also like...',
  component: RecommendedProducts,
} as ComponentMeta<typeof RecommendedProducts>;

const Template: ComponentStory<typeof RecommendedProducts> = (args) => <RecommendedProducts {...args} />

export const Default = Template.bind({});
  Default.args = {
    products: [{
        onSale: false,
        currentPrice: 12.00,
        originalPrice: 12.00,
        images: ["https://cdn.shopify.com/s/files/1/0270/1557/7715/products/Salts-WildRide2_1296x.jpg?v=1617888074",
        "https://cdn.shopify.com/s/files/1/0270/1557/7715/products/Salts-WildRide1_1728x.jpg?v=1617888074"],
        name: 'Wild Ride',
    },
    {
        onSale: true,
        currentPrice: 12.00,
        originalPrice: 17.00,
        images: ["https://cdn.shopify.com/s/files/1/0270/1557/7715/products/Salts-WildRide2_1296x.jpg?v=1617888074",
        "https://cdn.shopify.com/s/files/1/0270/1557/7715/products/Salts-WildRide1_1728x.jpg?v=1617888074"],
        name: 'Wild Ride',
    },
    {
        onSale: false,
        currentPrice: 12.00,
        originalPrice: 12.00,
        images: ["https://cdn.shopify.com/s/files/1/0270/1557/7715/products/Salts-WildRide2_1296x.jpg?v=1617888074",
        "https://cdn.shopify.com/s/files/1/0270/1557/7715/products/Salts-WildRide1_1728x.jpg?v=1617888074"],
        name: 'Wild Ride',
    }]
  };