import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import HeaderNav from '../components/headerNav';
import SideNav from '../components/sideNav';

const UserJourney3Layer4 = ({ data }) => {

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
                                                <a href="/user-journey-3-layer-3" className="setting-link w-inline-block">
                                                    <div>Profile</div>
                                                </a>
                                                <div className="v-divider" />
                                                <a href="/user-journey-3-layer-4" aria-current="page" className="setting-link settings-nav-active w-inline-block w--current">
                                                    <div className="text-block-10">Notification</div>
                                                </a>
                                                <div className="v-divider" />
                                                <a href="/user-journey-3-layer-5" className="setting-link w-inline-block">
                                                    <div>Billing</div>
                                                </a>
                                            </div>
                                            <div className="ps-20">
                                                <div className="w-form">
                                                    <form id="email-form" name="email-form" data-name="Email Form" method="get" data-wf-page-id="65ca56832c9b82caba9945de" data-wf-element-id="d240501c-71e2-19ad-ed56-fd5aae7e2fe4"><label className="w-checkbox form-chkbox"><input type="checkbox" id="checkbox" name="checkbox" data-name="Checkbox" className="w-checkbox-input checkbox" /><span className="checkbox-label w-form-label" htmlFor="checkbox">News and updates</span>
                                                        <div className="chackbox-description">News about products and features updates.</div>
                                                    </label><label className="w-checkbox form-chkbox"><input type="checkbox" id="checkbox-4" name="checkbox-4" data-name="Checkbox 4" className="w-checkbox-input checkbox" /><span className="checkbox-label w-form-label" htmlFor="checkbox-4">Tips and Tutorials</span>
                                                            <div className="chackbox-description">News about products and features updates.</div>
                                                        </label><label className="w-checkbox form-chkbox"><input type="checkbox" id="checkbox-3" name="checkbox-3" data-name="Checkbox 3" className="w-checkbox-input checkbox" /><span className="checkbox-label w-form-label" htmlFor="checkbox-3">User research</span>
                                                            <div className="chackbox-description">News about products and features updates.</div>
                                                        </label><label className="w-checkbox form-chkbox"><input type="checkbox" id="checkbox-2" name="checkbox-2" data-name="Checkbox 2" className="w-checkbox-input checkbox" /><span className="checkbox-label w-form-label" htmlFor="checkbox-2">Reminders</span>
                                                            <div className="chackbox-description">News about products and features updates.</div>
                                                        </label>
                                                        <a href="#" className="btn-submit _w-132px w-button">Save</a>
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

export default UserJourney3Layer4;
