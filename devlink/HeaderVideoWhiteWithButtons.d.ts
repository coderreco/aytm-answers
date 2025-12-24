import * as React from "react";
import * as Types from "./types";

declare function HeaderVideoWhiteWithButtons(props: {
  as?: React.ElementType;
  mainHeadingText?: React.ReactNode;
  secondaryHeadingText?: React.ReactNode;
  buttonLeftText?: React.ReactNode;
  buttonLeftLink?: Types.Basic.Link;
  buttonRightText?: React.ReactNode;
  buttonRightLink?: Types.Basic.Link;
}): React.JSX.Element;
