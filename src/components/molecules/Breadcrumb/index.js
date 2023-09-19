import React from "react";
import { Breadcrumbs } from "@material-tailwind/react";

export default function Breadcrumb(props) {
  return (
    <Breadcrumbs className="bg-transparent pl-0 mb-4">
      <a href={process.env.PUBLIC_URL+"/"} className="opacity-60">
        HOME
      </a>
      {props.parent ?
        <a href={process.env.PUBLIC_URL+"/"+props.parent} className="opacity-60">
          {(props.parent).toUpperCase()}
        </a>
        : null
      }
      {props.child ?
        <a href={process.env.PUBLIC_URL+"/"+props.parent+"/"+props.child} className="opacity-60">
          {(props.child).toUpperCase()}
        </a>
        : null
      }
      {props.subChild ?
        <a href={process.env.PUBLIC_URL+"/"+props.parent+"/"+props.child+"/"+props.subChild} className="opacity-60">
          {(props.subChild).toUpperCase()}
        </a>
        : null
      }
    </Breadcrumbs>
  )
}
