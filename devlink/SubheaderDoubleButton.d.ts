import * as React from "react";
import * as Types from "./types";

declare function SubheaderDoubleButton(props: {
  as?: React.ElementType;
  mainContent?: React.ReactNode;
  buttonLeftText?: React.ReactNode;
  buttonRightText?: React.ReactNode;
  buttonLeftLink?: Types.Basic.Link;
  buttonRightLink?: Types.Basic.Link;
}): React.JSX.Element;
