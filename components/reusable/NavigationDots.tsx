import React from "react";

interface Props {
  active: string;
}

const NavigationDots = ({ active }: Props) => (
  <div className="app__navigation">
    {["home", "about", "work", "skills", "contact"].map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        style={active === item ? { backgroundColor: "#313BAC" } : {}}
      />
    ))}
  </div>
);

export default NavigationDots;
