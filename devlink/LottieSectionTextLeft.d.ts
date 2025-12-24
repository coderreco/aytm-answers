import * as React from "react";
import * as Types from "./types";

declare function LottieSectionTextLeft(props: {
  as?: React.ElementType;
  headingText?: React.ReactNode;
  textContent?: Types.Basic.RichTextChildren;
  buttonText?: React.ReactNode;
  buttonLink?: Types.Basic.Link;
}): React.JSX.Element;
