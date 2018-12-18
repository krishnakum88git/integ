import React from "react"
import Img from "gatsby-image"

export const objectFitShim = (fit = 'cover', position = '50% 50%') => ({
  objectFit: fit,
  objectPosition: position,
  fontFamily: `"object-fit: ${fit}; object-position: ${position}"`
})

// we wrap the gatsby image component with this component to add the fontFamily
// style that the object-fit-image polyfill library needs to make "object-fit: cover;"
// work in IE
export default ({ objFit, objPosition, ...props }) =>(
    <Img
      {...props}
      imgStyle={{
        ...props.imgStyle,
        ...objectFitShim(objFit, objPosition)
      }}
    />
  )