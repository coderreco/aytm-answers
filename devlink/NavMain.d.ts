import * as React from "react";
import * as Types from "./types";

declare function NavMain(props: {
  as?: React.ElementType;
  announcementBannerVisibility?: Types.Visibility.VisibilityConditions;
  announcementBannerLink?: Types.Basic.Link;
}): React.JSX.Element;
