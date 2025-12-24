"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./5PanelTitleNoCta.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-39":{"id":"e-39","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-40"}},"mediaQueries":["main","medium"],"target":{"selector":".grid_item","originalId":"1d43858a-d4da-e7e5-d690-2f631384a983","appliesTo":"CLASS"},"targets":[{"selector":".grid_item","originalId":"1d43858a-d4da-e7e5-d690-2f631384a983","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1653404875829},"e-40":{"id":"e-40","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-39"}},"mediaQueries":["main","medium"],"target":{"selector":".grid_item","originalId":"1d43858a-d4da-e7e5-d690-2f631384a983","appliesTo":"CLASS"},"targets":[{"selector":".grid_item","originalId":"1d43858a-d4da-e7e5-d690-2f631384a983","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1653404875830}},"actionLists":{"a-10":{"id":"a-10","title":"Grid Image Hover","actionItemGroups":[{"actionItems":[{"id":"a-10-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outCubic","duration":650,"target":{"useEventTarget":"CHILDREN","selector":".display-tile-image","selectorGuids":["2552d760-e317-2fa6-111e-80a67c47001b"]},"xValue":1.1,"yValue":1.1,"locked":true}},{"id":"a-10-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outCubic","duration":650,"target":{"useEventTarget":"CHILDREN","selector":".display-tile-image","selectorGuids":["2552d760-e317-2fa6-111e-80a67c47001b"]},"value":0.75,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1653404888680},"a-11":{"id":"a-11","title":"Grid Image Hover_Out","actionItemGroups":[{"actionItems":[{"id":"a-11-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outCubic","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".display-tile-image","selectorGuids":["2552d760-e317-2fa6-111e-80a67c47001b"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-11-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outCubic","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".display-tile-image","selectorGuids":["2552d760-e317-2fa6-111e-80a67c47001b"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1653404888680}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function __5PanelTitleNoCta({
  as: _Component = _Builtin.Block,
  subtext5 = "Identify core segments within your market",
  headingText = "Partner with experts",
  icon1 = "https://cdn.prod.website-files.com/62c5cd2a77ff1625c04bcfcd/63bf05f8a690749b90c07050_icon-1.svg",
  subtext1 = "Understand what's happening in the market",
  icon2 = "https://cdn.prod.website-files.com/62c5cd2a77ff1625c04bcfcd/63bf05f7f922f86d9e29c972_Group%2039763.svg",
  subtext2 = "Assess the impact of global trends",
  icon3 = "https://cdn.prod.website-files.com/62c5cd2a77ff1625c04bcfcd/63bf05f7ddeff642262c2fb9_icon-3.svg",
  subtext3 = "Explore unmet needs & opportunities",
  icon4 = "https://cdn.prod.website-files.com/62c5cd2a77ff1625c04bcfcd/63bf05f758ec5a3e9e1ff8c6_icon-4.svg",
  subtext4 = "Notice & prepare for uncertainty",
  icon5 = "https://cdn.prod.website-files.com/62c5cd2a77ff1625c04bcfcd/63bf05f629251fdc678557c3_Group%2039766.svg",
  buttonText = "Schedule a demo",

  buttonLink = {
    href: "#",
  },

  buttonVisibility = false,
  paragraphVisibility = false,
  paragraphText = "Because of our deep expertise in both retail and research, we want you to think of us as more than just tech support—we’re here to partner and consult with you. Some of the ways we can help include:",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "section_grid-layout")}
      tag="section"
    >
      <_Builtin.Block className={_utils.cx(_styles, "page-padding")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "container-large")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "padding-vertical", "padding-xlarge")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "flex-center")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "margin-bottom", "margin-large")}
                tag="div"
              >
                <_Builtin.Heading
                  className={_utils.cx(_styles, "text-align-center")}
                  tag="h2"
                >
                  {headingText}
                </_Builtin.Heading>
              </_Builtin.Block>
              {paragraphVisibility ? (
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-align-center")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "margin-bottom",
                      "margin-large"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "container-small")}
                      tag="div"
                    >
                      <_Builtin.Paragraph>{paragraphText}</_Builtin.Paragraph>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              ) : null}
              <_Builtin.Grid
                className={_utils.cx(
                  _styles,
                  "grid-layout_component",
                  "_5column"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "grid_item")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "margin-bottom",
                      "margin-medium"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "_5-panel-icon-wrapper")}
                      tag="div"
                    >
                      <_Builtin.Image
                        className={_utils.cx(_styles, "research-icon")}
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src={icon1}
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "margin-bottom",
                      "margin-small"
                    )}
                    tag="div"
                  >
                    <_Builtin.Heading
                      className={_utils.cx(_styles, "subheading-h3")}
                      tag="h3"
                    >
                      {subtext1}
                    </_Builtin.Heading>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "grid_item")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "margin-bottom",
                      "margin-medium"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "_5-panel-icon-wrapper")}
                      tag="div"
                    >
                      <_Builtin.Image
                        className={_utils.cx(_styles, "research-icon")}
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src={icon2}
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "margin-bottom",
                      "margin-small"
                    )}
                    tag="div"
                  >
                    <_Builtin.Heading
                      className={_utils.cx(_styles, "subheading-h3")}
                      tag="h3"
                    >
                      {subtext2}
                    </_Builtin.Heading>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "grid_item")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "margin-bottom",
                      "margin-medium"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "_5-panel-icon-wrapper")}
                      tag="div"
                    >
                      <_Builtin.Image
                        className={_utils.cx(_styles, "research-icon")}
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src={icon3}
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "margin-bottom",
                      "margin-small"
                    )}
                    tag="div"
                  >
                    <_Builtin.Heading
                      className={_utils.cx(_styles, "subheading-h3")}
                      tag="h3"
                    >
                      {subtext3}
                    </_Builtin.Heading>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "grid_item")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "margin-bottom",
                      "margin-medium"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "_5-panel-icon-wrapper")}
                      tag="div"
                    >
                      <_Builtin.Image
                        className={_utils.cx(_styles, "research-icon")}
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src={icon4}
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "margin-bottom",
                      "margin-small"
                    )}
                    tag="div"
                  >
                    <_Builtin.Heading
                      className={_utils.cx(_styles, "subheading-h3")}
                      tag="h3"
                    >
                      {subtext4}
                    </_Builtin.Heading>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "grid_item")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "margin-bottom",
                      "margin-medium"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "_5-panel-icon-wrapper")}
                      tag="div"
                    >
                      <_Builtin.Image
                        className={_utils.cx(_styles, "research-icon")}
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src={icon5}
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "margin-bottom",
                      "margin-small"
                    )}
                    tag="div"
                  >
                    <_Builtin.Heading
                      className={_utils.cx(_styles, "subheading-h3")}
                      tag="h3"
                    >
                      {subtext5}
                    </_Builtin.Heading>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Grid>
              {buttonVisibility ? (
                <_Builtin.Block
                  className={_utils.cx(_styles, "margin-top", "margin-small")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "button-row")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "button-wrapper",
                        "is-button-wrapper-center"
                      )}
                      tag="div"
                    >
                      <_Builtin.Link
                        className={_utils.cx(_styles, "button")}
                        button={true}
                        block=""
                        options={buttonLink}
                      >
                        {buttonText}
                      </_Builtin.Link>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              ) : null}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
