import Head from 'next/head'
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from 'react-use';

const UserJourney2Layer1 = ({ data }) => {

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
            <div className="py-100">
                <div className="max-width-482">
                    <div className="d-block-column justify-center"><img src="images/logo1.png" loading="lazy" alt="" />
                        <h1>Sign In</h1>
                        <div className="form-block w-form">
                            <form id="email-form" name="email-form" data-name="Email Form" method="get" data-wf-page-id="65c677c45267cc18259d7d05" data-wf-element-id="d2aa9f5e-e2b4-be80-88e9-8b2a881250f9">
                                <div className="form-label-flex"><label htmlFor="email" className="field-label">Email address</label></div><input className="text-field w-input" maxLength={256} name="email" data-name="Email" placeholder="Enter your email address" type="email" id="email" required />
                                <div className="form-label-flex"><label htmlFor="email-2" className="field-label">Password</label>
                                    <a href="#" className="password-hide w-inline-block"><img src="images/pw-hide-icon.png" loading="lazy" alt="" />
                                        <div className="text-block">Hide</div>
                                    </a>
                                </div><input className="text-field w-input" maxLength={256} name="Password" data-name="Password" placeholder="Enter your password" type="password" id="Password" required /><input type="submit" data-wait="Please wait..." className="btn-sign-up w-button" defaultValue="Sign In" />
                            </form>
                            <div className="w-form-done">
                                <div>Thank you! Your submission has been received!</div>
                            </div>
                            <div className="w-form-fail">
                                <div>Oops! Something went wrong while submitting the form.</div>
                            </div>
                        </div>
                        <div className="form-separator my-40">
                            <div className="div-block-2" />
                            <div>OR</div>
                            <div className="div-block-2" />
                        </div>
                        <div className="social-media-sign-up-wrapper">
                            <a href="#" className="btn-social-media-sign-up w-inline-block"><img src="images/google-ico.png" loading="lazy" alt="" />
                                <div>Continue with Google</div>
                            </a>
                            <a href="#" className="btn-social-media-sign-up w-inline-block"><img src="images/fb-ico.png" loading="lazy" alt="" />
                                <div>Continue with Facebook</div>
                            </a>
                        </div>
                        <div className="mt-48">
                            <div className="text-block-2">Don’t have an account? &nbsp;<a href="#" className="link">Sign Up</a>
                            </div>
                        </div>
                    </div>
                </div>
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

export default UserJourney2Layer1;
