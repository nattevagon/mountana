import React from 'react'

export default function DropdownsContent({ id, className, children }) {
  return (
    <div
      className="absolute z-[10] hidden [&[data-te-dropdown-show]]:block"
      aria-labelledby={id}
      data-te-dropdown-menu-ref
    >
      <div className={"min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700"+(className ? " "+className : "")}>
        {children}
      </div>
    </div>
  )
}
