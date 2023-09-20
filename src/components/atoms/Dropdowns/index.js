import React, { useEffect } from 'react';
// Initialization for ES Users
import { Dropdown, initTE, } from "tw-elements";

export default function Dropdowns({ className, children }) {
  useEffect(() => {
    initTE({ Dropdown });
  }, []);

  return (
    <div className={"relative container" + (className ? " " + className : "")} data-te-dropdown-ref data-te-dropdown-alignment="end">
      {children}
    </div>
  )
}
