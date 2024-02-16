import Head from 'next/head';
import Script from 'next/script';
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from 'react-use';
import HeaderNav from '../components/headerNav';
import SideNav from '../components/sideNav';

const UserJourney2Layer2 = ({ data }) => {

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
                                    <h1 className="heading-3">Hello John</h1>
                                    <div className="d-flex-between mt-30">
                                        <div>
                                            <a href="#" className="btn-submit-sm btn-outlined w-inline-block">
                                                <div>Import Design</div><img src="images/carbon_document-import.png" loading="lazy" alt="" />
                                            </a>
                                        </div>
                                        <div>
                                            <div data-hover="false" data-delay={0} className="w-dropdown">
                                                <div className="w-dropdown-toggle">
                                                    <div className="w-icon-dropdown-toggle" />
                                                    <div className="text-block-7">Sort by</div>
                                                </div>
                                                <nav className="w-dropdown-list">
                                                    <a href="#" className="w-dropdown-link">Link 1</a>
                                                    <a href="#" className="w-dropdown-link">Link 2</a>
                                                    <a href="#" className="w-dropdown-link">Link 3</a>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dashboard-flex">
                                        <div className="design-block">
                                            <div className="design-img-div"><img src="images/db1.png" loading="lazy" alt="" className="db-thumb" /></div>
                                            <div className="design-caption-wrapper">
                                                <div className="design-title">Endpoints</div>
                                                <div className="design-subtitle">30 minutes ago</div>
                                            </div>
                                        </div>
                                        <div className="design-block">
                                            <div className="design-img-div"><img src="images/db2.png" loading="lazy" alt="" className="db-thumb" /></div>
                                            <div className="design-caption-wrapper">
                                                <div className="design-title">Frontends</div>
                                                <div className="design-subtitle">17/11/2023</div>
                                            </div>
                                        </div>
                                        <div className="design-block">
                                            <div className="design-img-div"><img src="images/db3.png" loading="lazy" alt="" className="db-thumb" /></div>
                                            <div className="design-caption-wrapper">
                                                <div className="design-title">Designerr</div>
                                                <div className="design-subtitle">17/11/2023</div>
                                            </div>
                                        </div>
                                        <div className="design-block">
                                            <div className="design-img-div"><img src="images/db4.png" loading="lazy" alt="" className="db-thumb" /></div>
                                            <div className="design-caption-wrapper">
                                                <div className="design-title">Accently</div>
                                                <div className="design-subtitle">17/11/2023</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dashboard-footer">
                                    <a href="#" className="btn-submit w-inline-block">
                                        <div>Create New Project</div>
                                    </a>
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

export default UserJourney2Layer2;
