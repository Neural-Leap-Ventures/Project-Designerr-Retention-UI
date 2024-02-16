import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from 'react-use';
import HeaderNav from '../components/headerNav';
import SideNav from '../components/sideNav';

const UserJourney3Layer5 = ({ data }) => {

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
                <HeaderNav />
                <section className="section-body">
                    <div className="body-flex pt-50">
                        <SideNav />
                        <div className="body-content py-150-100 bg-gray px-2vw pb-0">
                            <div className="dashboard-body">
                                <div>
                                    <h1 className="heading-3">Settings</h1>
                                    <div className="settings-block">
                                        <div className="settings-inner-wrapper">
                                            <div className="settings-nav">
                                                <a href="/user-journey-3-layer-3" className="setting-link w-inline-block" passHref>
                                                    <div>Profile</div>
                                                </a>
                                                <div className="v-divider" />
                                                <a href="/user-journey-3-layer-4" className="setting-link w-inline-block" passHref>
                                                    <div className="text-block-10">Notification</div>
                                                </a>
                                                <div className="v-divider" />
                                                <a href="user-journey-3-layer-5" aria-current="page" className="setting-link settings-nav-active w-inline-block w--current" passHref>
                                                    <div>Billing</div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="billing-flex">
                                            <div className="payment-div">
                                                <h1 className="h3-bold">Your Credit Card</h1>
                                                <div className="cc-container">
                                                    <div className="div-credit-card">
                                                        <div className="cc-row">
                                                            <div><img src="images/cc-logo.png" loading="lazy" alt="" /></div>
                                                            <div><img src="images/cc-type.png" loading="lazy" alt="" /></div>
                                                        </div>
                                                        <div className="cc-row-mid">
                                                            <div>
                                                                <div className="cc-number-text">Number</div>
                                                                <div className="cc-number">**** **** 222 0034</div>
                                                            </div>
                                                            <div><img src="images/cc-chip.png" loading="lazy" alt="" /></div>
                                                        </div>
                                                        <div className="cc-row-bottom">
                                                            <div>
                                                                <div className="cc-name">Craig S.</div>
                                                            </div>
                                                            <div>
                                                                <div className="cc-number-text">End Date</div>
                                                                <div className="cc-name">09/25</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h1 className="h3-semi">Recent Payment</h1>
                                                <div className="payment-data-div">
                                                    <div className="payment-strip">
                                                        <div className="payment-description">
                                                            <div>Charge Back</div>
                                                        </div>
                                                        <div className="payment-type-payment">
                                                            <div>Payment</div>
                                                        </div>
                                                        <div className="payment-amount-debit">
                                                            <div>-$140,20</div>
                                                        </div>
                                                        <a href="#" className="btn-more w-inline-block">
                                                            <div className="dot" />
                                                            <div className="dot" />
                                                            <div className="dot" />
                                                        </a>
                                                    </div>
                                                    <div className="payment-strip">
                                                        <div className="payment-description">
                                                            <div>Information Requested</div>
                                                        </div>
                                                        <div className="payment-type-refund">
                                                            <div>Refund</div>
                                                        </div>
                                                        <div className="payment-amount-credit">
                                                            <div>+$40,20</div>
                                                        </div>
                                                        <a href="#" className="btn-more w-inline-block">
                                                            <div className="dot" />
                                                            <div className="dot" />
                                                            <div className="dot" />
                                                        </a>
                                                    </div>
                                                    <div className="payment-strip">
                                                        <div className="payment-description">
                                                            <div>Settled</div>
                                                        </div>
                                                        <div className="payment-type-payment">
                                                            <div>Payment</div>
                                                        </div>
                                                        <div className="payment-amount-debit">
                                                            <div>-$74,70</div>
                                                        </div>
                                                        <a href="#" className="btn-more w-inline-block">
                                                            <div className="dot" />
                                                            <div className="dot" />
                                                            <div className="dot" />
                                                        </a>
                                                    </div>
                                                    <div className="payment-strip">
                                                        <div className="payment-description">
                                                            <div>Authorised</div>
                                                        </div>
                                                        <div className="payment-type-credit">
                                                            <div>Credit</div>
                                                        </div>
                                                        <div className="payment-amount-debit">
                                                            <div>-$1,20</div>
                                                        </div>
                                                        <a href="#" className="btn-more w-inline-block">
                                                            <div className="dot" />
                                                            <div className="dot" />
                                                            <div className="dot" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="div-payment-details">
                                                <a id="btnEditPayInfo" href="#" className="link-block w-inline-block">
                                                    <div>Edit payment info</div>
                                                </a>
                                                <h3 className="h3-pay-details">Payment Detail</h3>
                                                <div className="div-block-6">
                                                    <div className="pd-dp-wrapper"><img src="images/pay-dp.png" loading="lazy" alt="" className="payment-dp" />
                                                        <div>Mark Henry</div>
                                                    </div>
                                                    <div className="h-divider" />
                                                    <div className="pd-dp-wrapper">
                                                        <div className="text-block-12">Amount Due</div>
                                                        <div className="amount-due">$250.00</div>
                                                        <div className="text-block-12">Visa $250.00</div>
                                                    </div>
                                                    <div className="h-divider" />
                                                    <div className="pd-dp-wrapper">
                                                        <div className="text-block-12">Billing Plan</div>
                                                        <div className="billing-plan">Company Start</div>
                                                    </div>
                                                    <div className="div-block-7">
                                                        <div className="d-flex gap-10"><img src="images/info-infornation.png" loading="lazy" alt="" />
                                                            <div>5 team members ($8 / Month each)</div>
                                                        </div>
                                                        <div>
                                                            <ul role="list">
                                                                <li className="list-item">100 GB Extra storage ($25.00)</li>
                                                                <li className="list-item">8 extra hours ($2 / hour)</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="h-divider" />
                                                    <div className="_w-100 d-flex justify-between align-top">
                                                        <div className="pd-dp-wrapper justify-start">
                                                            <div className="text-block-12">Billing Plan</div>
                                                            <div className="billing-plan-data">275 New North<br />Road, London‎</div>
                                                        </div>
                                                        <div className="pd-dp-wrapper justify-start">
                                                            <div className="text-block-12">Invoice Number</div>
                                                            <div className="billing-plan-data">49682</div>
                                                        </div>
                                                        <div className="pd-dp-wrapper justify-start">
                                                            <div className="text-block-12">Due Date</div>
                                                            <div className="billing-plan-data">15 May, 2022</div>
                                                        </div>
                                                    </div>
                                                    <div className="h-divider" />
                                                    <div className="_w-100 d-flex justify-between align-bottom">
                                                        <div className="pd-dp-wrapper justify-end">
                                                            <div className="text-block-12">Subtotal: <span className="text-span-2">$250.00</span></div>
                                                            <div className="text-block-12">Tax: <span className="text-span-2">$25.00</span></div>
                                                        </div>
                                                        <div className="pd-dp-wrapper justify-end">
                                                            <div className="text-block-12">Amount Due (USD): <span className="text-span-2">$275.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="h-divider" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-40 d-md-flex-center">
                                            <a href="#" className="btn-submit _w-132px w-button">Save</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <div id="editPaymentInfo" className="payment-info-popup-wrapper">
                    <div className="payment-info-popup">
                        <div className="d-flex justify-between mb-40">
                            <div>
                                <h2 className="heading-2 text-black m-0">Edit Payment information</h2>
                            </div>
                            <div>
                                <a id="btnClosePaymentEdit" href="#" className="btn-close w-button">X</a>
                            </div>
                        </div>
                        <div className="mb-20">
                            <h4>Payment method</h4>
                        </div>
                        <div className="div-card-list">
                            <a href="#" className="li-credit-card w-inline-block"><img src="images/ccd2.png" loading="lazy" alt="" className="li-card-img" /></a>
                            <a href="#" className="li-credit-card w-inline-block"><img src="images/Iconadd.png" loading="lazy" alt="" />
                                <div>Add card</div>
                            </a>
                        </div>
                        <div className="w-form">
                            <form id="email-form" name="email-form" data-name="Email Form" method="get" data-wf-page-id="65ca621bf00adde8078b77ef" data-wf-element-id="5ad3864f-f2d5-ba9b-4a73-41268d78ff14">
                                <div><label htmlFor="email">Card Details *</label>
                                    <div className="payment-form-input d-flex-g-10"><img src="images/card-ico.png" loading="lazy" alt="" /><input className="input-no-border w-input" maxLength={256} name="card-no" data-name="Card No" placeholder="0000 0000 0000 000" type="text" id="card-no" required /><input className="input-no-border txt-expiry w-input" maxLength={256} name="expiry" data-name="Expiry" placeholder="MM /YY" type="text" id="expiry" required /><input className="input-no-border txt-ccv w-input" maxLength={256} name="cvv" data-name="Cvv" placeholder="CVV" type="text" id="cvv" required /><input className="input-no-border txt-zip w-input" maxLength={256} name="zip-code" data-name="Zip Code" placeholder="ZIP Code" type="text" id="zip-code" required /></div><label htmlFor="name">Name *</label>
                                    <div className="payment-form-input"><input className="input-no-border w-input" maxLength={256} name="name" data-name="Name" placeholder type="text" id="name" /></div><label htmlFor="email">Email *</label>
                                    <div className="payment-form-input"><input className="input-no-border w-input" maxLength={256} name="email" data-name="Email" placeholder type="email" id="email" required /></div><label htmlFor="email-2">Billing Address</label>
                                    <div className="payment-form-input"><input className="input-no-border w-input" maxLength={256} name="billing_address" data-name="billing_address" placeholder type="email" id="billing_address" /></div>
                                </div>
                            </form>
                            <div className="w-form-done">
                                <div>Thank you! Your submission has been received!</div>
                            </div>
                            <div className="w-form-fail">
                                <div>Oops! Something went wrong while submitting the form.</div>
                            </div>
                        </div>
                        <div className="mt-40">
                            <a href="#" className="btn-submit w-button">Save and Continue</a>
                        </div>
                    </div>
                </div>

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

export default UserJourney3Layer5;
