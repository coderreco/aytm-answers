import * as React from "react";
import * as Types from "./types";

declare function ImageLeft2Lists(props: {
  as?: React.ElementType;
  sectionRightTextBasicVisibility?: Types.Visibility.VisibilityConditions;
  image?: Types.Asset.Image;
  headingText?: React.ReactNode;
  paragraphText?: React.ReactNode;
  listLeftVisibility?: Types.Visibility.VisibilityConditions;
  listLeftText?: Types.Basic.RichTextChildren;
  listRightVisibility?: Types.Visibility.VisibilityConditions;
  listRightText?: Types.Basic.RichTextChildren;
  buttonVisibility?: Types.Visibility.VisibilityConditions;
  buttonLink?: Types.Basic.Link;
  buttonText?: React.ReactNode;
}): React.JSX.Element;
