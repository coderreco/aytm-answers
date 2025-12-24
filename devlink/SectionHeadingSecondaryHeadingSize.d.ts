import * as React from "react";
import * as Types from "./types";

declare function SectionHeadingSecondaryHeadingSize(props: {
  as?: React.ElementType;
  subheadingH3Visibility?: Types.Visibility.VisibilityConditions;
  mainHeadingText?: React.ReactNode;
  secondaryHeadingText?: React.ReactNode;
  mainContent?: React.ReactNode;
  buttonLink?: Types.Basic.Link;
  buttonText?: React.ReactNode;
}): React.JSX.Element;
