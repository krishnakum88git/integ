import React from "react"
import Img from "gatsby-image"

// we wrap the gatsby image component with this component to add the fontFamily
// style that the object-fit-image polyfill library needs to make "object-fit: cover;"
// work in IE
export default ({ objFit = `cover`, objPosition = `50% 50%`, ...props }) =>(
    <Img
      {...props}
      imgStyle={{
        ...props.imgStyle,
        objectFit: objFit,
        objectPosition: objPosition,
        fontFamily: `"object-fit: ${objFit}; object-position: ${objPosition}"`,
      }}
    />
  )