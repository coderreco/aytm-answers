"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./CookieConsent.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-212":{"id":"e-212","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-41","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-213"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e940b42f-fb57-368d-872a-70f936ba2a17","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e940b42f-fb57-368d-872a-70f936ba2a17","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1656358751963}},"actionLists":{"a-41":{"id":"a-41","title":"Close Cookie Banner","actionItemGroups":[{"actionItems":[{"id":"a-41-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outCubic","duration":500,"target":{"useEventTarget":"PARENT","selector":".cookie_component","selectorGuids":["fcfb0d0e-8116-15c0-e7f0-e25978e43507"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-41-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".cookie_component","selectorGuids":["fcfb0d0e-8116-15c0-e7f0-e25978e43507"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1656358759523}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function CookieConsent({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "cookie_component")}
      tag="div"
      id="cookie-consent"
    >
      <_Builtin.Block className={_utils.cx(_styles, "page-padding")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "container-medium")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "padding-vertical", "padding-large")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "margin-bottom")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-align-center")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "max-width-large",
                    "align-center"
                  )}
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
                      className={_utils.cx(_styles, "copyright-heading")}
                      tag="h3"
                    >
                      {"We value your privacy"}
                    </_Builtin.Heading>
                  </_Builtin.Block>
                  <_Builtin.Paragraph
                    className={_utils.cx(_styles, "cookie_paragraph")}
                  >
                    {"By using this website, you agree to our "}
                    <_Builtin.Link
                      className={_utils.cx(
                        _styles,
                        "inline-link",
                        "text-style-serif"
                      )}
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"use of cookies"}
                    </_Builtin.Link>
                    {
                      ". We use cookies to provide you with a great experience and to help our website run effectively."
                    }
                  </_Builtin.Paragraph>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "button-row",
                      "is-button-row-center"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "button-wrapper",
                        "is-button-wrapper-center"
                      )}
                      data-w-id="e940b42f-fb57-368d-872a-70f936ba2a17"
                      tag="div"
                    >
                      <_Builtin.Link
                        className={_utils.cx(_styles, "button", "is-alternate")}
                        button={true}
                        id="cookie-status-agree"
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"OK, I AGREE"}
                      </_Builtin.Link>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "margin-top",
                      "margin-xsmall"
                    )}
                    tag="div"
                  >
                    <_Builtin.Grid
                      className={_utils.cx(_styles, "copyright_legal-list")}
                      tag="div"
                    >
                      <_Builtin.Link
                        className={_utils.cx(_styles, "copyright_legal-link")}
                        button={false}
                        id="cookie-status-reject"
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"No cookies for me"}
                      </_Builtin.Link>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "copyright-separator")}
                        id={_utils.cx(
                          _styles,
                          "w-node-_13a278f8-cef5-e618-a92f-328610647ca6-36ba2a0a"
                        )}
                        tag="div"
                      />
                      <_Builtin.Link
                        className={_utils.cx(_styles, "copyright_legal-link")}
                        button={false}
                        id="cookie-status-later"
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"I'll decide later"}
                      </_Builtin.Link>
                    </_Builtin.Grid>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
