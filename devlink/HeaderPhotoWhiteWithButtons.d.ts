import * as React from "react";
import * as Types from "./types";

declare function HeaderPhotoWhiteWithButtons(props: {
  as?: React.ElementType;
  mainHeading?: React.ReactNode;
  secondaryHeadingText?: React.ReactNode;
  buttonLeftText?: React.ReactNode;
  buttonLeftLink?: Types.Basic.Link;
  buttonRightText?: React.ReactNode;
  buttonRightLink?: Types.Basic.Link;
  backgroundImage?: Types.Asset.Image;
}): React.JSX.Element;
