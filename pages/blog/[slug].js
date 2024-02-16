import React, { useEffect } from "react";
import Head from "next/head";
import Script from 'next/script'
import WebsiteHeader from '../../components/websiteHeader';
import WebsiteFooter from '../../components/websiteFooter';
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import serverSideTracking from '../../customFunctions/server-side-tracking'
import { useEffectOnce } from 'react-use';

const Blog = ({ htmlString, data }) => {

    useEffectOnce(() => {
        serverSideTracking(data.eventNameForTracking, window.location.href, data.eventIdForTracking);
    });

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

                {/* Facebook Pixel */}
                <script dangerouslySetInnerHTML={{
                    __html: `!function (f, b, e, v, n, t, s) {
                      if (f.fbq) return; n = f.fbq = function () {
                        n.callMethod ?
                          n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                      };
                      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
                      n.queue = []; t = b.createElement(e); t.async = !0;
                      t.src = v; s = b.getElementsByTagName(e)[0];
                      s.parentNode.insertBefore(t, s)
                    }(window, document, 'script',
                      'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '612352600179070');
                    fbq('track', 'PageView');
                    fbq('trackCustom', ${data.eventNameForTracking}, { eventID: ${data.eventIdForTracking} });`
                }}
                />
                <noscript dangerouslySetInnerHTML={{
                    __html: `<img height="1" width="1" style="display:none"
                    src="https://www.facebook.com/tr?id=612352600179070&ev=PageView&noscript=1"/>`}}
                />

                {/* Autopilot Pixel */}
                <script dangerouslySetInnerHTML={{
                    __html: `type="text/javascript">(function (o) { var b = "https://fastemu.co/anywhere/", t = "17d3dd217754459aa87a15155f91958a856115af1ec449f399087dc3be744da4", a = window.AutopilotAnywhere = { _runQueue: [], run: function () { this._runQueue.push(arguments); } }, c = encodeURIComponent, s = "SCRIPT", d = document, l = d.getElementsByTagName(s)[0], p = "t=" + c(d.title || "") + "&u=" + c(d.location.href || "") + "&r=" + c(d.referrer || ""), j = "text/javascript", z, y; if (!window.Autopilot) window.Autopilot = a; if (o.app) p = "devmode=true&" + p; z = function (src, asy) { var e = d.createElement(s); e.src = src; e.type = j; e.async = asy; l.parentNode.insertBefore(e, l); }; y = function () { z(b + t + '?' + p, true); }; if (window.attachEvent) { window.attachEvent("onload", y); } else { window.addEventListener("load", y, false); } })({});`
                }}
                />

                {/* HotJar Pixel */}
                <script dangerouslySetInnerHTML={{
                    __html: `(function (h, o, t, j, a, r) {
                    h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
                    h._hjSettings = { hjid: 2629784, hjsv: 6 };
                    a = o.getElementsByTagName('head')[0];
                    r = o.createElement('script'); r.async = 1;
                    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
                    a.appendChild(r);
                    })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');`
                }}
                />
            </Head>
            <div>
                <WebsiteHeader />
                <div className="section-34 _2 wf-section">
                    <div className="div-block-197">
                        <h1 className="heading-42">{data.blogTitle}</h1>
                        <p className="paragraph-33">{data.blogDescription}</p>
                        <p className="paragraph-31"><strong>{data.author}</strong> &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-span">{data.publishDate} &nbsp;&nbsp;&nbsp;&nbsp;{data.timeToRead}</span></p>
                        <img src={data.blogImage} loading="lazy" width={1119} sizes="(max-width: 767px) 95vw, (max-width: 991px) 90vw, (max-width: 1279px) 800px, (max-width: 1439px) 59vw, 800px" alt="" className="image-64" />
                        <div dangerouslySetInnerHTML={{ __html: htmlString }}></div>
                    </div>
                </div>
                <WebsiteFooter />
            </div>
            <Script id="script-1" src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=605c57757b3ae676ffca1b7b" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></Script>
            <Script id="script-2" src="js/webflow.js" type="text/javascript"></Script>
            {/* [if lte IE 9]><Script id="script-3" src="https://cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"></Script><![endif] */}
        </div>
    );
};

export const getStaticPaths = async () => {
    const files = fs.readdirSync("public/posts");
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace(".md", "")
        }
    }));

    return {
        paths,
        fallback: false
    };
};

export const getStaticProps = async ({ params: { slug } }) => {
    const markdownWithMetadata = fs
        .readFileSync(path.join("public/posts", slug + ".md"))
        .toString();

    const parsedMarkdown = matter(markdownWithMetadata);

    const htmlString = marked(parsedMarkdown.content);

    return {
        props: {
            htmlString,
            data: parsedMarkdown.data
        }
    };
};

export default Blog;