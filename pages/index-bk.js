import Head from 'next/head';
import Script from 'next/script';
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from 'react-use';
import SideNav from '../components/sideNav';
import HeaderDiv from '../components/headerDiv';
import ChatForm from '../components/chatForm';
import DiagnosisDropdown from '../components/diagnosisDropdown';

const Index = ({ data }) => {

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
            <div className="body-flex">
                <SideNav />
                <div className="conversation-body">
                    <HeaderDiv />
                    <div className="p-36-60 stretch-height">
                        <div>
                            <DiagnosisDropdown />
                        </div>
                        <div>
                            <div className="max-width-600">
                                <div><img src="images/chatplaceholder.png" loading="lazy" alt="" className="img-chat-placeholder" /></div>
                                <div className="p-12">
                                    <div className="new-chat-title">Welcome to our AI Health Chat!</div>
                                    <div className="new-chat-subtitle">How can I assist you in managing your skins today?</div>
                                </div>
                                <div>
                                    <div className="text-block-5">Common symptom</div>
                                    <div className="d-flex gap-20 mt-16 wrap-children">
                                        <div className="symptom-pill">
                                            <div>Symptom A</div>
                                        </div>
                                        <div className="symptom-pill">
                                            <div>Symptom B</div>
                                        </div>
                                        <div className="symptom-pill">
                                            <div>Symptom C</div>
                                        </div>
                                        <div className="symptom-pill">
                                            <div>Symptom D</div>
                                        </div>
                                        <div className="symptom-pill">
                                            <div>Symptom E</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ChatForm />
                </div>
            </div>
            <Script src="https://code.jquery.com/jquery-3.6.0.min.js" strategy="beforeInteractive" />
            <Script src="/js/webflow.js" strategy='afterInteractive' />
            <Script src="/js/script.js" strategy='afterInteractive' />


        </div>
    )
}

export const getStaticProps = async () => {
    const markdownWithMetadata = fs
        .readFileSync("public/content/index.md")
        .toString();

    const parsedMarkdown = matter(markdownWithMetadata);

    return {
        props: {
            data: parsedMarkdown.data
        }
    };
};

export default Index;
