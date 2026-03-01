import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div", {id : "parent"}, [React.createElement("div",{id: "child1"},[React.createElement("h1",{id : "heading"}, "Hello I'm H1 "),[React.createElement("h1",{id : "heading"}, "Hello I'm H1 H1 ")]]),
    React.createElement("div",{id: "child2"},[React.createElement("h1",{id : "heading"}, "Hello I'm Shivaraj ")])
]);

const heading = React.createElement("h1", {id : "heading"}, "Namaste React Shiva");
console.log(heading);
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent); 