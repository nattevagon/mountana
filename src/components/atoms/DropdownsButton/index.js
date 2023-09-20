import React from 'react'

export default function DropdownsButton({ id, children }) {
  return (
    <div
      id={id}
      data-te-dropdown-toggle-ref
      aria-expanded="false"
    >
      {children}
    </div>
  )
}
