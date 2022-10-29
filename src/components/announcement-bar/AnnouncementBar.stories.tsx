import React from "react";
import { AnnouncementBar } from "./AnnouncementBar";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Announcement bar',
    component: AnnouncementBar,
} as ComponentMeta<typeof AnnouncementBar>;

const Template: ComponentStory<typeof AnnouncementBar> = (args) => <AnnouncementBar {...args} />;

export const Default = Template.bind({})
Default.args = {
    announcement: "free delivery on all UK orders over £35",
};