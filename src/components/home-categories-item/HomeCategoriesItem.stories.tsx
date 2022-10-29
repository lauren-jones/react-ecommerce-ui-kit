import React from "react";
import { HomeCategoriesItem } from "./HomeCategoriesItem";
import { ComponentStory, ComponentMeta } from '@storybook/react';


export default {
    title: 'Trending categories item',
    component: HomeCategoriesItem,
} as ComponentMeta<typeof HomeCategoriesItem>;

const Template: ComponentStory<typeof HomeCategoriesItem> = (args) => <HomeCategoriesItem {...args} />;

export const Default = Template.bind({})
Default.args = {
    category: "Salts",
    image: "https://cdn.shopify.com/s/files/1/0270/1557/7715/files/Cruelty_Free_Bath_Salts_720x.jpg?v=1631643623",
    url: "/",
};