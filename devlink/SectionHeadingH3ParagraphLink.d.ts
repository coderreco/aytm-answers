import * as React from "react";
import * as Types from "./types";

declare function SectionHeadingH3ParagraphLink(props: {
  as?: React.ElementType;
  buttonVisibility?: Types.Visibility.VisibilityConditions;
  headingText?: React.ReactNode;
  paragraphText?: React.ReactNode;
  guideFileLink?: Types.Basic.Link;
  buttonText?: React.ReactNode;
}): React.JSX.Element;
