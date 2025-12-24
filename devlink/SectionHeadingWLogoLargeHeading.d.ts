import * as React from "react";
import * as Types from "./types";

declare function SectionHeadingWLogoLargeHeading(props: {
  as?: React.ElementType;
  icon?: Types.Asset.Image;
  mainHeadingText?: React.ReactNode;
  secondaryHeadingText?: React.ReactNode;
  mainContent?: React.ReactNode;
  buttonText?: React.ReactNode;
  buttonLink?: Types.Basic.Link;
  buttonVis?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
