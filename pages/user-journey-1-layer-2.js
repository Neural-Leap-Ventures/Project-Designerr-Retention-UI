import Head from 'next/head';
import Script from 'next/script';
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from 'react-use';
import HeaderNavWithoutSideNav from '../components/headerNavWithoutSideNav';

const UserJourney1Layer2 = ({ data }) => {

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        {/* Title Tag */}
        <title>{data.titleTag}</title>

        {/* Meta Description */}
        <meta content={data.metaDescription} name="description" />

        {/* OG Title */}
        <meta content={data.ogTitle} property="og:title" />

        {/* OG Description */}
        <meta content={data.ogDescription} property="og:description" />

        {/* OG Image */}
        <meta content={data.ogImage} property="og:image" />

        {/* Twitter Title */}
        <meta content={data.twitterTitle} property="twitter:title" />

        {/* Twitter Description */}
        <meta content={data.twitterDescription} property="twitter:description" />

        {/* Twitter Image */}
        <meta content={data.twitterImage} property="twitter:image" />

        <meta property="og:type" content="website" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />

        {/* Favicon*/}
        <link href="images/favicon.png" rel="icon" type="image/png" />

        {/* Webclip */}
        <link href="images/webclip.png" rel="apple-touch-icon" />

        {/* Fall Back CSS */}
        {/* [if lte IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js" type="text/javascript"></script><![endif] */}
      </Head>
      <div>
        <HeaderNavWithoutSideNav />
        <section className="section-body mt-100">
          <div className="container-max-1000 mt-60">
            <div className="align-mid-center">
              <h1 className="txt-center">Enter Your Payment Details Below</h1>
              <div className="_w-100 mt-60">
                <div className="w-form">
                  <form id="email-form" name="email-form" data-name="Email Form" method="get" data-wf-page-id="65c3e3b2172e3e17f1bafc59" data-wf-element-id="2a65fac0-d952-bc6c-e452-972ac56ddfba">
                    <div className="flex-h align-middle justify-between tab-reverse">
                      <div className="div-payment-info">
                        <h2 className="pay-info-title">Payment Information</h2><label htmlFor="name">Name *</label>
                        <div className="payment-form-input"><input className="input-no-border w-input" maxLength={256} name="name" data-name="Name" placeholder="Enter your full name" type="text" id="name" required /></div><label htmlFor="email">Email *</label>
                        <div className="payment-form-input"><input className="input-no-border w-input" maxLength={256} name="email" data-name="Email" placeholder="Enter your email address" type="email" id="email" required /></div><label htmlFor="email-2">Card Details *</label>
                        <div className="payment-form-input d-flex-g-10"><img src="images/card-ico.png" loading="lazy" alt="" /><input className="input-no-border w-input" maxLength={256} name="card-no" data-name="card-no" placeholder="0000 0000 0000 000" type="text" id="card-no" required /><input className="input-no-border txt-expiry w-input" maxLength={256} name="expiry" data-name="expiry" placeholder="MM /YY" type="text" id="expiry" required /><input className="input-no-border txt-ccv w-input" maxLength={256} name="cvv" data-name="cvv" placeholder="CVV" type="text" id="cvv" required /><input className="input-no-border txt-zip w-input" maxLength={256} name="zip-code" data-name="zip-code" placeholder="ZIP Code" type="text" id="zip-code" required /></div>
                      </div>
                      <div className="div-payment-features">
                        <h3 className="pay-feature-title">You have to pay</h3>
                        <div className="pay-amount">$99/mo</div>
                        <div className="v-separator-gray" />
                        <h2 className="pay-feature-subtitle">What’s included</h2>
                        <ul role="list" className="pay-feature-ol w-list-unstyled">
                          <li className="pay-feature-li">Eget nunc scelerisque viverra</li>
                          <li className="pay-feature-li">Mauris in aliquam</li>
                          <li className="pay-feature-li">Nunc faucibus a pellentesque sit</li>
                          <li className="pay-feature-li">Ut sem viverra aliquet</li>
                          <li className="pay-feature-li">Pretium vulputate sapien</li>
                        </ul>
                      </div>
                    </div>
                    <div className="submit-btn-wrapper"><input type="submit" data-wait="Please wait..." className="submit-button w-button" defaultValue="Submit" /></div>
                  </form>
                  <div className="w-form-done">
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div className="w-form-fail">
                    <div>Oops! Something went wrong while submitting the form.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Script src="https://code.jquery.com/jquery-3.6.0.min.js" strategy="beforeInteractive" />
        <Script src="/js/webflow.js" strategy='afterInteractive' />
        <Script src="/js/script.js" strategy='afterInteractive' />
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const markdownWithMetadata = fs
    .readFileSync("public/content/template.md")
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      data: parsedMarkdown.data
    }
  };
};

export default UserJourney1Layer2;
