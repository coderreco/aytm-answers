"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./FooterMinimal.module.css";

export function FooterMinimal({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section-footer", "no-padding")}
      tag="div"
    >
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
                      alt="Inc. 2021 best workplaces"
                      src="https://cdn.prod.website-files.com/62c5cd2a77ff1625c04bcfcd/62c5cd2a77ff164d454bd08f_Group%2038322.webp"
                    />
                    <_Builtin.Image
                      className={_utils.cx(_styles, "footer-logo")}
                      loading="lazy"
                      width="auto"
                      height="auto"
                      alt="ISO 27001 certified"
                      src="https://cdn.prod.website-files.com/62c5cd2a77ff1625c04bcfcd/62c5cd2a77ff16de0e4bd084_Group%2038328.webp"
                    />
                    <_Builtin.Image
                      className={_utils.cx(_styles, "footer-logo")}
                      loading="lazy"
                      width="auto"
                      height="auto"
                      alt="Grit 2021 top 20 innovative company"
                      src="https://cdn.prod.website-files.com/62c5cd2a77ff1625c04bcfcd/62c5cd2a77ff1630094bd083_Group%2038839.webp"
                    />
                    <_Builtin.Image
                      className={_utils.cx(_styles, "footer-logo")}
                      loading="lazy"
                      width="auto"
                      height="auto"
                      alt="Inc. 5000 America's fastest-growing private companies"
                      src="https://cdn.prod.website-files.com/62c5cd2a77ff1625c04bcfcd/62c5cd2a77ff1624ed4bd087_Group%2038841.webp"
                    />
                  </_Builtin.Block>
                  <_Builtin.Grid
                    className={_utils.cx(_styles, "footer_social-list")}
                    tag="div"
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "footer_social-link")}
                      button={false}
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
                      block="inline"
                      options={{
                        href: "https://twitter.com/AskYTM",
                        target: "_blank",
                      }}
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "social-icon")}
                        value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M20.9728%206.7174C20.5084%207.33692%2019.947%207.87733%2019.3103%208.31776C19.3103%208.47959%2019.3103%208.64142%2019.3103%208.81225C19.3154%2011.7511%2018.1415%2014.5691%2016.0518%2016.6345C13.962%2018.6999%2011.1312%2019.8399%208.19405%2019.7989C6.49599%2019.8046%204.81967%2019.4169%203.29642%2018.6661C3.21428%2018.6302%203.16131%2018.549%203.16162%2018.4593V18.3604C3.16162%2018.2313%203.26623%2018.1267%203.39527%2018.1267C5.06442%2018.0716%206.67402%2017.4929%207.99634%2016.4724C6.48553%2016.4419%205.12619%2015.5469%204.5006%2014.1707C4.46901%2014.0956%204.47884%2014.0093%204.52657%2013.9432C4.57429%2013.8771%204.653%2013.8407%204.73425%2013.8471C5.19342%2013.8932%205.65718%2013.8505%206.1002%2013.7212C4.43239%2013.375%203.17921%2011.9904%202.99986%2010.2957C2.99349%2010.2144%203.02992%2010.1357%203.096%2010.0879C3.16207%2010.0402%203.24824%2010.0303%203.32338%2010.062C3.77094%2010.2595%204.25409%2010.3635%204.74324%2010.3676C3.28184%209.40846%202.65061%207.58405%203.20655%205.92622C3.26394%205.76513%203.40181%205.64612%203.5695%205.61294C3.73718%205.57975%203.90996%205.63728%204.02432%205.76439C5.99639%207.86325%208.70604%209.11396%2011.5819%209.25279C11.5083%208.95885%2011.4721%208.65676%2011.4741%208.35372C11.501%206.76472%2012.4842%205.34921%2013.9634%204.76987C15.4425%204.19054%2017.1249%204.56203%2018.223%205.71044C18.9714%205.56785%2019.695%205.31645%2020.3707%204.96421C20.4202%204.93331%2020.483%204.93331%2020.5325%204.96421C20.5634%205.01373%2020.5634%205.07652%2020.5325%205.12604C20.2052%205.87552%2019.6523%206.50412%2018.9509%206.92419C19.5651%206.85296%2020.1685%206.70807%2020.7482%206.49264C20.797%206.45942%2020.8611%206.45942%2020.9099%206.49264C20.9508%206.51134%2020.9814%206.54711%2020.9935%206.59042C21.0056%206.63373%2020.998%206.68018%2020.9728%206.7174Z%22%20fill%3D%22CurrentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Link>
                    <_Builtin.Link
                      className={_utils.cx(_styles, "footer_social-link")}
                      button={false}
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
                      "w-node-_9ef93e4c-0ab4-1f37-c4d6-348c4bc9082f-9fb1c8a6"
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
                      "w-node-_9ef93e4c-0ab4-1f37-c4d6-348c4bc90832-9fb1c8a6"
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
                      "w-node-_9ef93e4c-0ab4-1f37-c4d6-348c4bc90835-9fb1c8a6"
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
                </_Builtin.Grid>
                <_Builtin.Block
                  className={_utils.cx(_styles, "copyright_credit-text")}
                  tag="div"
                >
                  {"© 2024 Umongous. All right reserved."}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
