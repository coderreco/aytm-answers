import * as React from "react";
import * as Types from "./types";

declare function CardBasic(props: {
  as?: React.ElementType;
  link?: Types.Basic.Link;
  image?: Types.Asset.Image;
  headingText?: React.ReactNode;
}): React.JSX.Element;
