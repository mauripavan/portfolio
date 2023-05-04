import React from "react";

const scrollToSection = (section: string) => {
  const element = document.getElementById(section);
  element?.scrollIntoView({ behavior: "smooth" });
};

export { scrollToSection };
