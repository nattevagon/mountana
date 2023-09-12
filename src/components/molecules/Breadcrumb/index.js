import React from 'react';
import { Breadcrumbs } from "@material-tailwind/react";

export default function Breadcrumb(props) {
  return (
    <Breadcrumbs className='bg-transparent pl-0'>
      <a href="/" className="opacity-60">
        HOME
      </a>
      {props.parent ?
        <a href={"/"+props.parent} className="opacity-60">
          {(props.parent).toUpperCase()}
        </a>
        : null
      }
      {props.child ?
        <a href={"/"+props.parent+"/"+props.child} className="opacity-60">
          {(props.child).toUpperCase()}
        </a>
        : null
      }
    </Breadcrumbs>
  )
}
