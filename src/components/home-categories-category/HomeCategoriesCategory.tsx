import React from "react";
import './home-categories-category.css';
import { Link } from "react-router-dom";

export interface HomeCategoriesCategoryProps {
   HomeCategory: {
      category: string,
      image: string,
      url: string,
   }
}

export const HomeCategoriesCategory = (props: HomeCategoriesCategoryProps) => {
const {url, category, image} = props.HomeCategory;

 return (
   <Link to={url} className="home-category-link">
      <div className="home-categories-category">
         <img src={image} className='home-category-image'/>
         <h3 className="home-category-title">{category}</h3>
      </div>
   </Link>
 )
};