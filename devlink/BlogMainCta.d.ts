import * as React from "react";
import * as Types from "./types";

declare function BlogMainCta(props: {
  as?: React.ElementType;
  heading?: React.ReactNode;
  subheading?: React.ReactNode;
  showCta?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
