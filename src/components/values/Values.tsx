import React from 'react';
import './values.css';

export interface ValuesProps {
        /**
   * Section header
   */
  title: string,
    /**
   * Three things to call out to customers
   */
  values: [{ heading: string, description: string, image: string}, { heading: string, description: string, image: string}, { heading: string, description: string, image: string}]
}

export const Values = ({values, title}: ValuesProps) => {
    return (
        <div className="values">
            <h2>{title}</h2>
            <div className="values-container">
                {values.map(function (value, index) {
                    return (
                        <div key={index} className="value-container">
                            <img src={value.image} />
                            <h3>{value.heading}</h3>
                            <p>{value.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}