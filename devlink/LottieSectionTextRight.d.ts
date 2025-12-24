import * as React from "react";
import * as Types from "./types";

declare function LottieSectionTextRight(props: {
  as?: React.ElementType;
  mainHeadingText?: React.ReactNode;
  mainContent?: Types.Basic.RichTextChildren;
  buttonText?: React.ReactNode;
  buttonLink?: Types.Basic.Link;
}): React.JSX.Element;
