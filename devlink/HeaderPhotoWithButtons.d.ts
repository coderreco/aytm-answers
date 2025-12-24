import * as React from "react";
import * as Types from "./types";

declare function HeaderPhotoWithButtons(props: {
  as?: React.ElementType;
  heading?: React.ReactNode;
  subheading?: React.ReactNode;
  backgroundImage?: Types.Asset.Image;
  mainButtonText?: React.ReactNode;
  mainButtonLink?: Types.Basic.Link;
  secondaryButtonText?: React.ReactNode;
  secondaryButtonLink?: Types.Basic.Link;
}): React.JSX.Element;
