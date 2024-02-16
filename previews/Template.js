import Head from 'next/head'
import Script from 'next/script'
import WebsiteHeader from '../components/websiteHeader';
import WebsiteFooter from '../components/websiteFooter';
import React from "react";

export default class TemplatePagePreview extends React.Component {
    render() {
        const { entry } = this.props;

        return (
            <div>
                <Head>
                    <meta charSet="utf-8" />
                    {/* Title Tag */}
                    <title>{entry.getIn(['data', 'titleTag'])}</title>

                    {/* Meta Description */}
                    <meta content={entry.getIn(['data', 'metaDescription'])} name="description" />

                    {/* OG Title */}
                    <meta content={entry.getIn(['data', 'ogTitle'])} property="og:title" />

                    {/* OG Description */}
                    <meta content={entry.getIn(['data', 'ogDescription'])} property="og:description" />

                    {/* OG Image */}
                    <meta content={entry.getIn(['data', 'ogImage'])} property="og:image" />

                    {/* Twitter Title */}
                    <meta content={entry.getIn(['data', 'twittertitle'])} property="twitter:title" />

                    {/* Twitter Description */}
                    <meta content={entry.getIn(['data', 'twitterDescription'])} property="twitter:description" />

                    {/* Twitter Image */}
                    <meta content={entry.getIn(['data', 'twitterImage'])} property="twitter:image" />

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
                    <WebsiteHeader />
                    <div className="section-58 wf-section">
                        <div className="div-block-209">
                            <div className="div-block-201">
                                <h1 className="heading-73">Our mission is to make the internet<br /> <span className="text-span-22">More user friendly</span></h1>
                                <p className="paragraph-53">Hyperscale Media was built on the premise of making companies more efficient and valuable. When these two meet, a company is able to gain a severe amount of leverage in its industry.</p>
                            </div><img src="images/Frame_2.png" loading="lazy" sizes="(max-width: 1279px) 100vw, (max-width: 1919px) 90vw, 1500px" srcSet="images/Frame_2-p-500.png 500w, images/Frame_2-p-800.png 800w, images/Frame_2-p-1080.png 1080w, images/Frame_2-p-1600.png 1600w, images/Frame_2-p-2000.png 2000w, images/Frame_2-p-2600.png 2600w, images/Frame_2.png 3498w" alt="" className="image-111" />
                        </div>
                    </div>
                    <div className="section-60 wf-section">
                        <div className="div-block-210">
                            <div className="div-block-203">
                                <h1 className="heading-75">Reach Your Potential with a Data Driven Partner</h1>
                                <p className="paragraph-54">Collecting CRO Data from 100+ companies, we know what will make your digital assets convert. Turn visitors into customers within seconds.</p>
                            </div>
                            <div className="div-block-208">
                                <div className="div-block-205"><img src="images/Fram-1.png" loading="lazy" width={100} sizes="(max-width: 479px) 100vw, 150px" srcSet="images/Fram-1-p-500.png 500w, images/Fram-1.png 692w" alt="" className="image-110" />
                                    <h1 className="heading-76">Web Applications</h1>
                                </div>
                                <div className="div-block-205"><img src="images/Frame-6459.png" loading="lazy" width={100} sizes="(max-width: 479px) 100vw, 150px" srcSet="images/Frame-6459-p-500.png 500w, images/Frame-6459.png 692w" alt="" className="image-110" />
                                    <h1 className="heading-76">Marketing Designs And Digital Ads</h1>
                                </div>
                                <div className="div-block-205"><img src="images/Frame-3_1.png" loading="lazy" width={100} alt="" className="image-110" />
                                    <h1 className="heading-76">Packaging</h1>
                                </div>
                                <div className="div-block-205"><img src="images/Frame-2.png" loading="lazy" width={100} sizes="(max-width: 479px) 100vw, 150px" srcSet="images/Frame-2-p-500.png 500w, images/Frame-2.png 692w" alt="" className="image-110" />
                                    <h1 className="heading-76">Mobile Applications</h1>
                                </div>
                                <div className="div-block-205"><img src="images/Frame-4.png" loading="lazy" width={100} alt="" className="image-110" />
                                    <h1 className="heading-76">Websites</h1>
                                </div>
                                <div className="div-block-205"><img src="images/Frame-5.png" loading="lazy" width={100} sizes="(max-width: 479px) 100vw, 150px" srcSet="images/Frame-5-p-500.png 500w, images/Frame-5.png 692w" alt="" className="image-110" />
                                    <h1 className="heading-76">Illustrations</h1>
                                </div>
                                <div className="div-block-205"><img src="images/Frame-6.png" loading="lazy" width={100} sizes="(max-width: 479px) 100vw, 150px" srcSet="images/Frame-6-p-500.png 500w, images/Frame-6.png 692w" alt="" className="image-110" />
                                    <h1 className="heading-76">Powerpoint Designs</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <WebsiteFooter />
                </div>
                <Script id="script-1" src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=605c57757b3ae676ffca1b7b" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></Script>
                <Script id="script-2" src="js/webflow.js" type="text/javascript"></Script>
                {/* [if lte IE 9]><Script id="script-3" src="https://cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"></Script><![endif] */}
            </div>
        )
    }
}