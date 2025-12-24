import * as React from "react";
import * as Types from "./types";

declare function ImageSectionTextLeft(props: {
  as?: React.ElementType;
  mainHeadingText?: React.ReactNode;
  mainContent?: Types.Basic.RichTextChildren;
  buttonText?: React.ReactNode;
  buttonLink?: Types.Basic.Link;
  image?: Types.Asset.Image;
}): React.JSX.Element;
