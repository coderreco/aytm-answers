import * as React from "react";
import * as Types from "./types";

declare function CallToActionWithHeading(props: {
  as?: React.ElementType;
  headingText?: React.ReactNode;
  mainContent?: React.ReactNode;
  buttonText?: React.ReactNode;
  buttonLink?: Types.Basic.Link;
}): React.JSX.Element;
