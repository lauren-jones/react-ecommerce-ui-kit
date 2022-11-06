import React, { useState } from "react";
import { ProductCounter } from "./ProductCounter";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { counter } from "@fortawesome/fontawesome-svg-core";

export default {
    title: 'Product Counter',
    component: ProductCounter,
} as ComponentMeta<typeof ProductCounter>;

const Template: ComponentStory<typeof ProductCounter> = (args) => {
    const [counter, setCounter] = useState(1);
    
    const HandleIncrease = () => {
        setCounter(counter + 1);
    }

    const HandleDecrease = () => {
        if (counter === 1) {
            setCounter(1);
        } else {
            setCounter(counter - 1);
        }
    }

    return <ProductCounter {...args} quantity={counter} HandleDecrease={HandleDecrease} HandleIncrease={HandleIncrease}/>;
};

export const Default = Template.bind({})
Default.args = {
    quantity: counter,
}