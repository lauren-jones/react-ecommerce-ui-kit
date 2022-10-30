import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import "./accordion.css";

export interface AccordionProps {
    /**
   * List of accordion items (with title and content)
   */
  additionalInfo: [{title: string, content: string}, {title: string, content: string}, {title: string, content: string}];
}

export const Accordion = ({additionalInfo}: AccordionProps) => {
    const [oneOpen, setOneOpen] = useState(false);
    const [twoOpen, setTwoOpen] = useState(false);
    const [threeOpen, setThreeOpen] = useState(false);

    const handleClick = (item: number): void => {
        switch(item){
            case 1:
                setOneOpen(!oneOpen);
                setTwoOpen(false);
                setThreeOpen(false);
                break;
            case 2:
                setOneOpen(false);
                setTwoOpen(!twoOpen);
                setThreeOpen(false);
                break;
            case 3:
                setOneOpen(false);
                setTwoOpen(false);
                setThreeOpen(!threeOpen);
                break;
            default:
                break; 
        }
    }

    return (
        <div className="accordion">
            <div className="accordion-item">
                <a className="accordion-header" onClick={() => handleClick(1)}>
                    <h3>{additionalInfo[0].title}</h3>
                    <>{oneOpen ? <FontAwesomeIcon icon={faMinus} className="accordion-icon"/> : <FontAwesomeIcon icon={faPlus} className="accordion-icon"/>}</>
                </a>
                <>{oneOpen ? <p className="accordion-item-content">{additionalInfo[0].content}</p> : null}</>
            </div>
            <div className="accordion-item">
                <a className="accordion-header" onClick={() => handleClick(2)}>
                    <h3>{additionalInfo[1].title}</h3>
                    <>{twoOpen ? <FontAwesomeIcon icon={faMinus} className="accordion-icon"/> : <FontAwesomeIcon icon={faPlus} className="accordion-icon"/>}</>
                </a>
                <>{twoOpen ? <p className="accordion-item-content">{additionalInfo[1].content}</p> : null}</>
            </div>
            <div className="accordion-item">
                <a className="accordion-header" onClick={() => handleClick(3)}>
                    <h3>{additionalInfo[2].title}</h3>
                    <>{threeOpen ? <FontAwesomeIcon icon={faMinus} className="accordion-icon"/> : <FontAwesomeIcon icon={faPlus} className="accordion-icon"/>}</>
                </a>
                <>{threeOpen ? <p className="accordion-item-content">{additionalInfo[2].content}</p> : null}</>
            </div>
        </div>
    )
}