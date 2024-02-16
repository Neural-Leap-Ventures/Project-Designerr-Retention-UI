import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from 'react-use';
import HeaderNav from '../components/headerNav';
import SideNav from '../components/sideNav';

const UserJourney1Layer3 = ({ data }) => {

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
            <div className="body-content py-150-100 bg-gray px-2vw">
              <div className="slide-how-to-use">
                <div className="slide-h"><img src="images/how-to-use-1-h.png" loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 991px) 701.6015625px, (max-width: 1919px) 83vw, 94vw" srcSet="images/how-to-use-1-h-p-500.png 500w, images/how-to-use-1-h-p-800.png 800w, images/how-to-use-1-h-p-1080.png 1080w, images/how-to-use-1-h.png 1528w" alt="" className="_w-100" /></div>
                <div className="slide-v">
                  <div className="_w-100 step-v-img">
                    <div className="step-v-overlay" />
                    <h1 className="heading-2">Create New Design</h1><img src="images/pana.png" loading="lazy" alt="" />
                  </div>
                  <div className="step-v-bottom">
                    <div className="text-block-4">Create new design by entering your preferred instruction</div><img src="images/step1form.png" loading="lazy" sizes="100vw" srcSet="images/step1form-p-500.png 500w, images/step1form.png 646w" alt="" className="max-w-90" />
                  </div>
                </div>
                <div className="div-htu-overlay">
                  <div className="htu-skip-wrapper">
                    <a href="#" className="btn-htu-nav w-inline-block">
                      <div>Skip</div>
                    </a>
                  </div>
                  <div>
                    <div className="htu-step-bullets-wrapper">
                      <Link href="/user-journey-1-layer-3">
                        <div aria-current="page" className="htu-step-bullet-link htu-active w-inline-block w--current">.</div>
                      </Link>
                      <Link href="/user-journey-1-layer-4">
                        <div className="htu-step-bullet-link w-inline-block">.</div>
                      </Link>
                      <Link href="/user-journey-1-layer-5">
                        <div className="htu-step-bullet-link w-inline-block">.</div>
                      </Link>


                    </div>
                    <div className="htu-next-wrapper">
                      <Link href="/user-journey-1-layer-4">
                        <div className="btn-htu-nav w-inline-block">Next</div>
                      </Link>
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

export default UserJourney1Layer3;
