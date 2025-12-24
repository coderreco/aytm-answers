import * as React from "react";
import * as Types from "./types";

declare function InsightsItem(props: {
  as?: React.ElementType;
  icon?: Types.Asset.Image;
  heading?: React.ReactNode;
  copy?: React.ReactNode;
  insightsItemVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
