import * as React from "react";
import * as Types from "./types";

declare function ResearchGridArea(props: {
  as?: React.ElementType;
  headingTitle?: React.ReactNode;
  paragraphText?: React.ReactNode;
  titleTopLeft?: React.ReactNode;
  textTopLeft?: React.ReactNode;
  titleTopRight?: React.ReactNode;
  textTopRight?: React.ReactNode;
  titleBottomLeft?: React.ReactNode;
  textBottomLeft?: React.ReactNode;
  titleBottomRight?: React.ReactNode;
  textBottomRight?: React.ReactNode;
  leftButtonText?: React.ReactNode;
  leftButtonLink?: Types.Basic.Link;
  leftButtonVisibility?: Types.Visibility.VisibilityConditions;
  rightButtonVisibility?: Types.Visibility.VisibilityConditions;
  rightButtonText?: React.ReactNode;
  rightButtonLink?: Types.Basic.Link;
}): React.JSX.Element;
