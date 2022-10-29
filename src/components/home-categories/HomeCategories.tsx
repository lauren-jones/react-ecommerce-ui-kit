import React from "react";
import './home-categories.css';
import { HomeCategoriesItem } from "../home-categories-item";

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
            return (
               <div  className="home-category-wrapper" key={index}>
                  <HomeCategoriesItem category={HomeCategory.category} image={HomeCategory.image} url={HomeCategory.url} />
               </div>
            )
         })}
      </div>
    </div>
 )
};