import React from "react";
import { ProductPage } from "./ProductPage";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Product Page',
    component: ProductPage,
} as ComponentMeta<typeof ProductPage>;

const Template: ComponentStory<typeof ProductPage> = (args) => <ProductPage {...args} />;

export const Default = Template.bind({})
Default.args = {
    product: {
        onSale: false,
        currentPrice: 12.00,
        originalPrice: 12.00,
        images: ["https://cdn.shopify.com/s/files/1/0270/1557/7715/products/Salts-WildRide2_1296x.jpg?v=1617888074", "https://cdn.shopify.com/s/files/1/0270/1557/7715/products/Salts-WildRide1_1728x.jpg?v=1617888074", "https://cdn.shopify.com/s/files/1/0270/1557/7715/products/WildRideBathSaltRefill_1728x.jpg?v=1617888074"],
        name: 'Wild Ride',
        additionalInfo: [{title: 'Description', content: 'Lots of content here and interesting things to say.'},
        {title: 'How To Use', content: 'Lots of content here and interesting things to say.'},
        {title: 'Ingredients', content: 'Lots of content here and interesting things to say.'},
        ],
    }
};