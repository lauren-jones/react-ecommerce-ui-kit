import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ImageGallery } from './ImageGallery';

export default {
    title: 'Image Gallery',
    component: ImageGallery,
} as ComponentMeta<typeof ImageGallery>;

const Template: ComponentStory<typeof ImageGallery> = (args) => <ImageGallery {...args} />;

export const Default = Template.bind({})
Default.args = {
    images: ["https://cdn.shopify.com/s/files/1/0270/1557/7715/products/Salts-WildRide2_1296x.jpg?v=1617888074", "https://cdn.shopify.com/s/files/1/0270/1557/7715/products/Salts-WildRide1_1728x.jpg?v=1617888074", "https://cdn.shopify.com/s/files/1/0270/1557/7715/products/WildRideBathSaltRefill_1728x.jpg?v=1617888074"],
}