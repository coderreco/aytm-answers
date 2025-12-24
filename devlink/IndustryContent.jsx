"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { SubheaderNoButton } from "./SubheaderNoButton";
import { __4ColumnIndustryGrid } from "./4ColumnIndustryGrid";
import { ImageSectionTextRight } from "./ImageSectionTextRight";
import { __5PanelTitleNoCta } from "./5PanelTitleNoCta";
import { IndustryLinkout } from "./IndustryLinkout";
import * as _utils from "./utils";
import _styles from "./IndustryContent.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-39":{"id":"e-39","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-40"}},"mediaQueries":["main","medium"],"target":{"selector":".grid_item","originalId":"1d43858a-d4da-e7e5-d690-2f631384a983","appliesTo":"CLASS"},"targets":[{"selector":".grid_item","originalId":"1d43858a-d4da-e7e5-d690-2f631384a983","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1653404875829},"e-40":{"id":"e-40","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-39"}},"mediaQueries":["main","medium"],"target":{"selector":".grid_item","originalId":"1d43858a-d4da-e7e5-d690-2f631384a983","appliesTo":"CLASS"},"targets":[{"selector":".grid_item","originalId":"1d43858a-d4da-e7e5-d690-2f631384a983","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1653404875830}},"actionLists":{"a-10":{"id":"a-10","title":"Grid Image Hover","actionItemGroups":[{"actionItems":[{"id":"a-10-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outCubic","duration":650,"target":{"useEventTarget":"CHILDREN","selector":".display-tile-image","selectorGuids":["2552d760-e317-2fa6-111e-80a67c47001b"]},"xValue":1.1,"yValue":1.1,"locked":true}},{"id":"a-10-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outCubic","duration":650,"target":{"useEventTarget":"CHILDREN","selector":".display-tile-image","selectorGuids":["2552d760-e317-2fa6-111e-80a67c47001b"]},"value":0.75,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1653404888680},"a-11":{"id":"a-11","title":"Grid Image Hover_Out","actionItemGroups":[{"actionItems":[{"id":"a-11-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outCubic","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".display-tile-image","selectorGuids":["2552d760-e317-2fa6-111e-80a67c47001b"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-11-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outCubic","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".display-tile-image","selectorGuids":["2552d760-e317-2fa6-111e-80a67c47001b"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1653404888680}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function IndustryContent({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component tag="div">
      <SubheaderNoButton mainContent="Maximize your automotive research with aytm. Our automated insights platform, advanced research tests, and flexible services allow you to design, launch, and analyze simple and complex studies with ease. We’re here to help you tune into the needs of your customers, make informed decisions, and stay on budget and ahead of the competition." />
      <__4ColumnIndustryGrid
        heading="A really smooth ride for research"
        image1="https://cdn.prod.website-files.com/62c5cd2a77ff1625c04bcfcd/647f5312b2c024674e4ab230_BF-Capitalize.svg"
        image2="https://cdn.prod.website-files.com/62c5cd2a77ff1625c04bcfcd/647f53115b177315d92987b5_Automotive-PathPurchase.svg"
        image3="https://cdn.prod.website-files.com/62c5cd2a77ff1625c04bcfcd/647f5312528358bdb9deaf77_Automotive-ValidateAds.svg"
        image4="https://cdn.prod.website-files.com/62c5cd2a77ff1625c04bcfcd/647f5312ef1945a5d57a46cd_Automotive-BrandAwareness.svg"
        subheading1="Understand customer preferences"
        context1="with offering prioritization"
        subheading2="Illuminate the path to purchase"
        context2="and learn more about your shoppers"
        subheading3="Test and validate your ads"
        context3="with images and video questions"
        subheading4="Gain insights into brand awareness"
        context4="with brand perception tests"
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "section-container")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "grey-fade")} tag="div" />
        <ImageSectionTextRight
          mainContent={
            <_Builtin.Paragraph>
              {
                "We know what it feels like to be behind the wheel and in your position because we’ve lived in your world. We know the automotive landscape, so we’re qualified to partner with brands just like yours, designing research that provides actionable insights and empowers more informed decisions."
              }
            </_Builtin.Paragraph>
          }
          image="https://cdn.prod.website-files.com/62c5cd2a77ff1625c04bcfcd/647f4c9d8a8e5816d8cf35da_Automotive.webp"
          mainHeadingText="Partnering from start to finish"
          h3Visibility={true}
          h3Text="Consultative service with speed and precision"
          buttonText="MORE ON OUR FLEXIBLE SERVICE SOLUTIONS"
          buttonLink={{
            href: "#",
          }}
        />
        <__5PanelTitleNoCta
          icon5="https://cdn.prod.website-files.com/62c5cd2a77ff1625c04bcfcd/647672f81f998b01bfc5bd2b_Group%2040005.svg"
          icon4="https://cdn.prod.website-files.com/62c5cd2a77ff1625c04bcfcd/647672f8e7ee6fabbabf80e8_Group%2039744.svg"
          icon3="https://cdn.prod.website-files.com/62c5cd2a77ff1625c04bcfcd/647672f8244a6a1672d993eb_Group%2040004.svg"
          icon2="https://cdn.prod.website-files.com/62c5cd2a77ff1625c04bcfcd/647672f8296a1c9c25f4961e_Group%2040003.svg"
          icon1="https://cdn.prod.website-files.com/62c5cd2a77ff1625c04bcfcd/647672f8d8b1b0636842e29b_Group%2040001.svg"
          subtext1="Survey Design"
          subtext2="Sample sourcing"
          subtext3="Data analysis"
          subtext4="Expert Consultation"
          subtext5="Personalized Support"
          headingText="From cruise control to sport mode"
          paragraphVisibility={true}
          buttonVisibility={true}
          paragraphText="Because of our deep expertise in both entertainment and research, we want you to think of us as more than just tech support—we’re here to partner and consult with you. Some of the ways we can help include: "
        />
        <IndustryLinkout />
      </_Builtin.Block>
      <_Builtin.Block tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "padding-top", "padding-xxhuge")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "section-header-main")}
            tag="header"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "page-padding")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "container-medium")}
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
                    className={_utils.cx(_styles, "text-align-center")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "margin-bottom",
                        "margin-xsmall"
                      )}
                      tag="div"
                    >
                      <_Builtin.Heading
                        className={_utils.cx(_styles, "heading-secondary")}
                        tag="h2"
                      >
                        {"This may be helpful"}
                      </_Builtin.Heading>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
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
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "padding-bottom",
                    "padding-huge"
                  )}
                  tag="div"
                >
                  <_Builtin.NotSupported _atom="DynamoWrapper" />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "section-container")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "grey-fade")} tag="div" />
        <_Builtin.Block
          className={_utils.cx(_styles, "section-testimonials")}
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
                  "padding-huge"
                )}
                tag="div"
              >
                <_Builtin.NotSupported _atom="DynamoWrapper" />
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "svg_ocean-glass")}
                  value="%3Csvg%20width%3D%220%22%20height%3D%220%22%3E%0A%3Cdefs%3E%0A%20%20%3CclipPath%20id%3D%22testimonial-clip%22%20clipPathUnits%3D%22objectBoundingBox%22%20transform%3D%22scale(0.00485)%22%3E%0A%20%20%09%3Cpath%20d%3D%22M0.0599922%2095.2904C-2.49967%20153.425%2074.7501%20200.241%20127.763%20196.721C169.638%20195.321%20209.852%20160.964%20204.373%20117.228C200.214%2083.8114%20188.515%2050.9344%20169.978%2023.0369C152.8%20-3.70065%20122.784%20-2.94072%2096.6472%208.59823C61.1719%2024.9967%206.93908%2052.8742%200.0599922%2095.2904Z%22%2F%3E%0A%20%20%3C%2FclipPath%3E%0A%20%20%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A%0A%3Cstyle%3E%0A.testimonial_headshot%20%7B%0A%09clip-path%3A%20url(%23testimonial-clip)%3B%0A%20%20-webkit-clip-path%3A%20url(%23testimonial-clip)%3B%0A%7D%0A%0A.testimonial_headshot-background%20%7B%0A%09clip-path%3A%20url(%23testimonial-clip)%3B%0A%20%20-webkit-clip-path%3A%20url(%23testimonial-clip)%3B%0A%20%20%09filter%3A%20drop-shadow(0px%200px%2040px%200px%20rgba(0%2C0%2C0%2C0.75))%3B%0A%09-webkit-filter%3A%20drop-shadow(0px%200px%2040px%200px%20rgba(0%2C0%2C0%2C0.75))%3B%0A%7D%0A.testimonial_headshot-wrapper%7B%0A%09filter%3A%20drop-shadow(0px%200px%2040px%200px%20rgba(0%2C0%2C0%2C0.75))%3B%0A%09-webkit-filter%3A%20drop-shadow(0px%200px%2040px%200px%20rgba(0%2C0%2C0%2C0.75))%3B%0A%7D%0A%3C%2Fstyle%3E"
                />
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
