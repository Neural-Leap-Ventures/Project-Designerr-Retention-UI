import Head from 'next/head';
import fs from "fs";
import matter from "gray-matter";
import React, { useState } from 'react';
import HeaderNavWithoutSideNav from '../components/headerNavWithoutSideNav';

const UserJourney2Layer3 = ({ data }) => {
    const [prompt, setPrompt] = useState('');
    //const [category, setCategory] = useState('landingpage');
    const category='landingpage';
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const userToken = localStorage.getItem('token'); // Retrieve the token from local storage
        console.log('User Token:', userToken);

        try {
            const response = await fetch('/api/generate_webpage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userToken}`, // Set the token in the Authorization header
                },
                body: JSON.stringify({ prompt, category }), // Set the body to match the required format
            });

            const data = await response.json();

            if (!response.ok) {
                console.log('Response not ok:', data);
                if (data.error) {
                    setError(data.error);
                } else {
                    throw new Error('Failed');
                }
                return;
            }

            // Handle the response data as needed
            console.log('Response Data:', data);

        } catch (error) {
            console.error('Fetch Error:', error);
            setError(error.message);
        }
    };

    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <title>{data.titleTag}</title>
                <meta content={data.metaDescription} name="description" />
                <meta content={data.ogTitle} property="og:title" />
                <meta content={data.ogDescription} property="og:description" />
                <meta content={data.ogImage} property="og:image" />
                <meta content={data.twitterTitle} property="twitter:title" />
                <meta content={data.twitterDescription} property="twitter:description" />
                <meta content={data.twitterImage} property="twitter:image" />
                <meta property="og:type" content="website" />
                <meta content="summary_large_image" name="twitter:card" />
                <meta content="width=device-width, initial-scale=1" name="viewport" />
                <link href="images/favicon.png" rel="icon" type="image/png" />
                <link href="images/webclip.png" rel="apple-touch-icon" />
            </Head>
            <div>
                <HeaderNavWithoutSideNav />
                <section className="section-body">
                    <div className="body-flex-tab-v">
                        <div className="_w-50 pt-100 bg-white px-2vw-1vw left-50 min-h-100vh">
                            <div className="min-h-100 d-flex-h-middle width-90pr tab-align-between">
                                <h1 className="heading-1 text-center mb-50">Create New Design</h1>
                                <div className="d-block-md mb-50">
                                    <img src="images/pana2.png" loading="lazy" sizes="(max-width: 479px) 70vw, (max-width: 767px) 69vw, 100vw" srcSet="images/pana2-p-500.png 500w, images/pana2.png 681w" alt="" className="img-w-80" />
                                </div>
                                <div className="w-form">
                                    <form id="email-form" name="email-form" onSubmit={handleSubmit}>
                                        <div className="flex-v-center">
                                            <div className="text-block-5"><span className="text-span">Ex:</span> Create a sign up page</div>
                                            <div className="form-input">
                                                <input
                                                    className="input-no-border w-input"
                                                    maxLength={256}
                                                    name="prompt1"
                                                    data-name="Name"
                                                    placeholder="Enter instructions for your design"
                                                    type="text"
                                                    id="prompt1"
                                                    value={prompt}
                                                    onChange={(e) => setPrompt(e.target.value)}
                                                />
                                            </div>
                                            <button type="submit" className="btn-submit w-inline-block">
                                                <div>Create</div>
                                            </button>
                                        </div>
                                    </form>
                                    <div className="w-form-fail" style={{ display: error ? 'block' : 'none' }}>
                                        <div>{error && <p>{error}</p>}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="_w-50 pt-100 bg-gray px-1vw-2vw right-50">
                            <div className="min-h-100 d-flex-h-middle">
                                <img src="images/pana2.png" loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 991px) 372.71484375px, 38vw" srcSet="images/pana2-p-500.png 500w, images/pana2.png 681w" alt="" className="img-w-80" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export const getStaticProps = async () => {
    const markdownWithMetadata = fs.readFileSync("public/content/template.md").toString();
    const parsedMarkdown = matter(markdownWithMetadata);

    return {
        props: {
            data: parsedMarkdown.data
        }
    };
};

export default UserJourney2Layer3;
