import * as React from "react";
import * as Types from "./types";

declare function HeaderPhotoNoButtons(props: {
  as?: React.ElementType;
  backgroundImage?: Types.Asset.Image;
  mainHeading?: React.ReactNode;
  secondaryText?: React.ReactNode;
}): React.JSX.Element;
