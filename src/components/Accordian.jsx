import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; 
// import '../../src/styles.css';
  


function Accordion({ items }) {
  items = items || [
    {
      title: "JavaScript Basics",
      content: "Learn variables, functions, and loops in JavaScript."
    },
    {
      title: "React.js Overview",
      content: "Understand components, state, and props in React."
    },
    {
      title: "Node.js",
      content: "Basics of server-side development with Node.js."
    },
    {
      title: "Full-Stack Development",
      content: "Build full-stack apps with React and Node.js."
    },
  ];
  const [activeIndex, setActiveIndex] = useState(null);
const toggleAccordion = (index) => { 
    setActiveIndex(activeIndex === index ? null : index);
}

  return !items || (items.length === 0) ? "No items Available" : (
        <div className="accordion">
            {items.map((item, index) => {
                return (
                    <div key={index} className="accordion-item">
                      
                            <button className="accordion-title" onClick={() => toggleAccordion(index)}>
                                {item.title}
                                {activeIndex === index ? <FaChevronUp className="drop-down" /> : <FaChevronDown  className="drop-down"/>}
                            </button>
                            { activeIndex === index && 
                                <div className="accordion-content">
                                    {item.content}
                                </div>
                            }
                       
                    </div>
                );
            })}
        </div>
    );
}

export default Accordion;