import React from "react";
import './home-categories-item.css';
import { Link } from "react-router-dom";

export interface HomeCategoriesItemProps {
      category: string,
      image: string,
      url: string,
}

export const HomeCategoriesItem = ({category, image, url}: HomeCategoriesItemProps) => {

 return (
   <Link to={url} className="home-category-link">
      <div className="home-categories-item">
         <img src={image} className='home-category-image'/>
         <h3 className="home-category-title">{category}</h3>
      </div>
   </Link>
 )
};