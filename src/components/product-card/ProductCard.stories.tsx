import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProductCard } from "./ProductCard";

export default {
  title: 'Product Card',
  component: ProductCard,
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = (args) => <ProductCard {...args} />

export const Default = Template.bind({});
  Default.args = {
    product: {
        onSale: false,
        stars: 2,
        currentPrice: 12.00,
        originalPrice: 12.00,
        images: ["https://cdn.shopify.com/s/files/1/0270/1557/7715/products/Salts-WildRide2_1296x.jpg?v=1617888074", "https://cdn.shopify.com/s/files/1/0270/1557/7715/products/Salts-WildRide1_1728x.jpg?v=1617888074"],
        name: 'Wild Ride',
        additionalInfo: [{title: 'Description', content: 'Lots of content here and interesting things to say.'},
        {title: 'How To Use', content: 'Lots of content here and interesting things to say.'},
        {title: 'Ingredients', content: 'Lots of content here and interesting things to say.'},
        ],
    }
  };

export const Sale = Template.bind({});
  Sale.args = {
    product: {
        stars: 5,
        onSale: true,
        currentPrice: 9.50,
        originalPrice: 12.50,
        images: ["https://cdn.shopify.com/s/files/1/0270/1557/7715/products/Salts-WildRide2_1296x.jpg?v=1617888074", "https://cdn.shopify.com/s/files/1/0270/1557/7715/products/Salts-WildRide1_1728x.jpg?v=1617888074"],
        name: 'Wild Ride',
        additionalInfo: [{title: 'Description', content: 'Lots of content here and interesting things to say.'},
        {title: 'How To Use', content: 'Lots of content here and interesting things to say.'},
        {title: 'Ingredients', content: 'Lots of content here and interesting things to say.'},
        ],
    }
  };