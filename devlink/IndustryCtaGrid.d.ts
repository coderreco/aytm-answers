import * as React from "react";
import * as Types from "./types";

declare function IndustryCtaGrid(props: {
  as?: React.ElementType;
  card1Link?: Types.Basic.Link;
  card1Image?: Types.Asset.Image;
  card1Heading?: React.ReactNode;
  card2Link?: Types.Basic.Link;
  card2Image?: Types.Asset.Image;
  card2Heading?: React.ReactNode;
  card3Link?: Types.Basic.Link;
  card3Image?: Types.Asset.Image;
  card3Heading?: React.ReactNode;
  headingText?: React.ReactNode;
}): React.JSX.Element;
