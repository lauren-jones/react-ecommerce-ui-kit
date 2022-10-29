import React from "react";
import { HomeCategoriesCategory } from "./HomeCategoriesCategory";
import { ComponentStory, ComponentMeta } from '@storybook/react';


export default {
    title: 'Trending categories item',
    component: HomeCategoriesCategory,
} as ComponentMeta<typeof HomeCategoriesCategory>;

const Template: ComponentStory<typeof HomeCategoriesCategory> = (args) => <HomeCategoriesCategory {...args} />;

export const Default = Template.bind({})
Default.args = {
    HomeCategory: {
      category: "Salts",
      image: "https://cdn.shopify.com/s/files/1/0270/1557/7715/files/Cruelty_Free_Bath_Salts_720x.jpg?v=1631643623",
      url: "/",
    }
};