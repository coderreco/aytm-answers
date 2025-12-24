import * as React from "react";
import * as Types from "./types";

declare function ImageSectionTextRight(props: {
  as?: React.ElementType;
  mainHeadingText?: React.ReactNode;
  mainContent?: Types.Basic.RichTextChildren;
  buttonText?: React.ReactNode;
  buttonLink?: Types.Basic.Link;
  image?: Types.Asset.Image;
  h3Visibility?: Types.Visibility.VisibilityConditions;
  h3Text?: React.ReactNode;
}): React.JSX.Element;
