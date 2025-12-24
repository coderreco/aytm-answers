import * as React from "react";
import * as Types from "./types";

declare function ResourceHubTile(props: {
  as?: React.ElementType;
  headingText?: React.ReactNode;
  resourceTypeText?: React.ReactNode;
  resourceCtaText?: React.ReactNode;
  resourceLink?: Types.Basic.Link;
  resourceBgImage?: Types.Asset.Image;
  sortingDate?: React.ReactNode;
  sortingField?: React.ReactNode;
  cmsFilterField?: Types.Builtin.Text;
}): React.JSX.Element;
