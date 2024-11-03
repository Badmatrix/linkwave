/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

function Tab({ children, className, to }) {
  return (
    <NavLink to={to}>
      <Button
        size="sm"
        className={`flex items-center gap-3 text-xs font-medium capitalize text-primary-300 ${className}`}
      >
        {children}
      </Button>
    </NavLink>
  );
}

export default Tab;
