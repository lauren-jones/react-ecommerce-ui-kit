import React from "react";
import { HomeCategories } from "./HomeCategories";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Trending categories',
    component: HomeCategories,
} as ComponentMeta<typeof HomeCategories>;

const Template: ComponentStory<typeof HomeCategories> = (args) => <HomeCategories {...args} />;

export const Default = Template.bind({})
Default.args = {
    HomeCategories: [
      {
         category: "Salts",
         image: "https://cdn.shopify.com/s/files/1/0270/1557/7715/files/Cruelty_Free_Bath_Salts_540x.jpg?v=1631643623",
         url: "/",
      },
      {
         category: "Steams",
         image: "https://cdn.shopify.com/s/files/1/0270/1557/7715/files/Facial_Steams_540x.jpg?v=1631643668",
         url: "/",
      },
      {
         category: "Masks",
         image: "https://cdn.shopify.com/s/files/1/0270/1557/7715/files/Facial_Steams_540x.jpg?v=1631643668",
         url: "/",
      },
      {
         category: "Gifts",
         image: "https://cdn.shopify.com/s/files/1/0270/1557/7715/files/Natural_Salt_Body_Scrub_d3a3d698-17d0-45c7-b637-03bebef0b874_540x.jpg?v=1631643780",
         url: "/",
      },
   ]
};