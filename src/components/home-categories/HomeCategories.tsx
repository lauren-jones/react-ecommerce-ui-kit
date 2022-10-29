import React from "react";
import './home-categories.css';
import { HomeCategoriesCategory } from "../home-categories-category";

export interface HomeCategoriesProps {
   HomeCategories: [
      {
         category: string,
         image: string,
         url: string,
      },
      {
         category: string,
         image: string,
         url: string,
      },
      {
         category: string,
         image: string,
         url: string,
      },
      {
         category: string,
         image: string,
         url: string,
      },
   ]
}

export const HomeCategories = ({HomeCategories}: HomeCategoriesProps) => {
 return (
    <div className="home-categories">
      <h2>Salty Goodness</h2>
      <div className="home-categories-row">
         {HomeCategories.map(function (HomeCategory, index) {
            if (index < 4) {
              return (
                <div className="home-category-wrapper" key={index}>
                  <HomeCategoriesCategory HomeCategory={HomeCategory} />
                </div>
              );
            } else {
              return null;
            }
          })}
      </div>
    </div>
 )
};