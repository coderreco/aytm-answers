import * as React from "react";
import * as Types from "./types";

declare function SectionHeadingLargeHeading(props: {
  as?: React.ElementType;
  mainHeadingText?: React.ReactNode;
  secondaryHeadingText?: React.ReactNode;
  mainContent?: React.ReactNode;
  buttonText?: React.ReactNode;
  buttonLink?: Types.Basic.Link;
}): React.JSX.Element;
