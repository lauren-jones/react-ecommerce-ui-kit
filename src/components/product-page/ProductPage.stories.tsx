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
        description: "Has it been A DAY? We feel you. So here’s our advice; take a load off, grab a bottle of cheap-but-not-too-cheap wine, get naked and GET SALTY.",
        images: ["https://cdn.shopify.com/s/files/1/0270/1557/7715/products/Salts-WildRide2_1296x.jpg?v=1617888074"],
        name: 'Wild Ride',
        additionalInfo: [{title: 'Ingredients', content: 'Our unique blends of muscle-soothing Epsom salts, detoxifying Dead Sea salts and pink Himalayan rock salts hydrate your skin and relax your mind!'},
            {title: 'How to use', content: 'We recommend a full handful of salts for a relaxing bath, or two handfuls if you’ve got some aches to fix.'},
            {title: 'Delivery', content: 'We deliver across the UK via Royal Mail and offer two delivery options. Standard Delivery under £35 (3 - 5 working days) - £3.40. Special Delivery (1 - 2 working days) £5.00.'},
        ],
    }
};

export const Sale = Template.bind({})
Sale.args = {
    product: {
        onSale: true,
        currentPrice: 12.00,
        originalPrice: 15.50,
        description: "Has it been A DAY? We feel you. So here’s our advice; take a load off, grab a bottle of cheap-but-not-too-cheap wine, get naked and GET SALTY.",
        images: ["https://cdn.shopify.com/s/files/1/0270/1557/7715/products/Salts-WildRide2_1296x.jpg?v=1617888074"],
        name: 'Wild Ride',
        additionalInfo: [{title: 'Ingredients', content: 'Our unique blends of muscle-soothing Epsom salts, detoxifying Dead Sea salts and pink Himalayan rock salts hydrate your skin and relax your mind!'},
            {title: 'How to use', content: 'We recommend a full handful of salts for a relaxing bath, or two handfuls if you’ve got some aches to fix.'},
            {title: 'Delivery', content: 'We deliver across the UK via Royal Mail and offer two delivery options. Standard Delivery under £35 (3 - 5 working days) - £3.40. Special Delivery (1 - 2 working days) £5.00.'},
        ],
    }
};