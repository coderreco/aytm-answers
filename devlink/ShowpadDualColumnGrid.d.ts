import * as React from "react";
import * as Types from "./types";

declare function ShowpadDualColumnGrid(props: {
  as?: React.ElementType;
  tileImageLeft?: Types.Asset.Image;
  tileImageRight?: Types.Asset.Image;
  tileHeaderLeft?: React.ReactNode;
  tileHeaderRight?: React.ReactNode;
  dualColumnParagraphLeft?: React.ReactNode;
  dualColumnParagraphRight?: React.ReactNode;
  leftButtonText?: React.ReactNode;
  leftButtonLinkAttachment?: Types.Basic.Link;
  rightButtonLinkAttachment?: Types.Basic.Link;
  rightButtonText?: React.ReactNode;
  dualColumnLayoutVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
