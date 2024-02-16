import Head from 'next/head';
import Script from 'next/script';
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from 'react-use';
import HeaderNavWithoutSideNav from '../components/headerNavWithoutSideNav';

const UserJourney1Layer8 = ({ data }) => {

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
                <section className="section-body min-h-100vh">
                    <div className="body-flex-tab-v">
                        <div className="_w-50 pt-100 bg-white px-2vw-1vw left-50 min-h-100vh">
                            <div className="min-h-100 d-flex-h-middle width-90pr tab-align-between">
                                <h1 className="heading-1 text-center mb-50">Create New Design</h1>
                                <div className="d-block-md mb-50">
                                    <div className="center-aligned-div"><img src="images/loading-img.png" loading="lazy" alt="" className="image" /></div>
                                </div>
                                <div className="w-form">
                                    <form id="email-form" name="email-form" data-name="Email Form" method="get" data-wf-page-id="65c53f02847f18bc6d75e694" data-wf-element-id="feb128ce-ff19-37df-095b-453ffb6b7f9d">
                                        <div className="flex-v-center">
                                            <div className="text-block-5"><span className="text-span">Ex:</span> Create a sign up page</div>
                                            <div className="form-input"><input className="input-no-border w-input" maxLength={256} name="name" data-name="Name" placeholder="Enter instructions for your design" type="text" id="name" /></div>
                                            <a href="#" className="btn-submit btn-disabled w-inline-block">
                                                <div>Create</div>
                                            </a>
                                        </div>
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
                        <div className="_w-50 pt-100 bg-gray px-1vw-2vw right-50 min-h-100vh">
                            <div className="min-h-100 d-flex-h-middle">
                                <div className="center-aligned-div"><img src="images/loading-img.png" loading="lazy" alt="" className="image" /></div>
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

export default UserJourney1Layer8;
