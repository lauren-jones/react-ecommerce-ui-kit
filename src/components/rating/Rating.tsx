import React from 'react';
import './rating.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export interface RatingProps {
    /**
   * Rating out of 5
   */
  stars: 0 | 1 | 2 | 3 | 4 | 5;
}

export const Rating = ({stars}: RatingProps) => {
    return (
        <div className="Rating-container">
            <FontAwesomeIcon icon={faStar} className={`Rating-star ${stars > 0 ? "pink" : "grey"}`}/>
            <FontAwesomeIcon icon={faStar} className={`Rating-star ${stars > 1 ? "pink" : "grey"}`}/>
            <FontAwesomeIcon icon={faStar} className={`Rating-star ${stars > 2 ? "pink" : "grey"}`}/>
            <FontAwesomeIcon icon={faStar} className={`Rating-star ${stars > 3 ? "pink" : "grey"}`}/>
            <FontAwesomeIcon icon={faStar} className={`Rating-star ${stars > 4 ? "pink" : "grey"}`}/>
        </div>
    )
}