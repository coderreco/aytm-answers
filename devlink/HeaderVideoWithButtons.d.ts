import * as React from "react";
import * as Types from "./types";

declare function HeaderVideoWithButtons(props: {
  as?: React.ElementType;
  mainHeading?: React.ReactNode;
  secondaryHeading?: React.ReactNode;
  buttonLeftText?: React.ReactNode;
  buttonLeftLink?: Types.Basic.Link;
  buttonRightText?: React.ReactNode;
  buttonRightLink?: Types.Basic.Link;
}): React.JSX.Element;
