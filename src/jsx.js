import React from "react";

const jsx = () => {
  const element1 = <div id="root">Hello world</div>;
  const element2 = React.createElement("div", { id: "root" }, "Hello world");
  const element3 = (
    <div>
      <span>Hello</span>
      <span>World</span>
    </div>
  );

  const element4 = React.createElement("div", {
    children: [
      React.createElement("span", null, "Hello"),
      " ",
      React.createElement("span", null, "World"),
    ],
  });
  return <div className="heading" id="heading">
    this is heading 
  </div>
};

export default jsx;
