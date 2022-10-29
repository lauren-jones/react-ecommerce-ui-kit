import React from "react";
import './top-menu.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export interface TopMenuProps {}

export const TopMenu = () => {
 return (
    <div className="top-menu">
        <FontAwesomeIcon icon={faBars}/>
    </div>
 )
};