import React from "react";
import './announcement-bar.css';

export interface AnnouncementBarProps {
  announcement: string,
}

export const AnnouncementBar = ({announcement}: AnnouncementBarProps) => {
 return (
    <div className="announcement-bar">
        <p>{announcement}</p>
    </div>
 )
};