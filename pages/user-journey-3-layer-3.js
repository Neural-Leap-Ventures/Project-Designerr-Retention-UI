import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from 'react-use';
import { useRouter } from 'next/router';
import HeaderNav from '../components/headerNav';
import SideNav from '../components/sideNav';

const UserJourney3Layer3 = ({ data }) => {

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
                                                <a href="/user-journey-3-layer-3" aria-current="page" className="setting-link settings-nav-active w-inline-block w--current">
                                                    <div>Profile</div>
                                                </a>
                                                <div className="v-divider" />
                                                <a href="/user-journey-3-layer-4" className="setting-link w-inline-block">
                                                    <div className="text-block-10">Notification</div>
                                                </a>
                                                <div className="v-divider" />
                                                <a href="/user-journey-3-layer-5" className="setting-link w-inline-block">
                                                    <div>Billing</div>
                                                </a>
                                            </div>
                                            <div className="setting-dp-block">
                                                <div className="change-dp-inner-block"><img src="images/settings-dp.png" loading="lazy" alt="" className="setting-dp" />
                                                    <a href="#" className="change-dp-link w-inline-block">
                                                        <div>Change Photo</div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="ps-20">
                                                <div className="w-form">
                                                    <form id="email-form" name="email-form" data-name="Email Form" method="get" data-wf-page-id="65ca461de8953a7d9af23811" data-wf-element-id="d240501c-71e2-19ad-ed56-fd5aae7e2fe4"><label htmlFor="name" className="form-label">Name *</label>
                                                        <div className="form-input mb-40"><input className="input-no-border w-input" maxLength={256} name="name" data-name="Name" placeholder="Enter your username" type="text" id="name" required /></div>
                                                        <label htmlFor="email" className="form-label">Email Address *</label>
                                                        <div className="form-input mb-40"><input className="input-no-border w-input" maxLength={256} name="email" data-name="Email" placeholder="Enter your email address" type="email" id="email" required />
                                                        </div><label htmlFor="password" className="form-label">Password</label>
                                                        <div className="form-input mb-40"><input className="input-no-border w-input" maxLength={256} name="Password" data-name="Password" placeholder="**********" type="email" id="password" />
                                                        </div><label htmlFor="password-2" className="form-label">Confirm Password</label>
                                                        <div className="form-input mb-40"><input className="input-no-border w-input" maxLength={256} name="password-2" data-name="Password 3" placeholder="**********" type="email" id="password-2" /></div>
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

export default UserJourney3Layer3;
