"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Footer.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-98":{"id":"e-98","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-37","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e0a6be9d-274d-9d03-8d41-9999d574ff10","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e0a6be9d-274d-9d03-8d41-9999d574ff10","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-37-p","smoothing":97,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1655727454146},"e-397":{"id":"e-397","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-100","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-398"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"80030a9e-d421-933e-cd6b-70a792b7b9de","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"80030a9e-d421-933e-cd6b-70a792b7b9de","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1708026215400},"e-398":{"id":"e-398","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-101","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-397"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"80030a9e-d421-933e-cd6b-70a792b7b9de","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"80030a9e-d421-933e-cd6b-70a792b7b9de","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1708026215402},"e-456":{"id":"e-456","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-106","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-457"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65f48b61357fed6f2f5a5ec6|bf7b7f0d-a8ca-5d60-dd89-3cef4c58d14c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65f48b61357fed6f2f5a5ec6|bf7b7f0d-a8ca-5d60-dd89-3cef4c58d14c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1739142913729},"e-457":{"id":"e-457","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-107","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-456"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65f48b61357fed6f2f5a5ec6|bf7b7f0d-a8ca-5d60-dd89-3cef4c58d14c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65f48b61357fed6f2f5a5ec6|bf7b7f0d-a8ca-5d60-dd89-3cef4c58d14c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1739142913729},"e-458":{"id":"e-458","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-108","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-459"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65cd4b8fa94416bc02bc273a|a1a5a302-4eab-e7fd-f4c5-732f7fb2c5c2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65cd4b8fa94416bc02bc273a|a1a5a302-4eab-e7fd-f4c5-732f7fb2c5c2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1739143472097},"e-459":{"id":"e-459","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-109","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-458"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65cd4b8fa94416bc02bc273a|a1a5a302-4eab-e7fd-f4c5-732f7fb2c5c2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65cd4b8fa94416bc02bc273a|a1a5a302-4eab-e7fd-f4c5-732f7fb2c5c2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1739143472097}},"actionLists":{"a-37":{"id":"a-37","title":"Logo Marquee Footer","continuousParameterGroups":[{"id":"a-37-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-37-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]},{"keyframe":75,"actionItems":[{"id":"a-37-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":-80,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]}]}],"createdOn":1654837947901},"a-100":{"id":"a-100","title":"Resource Tile Hover-in","actionItemGroups":[{"actionItems":[{"id":"a-100-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outCubic","duration":650,"target":{"useEventTarget":"CHILDREN","selector":".background-image-wrapper","selectorGuids":["934e45d2-d86a-7428-b77b-245af4ad5e4b"]},"xValue":1.1,"yValue":1.1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1708026227322},"a-101":{"id":"a-101","title":"Resource Tile Hover-out","actionItemGroups":[{"actionItems":[{"id":"a-101-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outCubic","duration":650,"target":{"useEventTarget":"CHILDREN","selector":".background-image-wrapper","selectorGuids":["934e45d2-d86a-7428-b77b-245af4ad5e4b"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1708026227322},"a-106":{"id":"a-106","title":"Resource Tile Hover-in 2","actionItemGroups":[{"actionItems":[{"id":"a-106-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outCubic","duration":650,"target":{"useEventTarget":"CHILDREN","selector":".background-image-wrapper","selectorGuids":["934e45d2-d86a-7428-b77b-245af4ad5e4b"]},"xValue":1.1,"yValue":1.1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1708026227322},"a-107":{"id":"a-107","title":"Resource Tile Hover-out 2","actionItemGroups":[{"actionItems":[{"id":"a-107-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outCubic","duration":650,"target":{"useEventTarget":"CHILDREN","selector":".background-image-wrapper","selectorGuids":["934e45d2-d86a-7428-b77b-245af4ad5e4b"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1708026227322},"a-108":{"id":"a-108","title":"Resource Tile Hover-in 3","actionItemGroups":[{"actionItems":[{"id":"a-108-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outCubic","duration":650,"target":{"useEventTarget":"CHILDREN","selector":".background-image-wrapper","selectorGuids":["934e45d2-d86a-7428-b77b-245af4ad5e4b"]},"xValue":1.1,"yValue":1.1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1708026227322},"a-109":{"id":"a-109","title":"Resource Tile Hover-out 3","actionItemGroups":[{"actionItems":[{"id":"a-109-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outCubic","duration":650,"target":{"useEventTarget":"CHILDREN","selector":".background-image-wrapper","selectorGuids":["934e45d2-d86a-7428-b77b-245af4ad5e4b"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1708026227322}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Footer({
  as: _Component = _Builtin.Block,
  sectionFooterVisibility = true,

  footerLinkLink = {
    href: "/solutions-center#category/market-landscape",
  },

  footerLinkLink2 = {
    href: "/solutions-center#category/brand-insights",
  },

  footerLinkLink3 = {
    href: "/solutions-center#category/consumer-experience",
  },

  footerLinkLink4 = {
    href: "/solutions-center#category/product-development",
  },

  footerLinkLink5 = {
    href: "/solutions-center#category/advertising-messaging",
  },

  footerLinkLink6 = {
    href: "/solutions-center#category/business-strategy",
  },

  footerLinkLink7 = {
    href: "#",
  },

  footerLinkText = "Research services",
  footerLinkVisibility = true,
  ctaHeading = "Are you ready to reimagine your consumer insights?",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return sectionFooterVisibility ? (
    <_Component className={_utils.cx(_styles, "section-footer")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "section_grid-layout")}
        tag="section"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "page-padding")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "container-large")}
            tag="div"
          >
            <_Builtin.Grid
              className={_utils.cx(_styles, "footer-cta")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "ocean-glass-container")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "ocean-glass-float",
                    "footer-top-left"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://cdn.prod.website-files.com/62c5cd2a77ff1625c04bcfcd/62c5cd2a77ff162cf14bd08e_Mask%20Group%20-4.webp"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "padding-vertical",
                  "padding-huge"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "grid_item-cta",
                    "max-width-large"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-_3cb7ce1a-2bf4-4de8-3996-888cc1cc043a-d574ff05"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "margin-bottom")}
                    tag="div"
                  >
                    <_Builtin.Heading
                      className={_utils.cx(_styles, "cta-heading")}
                      tag="h2"
                    >
                      {ctaHeading}
                    </_Builtin.Heading>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "button-wrapper",
                      "is-button-wrapper-center"
                    )}
                    tag="div"
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "button", "is-alternate")}
                      button={true}
                      block=""
                      options={{
                        href: "/resources/contact-us",
                      }}
                    >
                      {"Contact Us"}
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "background-image-wrapper",
                  "footer-cta-background"
                )}
                id={_utils.cx(
                  _styles,
                  "w-node-_3cb7ce1a-2bf4-4de8-3996-888cc1cc0448-d574ff05"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "image-overlay-layer",
                    "background-color-gradient_royal-urchin"
                  )}
                  tag="div"
                />
                <_Builtin.Image
                  className={_utils.cx(_styles, "header_background-image")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt="A partially submerged view of the backside of a wave approaching a mountainous coastline"
                  src="https://cdn.prod.website-files.com/62c5cd2a77ff1625c04bcfcd/62c5cd2a77ff169e054bd089_footer-image.webp"
                />
              </_Builtin.Block>
            </_Builtin.Grid>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "logo-marquee", "footer")}
        data-w-id="e0a6be9d-274d-9d03-8d41-9999d574ff10"
        tag="section"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "padding-vertical", "padding-custom1")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "container-large", "overflow-hidden")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "marquee_container")}
              tag="div"
            >
              <_Builtin.NotSupported _atom="DynamoWrapper" />
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "marquee_overlay-wrapper",
                  "ignore"
                )}
                tag="div"
              />
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Image
          className={_utils.cx(_styles, "header_drop-shadow", "footer-shadow")}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src="https://uploads-ssl.webflow.com/6262215c38d17faff897e29b/62675ce072c1228cfebb2d58_Group%2038193.png"
        />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "margin-top", "margin-medium")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "footer_nav-component")}
          tag="footer"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "page-padding")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "container-large")}
              tag="div"
            >
              <_Builtin.Block tag="div">
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "padding-bottom",
                    "padding-medium"
                  )}
                  tag="div"
                >
                  <_Builtin.Grid
                    className={_utils.cx(_styles, "footer_top-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "footer_link-list")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "footer_column-heading")}
                        tag="div"
                      >
                        {"Why aytm?"}
                      </_Builtin.Block>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer_link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Platform overview"}
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer_link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Audience targeting"}
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer_link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Survey editing tool"}
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer_link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Insights dashboard"}
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer_link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Skipper AI"}
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer_link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Conversation AI"}
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer_link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Community overview"}
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer_link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Paid Viewpoint"}
                      </_Builtin.Link>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "footer_link-list")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "footer_column-heading")}
                        tag="div"
                      >
                        {"Industries"}
                      </_Builtin.Block>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer_link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Agency"}
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer_link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Automotive"}
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer_link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Banking &Finance"}
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer_link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Consumer Brands"}
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer_link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Entertainment"}
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer_link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Healthcare &Wellness"}
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer_link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Retail"}
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer_link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Telecom"}
                      </_Builtin.Link>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "footer_link-list")}
                      id={_utils.cx(
                        _styles,
                        "w-node-e0a6be9d-274d-9d03-8d41-9999d574ff5c-d574ff05"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "footer_column-heading")}
                        tag="div"
                      >
                        {"Pricing"}
                      </_Builtin.Block>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer_link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Plans"}
                      </_Builtin.Link>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "footer_link-list")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "footer_column-heading")}
                        tag="div"
                      >
                        {"Company"}
                      </_Builtin.Block>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer_link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"About Us"}
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer_link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Meet The Team"}
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer_link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Partnerships"}
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer_link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Innovation Lab"}
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer_link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Careers"}
                      </_Builtin.Link>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "footer_link-list")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "footer_column-heading")}
                        tag="div"
                      >
                        {"Resources"}
                      </_Builtin.Block>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer_link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"AIHub"}
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer_link")}
                        button={false}
                        block=""
                        options={{
                          href: "https://academy.aytm.com/",
                          target: "_blank",
                        }}
                      >
                        {"Lighthouse Academy"}
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer_link")}
                        button={false}
                        block=""
                        options={{
                          href: "https://helpcenter.aytm.com/hc/en-us",
                          target: "_blank",
                        }}
                      >
                        {"Help center"}
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer_link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Blog"}
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer_link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Resource Hub"}
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer_link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Testimonials "}
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer_link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Contact us"}
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer_link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      />
                    </_Builtin.Block>
                  </_Builtin.Grid>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "section-contact")}
        tag="section"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "page-padding")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "container-large")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "padding-vertical",
                "padding-small"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "flex-center")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "contact_component",
                    "footer-form"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "form_basic-horizontal",
                      "footer-form"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "footer_column-heading",
                        "no-padding"
                      )}
                      tag="div"
                    >
                      {"Subscribe for news and updates."}
                    </_Builtin.Block>
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(
                        _styles,
                        "form_basic-horizontal",
                        "hs-embedded",
                        "text-color-ocean"
                      )}
                      hs-form="footer"
                      value="%3Cscript%3E%0Awindow.addEventListener('load'%2C%20function()%20%7B%0A%20%20hbspt.forms.create(%7B%0A%20%20%20%20region%3A%20%22na1%22%2C%0A%20%20%20%20portalId%3A%20%225412639%22%2C%0A%20%20%20%20formId%3A%20%22799e9f5d-3f41-4476-8e3b-b64fd02740b1%22%0A%20%20%7D)%3B%0A%7D)%0A%3C%2Fscript%3E"
                    />
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "footer_identity-component")}
        tag="footer"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "page-padding")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "container-large")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "padding-vertical",
                "padding-large"
              )}
              tag="div"
            >
              <_Builtin.Block tag="div">
                <_Builtin.Block
                  className={_utils.cx(_styles, "footer_bottom-wrapper")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "footer-logos")}
                    tag="div"
                  >
                    <_Builtin.NavbarBrand
                      className={_utils.cx(_styles, "footer_logo-link")}
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Image
                        className={_utils.cx(_styles, "logo-minimum", "footer")}
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt="aytm primary logo"
                        src="https://cdn.prod.website-files.com/62c5cd2a77ff1625c04bcfcd/62c5cd2a77ff1639134bd081_Primary%20Logo%20on%20white.svg"
                      />
                    </_Builtin.NavbarBrand>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "footer-logo-divider")}
                      tag="div"
                    />
                    <_Builtin.Image
                      className={_utils.cx(_styles, "footer-logo")}
                      loading="lazy"
                      width="auto"
                      height="auto"
                      alt=""
                      src="https://cdn.prod.website-files.com/62c5cd2a77ff1625c04bcfcd/660c35876a776793b1a70ed9_image.avif"
                    />
                    <_Builtin.Image
                      className={_utils.cx(_styles, "footer-logo")}
                      loading="lazy"
                      width="auto"
                      height="auto"
                      alt="Inc. 5000 America's fastest-growing private companies"
                      src="https://cdn.prod.website-files.com/62c5cd2a77ff1625c04bcfcd/62c5cd2a77ff1624ed4bd087_Group%2038841.webp"
                    />
                    <_Builtin.Image
                      className={_utils.cx(_styles, "footer-logo")}
                      loading="lazy"
                      width="auto"
                      height="auto"
                      alt=""
                      src="https://cdn.prod.website-files.com/62c5cd2a77ff1625c04bcfcd/65d4edc9059ec73d1f1139fd_Asset%209.webp"
                    />
                    <_Builtin.Image
                      className={_utils.cx(_styles, "footer-logo")}
                      loading="lazy"
                      width="auto"
                      height="auto"
                      alt=""
                      src="https://cdn.prod.website-files.com/62c5cd2a77ff1625c04bcfcd/65d4edced80043afc014f8ba_Asset%2010.webp"
                    />
                  </_Builtin.Block>
                  <_Builtin.Grid
                    className={_utils.cx(_styles, "footer_social-list")}
                    tag="div"
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "footer_social-link")}
                      button={false}
                      aria-label="View aytm on LinkedIn(Opens in new tab)"
                      block="inline"
                      options={{
                        href: "https://www.linkedin.com/company/aytm",
                        target: "_blank",
                      }}
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "social-icon")}
                        value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M5%203H19C20.1046%203%2021%203.89543%2021%205V19C21%2020.1046%2020.1046%2021%2019%2021H5C3.89543%2021%203%2020.1046%203%2019V5C3%203.89543%203.89543%203%205%203ZM8%2018C8.27614%2018%208.5%2017.7761%208.5%2017.5V10.5C8.5%2010.2239%208.27614%2010%208%2010H6.5C6.22386%2010%206%2010.2239%206%2010.5V17.5C6%2017.7761%206.22386%2018%206.5%2018H8ZM7.25%209C6.42157%209%205.75%208.32843%205.75%207.5C5.75%206.67157%206.42157%206%207.25%206C8.07843%206%208.75%206.67157%208.75%207.5C8.75%208.32843%208.07843%209%207.25%209ZM17.5%2018C17.7761%2018%2018%2017.7761%2018%2017.5V12.9C18.0325%2011.3108%2016.8576%209.95452%2015.28%209.76C14.177%209.65925%2013.1083%2010.1744%2012.5%2011.1V10.5C12.5%2010.2239%2012.2761%2010%2012%2010H10.5C10.2239%2010%2010%2010.2239%2010%2010.5V17.5C10%2017.7761%2010.2239%2018%2010.5%2018H12C12.2761%2018%2012.5%2017.7761%2012.5%2017.5V13.75C12.5%2012.9216%2013.1716%2012.25%2014%2012.25C14.8284%2012.25%2015.5%2012.9216%2015.5%2013.75V17.5C15.5%2017.7761%2015.7239%2018%2016%2018H17.5Z%22%20fill%3D%22CurrentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Link>
                    <_Builtin.Link
                      className={_utils.cx(_styles, "footer_social-link")}
                      button={false}
                      aria-label="View aytm on X (Formerly known as Twitter)(Opens in new tab)"
                      block="inline"
                      options={{
                        href: "https://twitter.com/AskYTM",
                        target: "_blank",
                      }}
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "social-icon")}
                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M17.1761%204H19.9362L13.9061%2010.7774L21%2020H15.4456L11.0951%2014.4066L6.11723%2020H3.35544L9.80517%2012.7508L3%204H8.69545L12.6279%209.11262L17.1761%204ZM16.2073%2018.3754H17.7368L7.86441%205.53928H6.2232L16.2073%2018.3754Z%22%20fill%3D%22currentColor%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Link>
                    <_Builtin.Link
                      className={_utils.cx(_styles, "footer_social-link")}
                      button={false}
                      aria-label="View aytm on Facebook(Opens in new tab)"
                      block="inline"
                      options={{
                        href: "https://www.facebook.com/AskYTM/wall/",
                        target: "_blank",
                      }}
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "social-icon")}
                        value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M16.5%206H13.5C12.9477%206%2012.5%206.44772%2012.5%207V10H16.5C16.6137%209.99748%2016.7216%2010.0504%2016.7892%2010.1419C16.8568%2010.2334%2016.8758%2010.352%2016.84%2010.46L16.1%2012.66C16.0318%2012.8619%2015.8431%2012.9984%2015.63%2013H12.5V20.5C12.5%2020.7761%2012.2761%2021%2012%2021H9.5C9.22386%2021%209%2020.7761%209%2020.5V13H7.5C7.22386%2013%207%2012.7761%207%2012.5V10.5C7%2010.2239%207.22386%2010%207.5%2010H9V7C9%204.79086%2010.7909%203%2013%203H16.5C16.7761%203%2017%203.22386%2017%203.5V5.5C17%205.77614%2016.7761%206%2016.5%206Z%22%20fill%3D%22CurrentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Link>
                  </_Builtin.Grid>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "copyright_component")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "page-padding")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "container-large")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "padding-vertical",
                "padding-xxsmall"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "copyright_bottom-wrapper")}
                tag="div"
              >
                <_Builtin.Grid
                  className={_utils.cx(_styles, "copyright_legal-list")}
                  tag="div"
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "copyright_legal-link")}
                    button={false}
                    block=""
                    options={{
                      href: "#",
                    }}
                  >
                    {"Security & Compliance"}
                  </_Builtin.Link>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "copyright-separator")}
                    id={_utils.cx(
                      _styles,
                      "w-node-bc9611f6-57ff-ca8f-5546-88a605f001e3-d574ff05"
                    )}
                    tag="div"
                  />
                  <_Builtin.Link
                    className={_utils.cx(_styles, "copyright_legal-link")}
                    button={false}
                    block=""
                    options={{
                      href: "#",
                    }}
                  >
                    {"Cookie Policy"}
                  </_Builtin.Link>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "copyright-separator")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_8de196be-e830-712b-2ad8-65e71a01adc6-d574ff05"
                    )}
                    tag="div"
                  />
                  <_Builtin.Link
                    className={_utils.cx(_styles, "copyright_legal-link")}
                    button={false}
                    block=""
                    options={{
                      href: "#",
                    }}
                  >
                    {"Terms & Conditions"}
                  </_Builtin.Link>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "copyright-separator")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_3d4a62c7-c489-f02a-3905-14009f6b42aa-d574ff05"
                    )}
                    tag="div"
                  />
                  <_Builtin.Link
                    className={_utils.cx(_styles, "copyright_legal-link")}
                    button={false}
                    block=""
                    options={{
                      href: "#",
                    }}
                  >
                    {"Privacy Policy"}
                  </_Builtin.Link>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "copyright-separator")}
                    id={_utils.cx(
                      _styles,
                      "w-node-cd6f23a4-3953-9d4e-26db-5113dc0c5e2a-d574ff05"
                    )}
                    tag="div"
                  />
                  <_Builtin.Link
                    className={_utils.cx(_styles, "copyright_legal-link")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_1d430a9b-3b05-9fe2-da71-923912e99644-d574ff05"
                    )}
                    button={false}
                    block=""
                    options={{
                      href: "#",
                    }}
                  >
                    {"Subprocessors"}
                  </_Builtin.Link>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "copyright-separator")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_2ab5e0a8-8ae5-8b2d-6b7f-ce974c8e25a7-d574ff05"
                    )}
                    tag="div"
                  />
                  <_Builtin.Link
                    className={_utils.cx(_styles, "copyright_legal-link")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_6ff43836-1f68-4956-569b-6bec409160f0-d574ff05"
                    )}
                    button={false}
                    block=""
                    options={{
                      href: "#",
                    }}
                  >
                    {"Info For AI"}
                  </_Builtin.Link>
                </_Builtin.Grid>
                <_Builtin.Block
                  className={_utils.cx(_styles, "copyright_credit-text")}
                  tag="div"
                >
                  {"© "}
                  <_Builtin.Span className={_utils.cx(_styles, "year")}>
                    {"2025"}
                  </_Builtin.Span>
                  {" Umongous. All right reserved."}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "footer-background-grey")}
        tag="div"
      />
    </_Component>
  ) : null;
}
