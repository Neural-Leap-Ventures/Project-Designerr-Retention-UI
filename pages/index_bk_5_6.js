import Head from 'next/head'
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';

const UserJourney2Layer1 = ({ data }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State to track password visibility

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                if (data.error) {
                    setError(data.error);
                } else {
                    throw new Error('Failed to log in');
                }
                return;
            }


            const tokenObject = data.find(obj => obj.token);
            const userIdObject = data.find(obj => obj['user id']);

            if (tokenObject && tokenObject.token && userIdObject && userIdObject['user id']) {
                // Save token and user ID to localStorage
                localStorage.setItem('token', tokenObject.token);
                localStorage.setItem('user_id', userIdObject['user id'][0]); // Assuming user ID is the first item in the array

                // Redirect to the dashboard
                router.push('/dashboard');
            } else {
                throw new Error('Invalid login response');
            }
        } catch (error) {
            console.error(error);
            setError(error.message);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    /*google auth*/
    const handleGoogleSignIn = async () => {
        await signIn('google');
    };

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
                            <form id="email-form" name="email-form" onSubmit={handleSubmit}>
                                <div className="form-label-flex"><label htmlFor="email" className="field-label">Email address</label></div><input className="text-field w-input" maxLength={256} name="email" data-name="Email" placeholder="Enter your email address" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                <div className="form-label-flex"><label htmlFor="email-2" className="field-label">Password</label>
                                <a href="#" className="password-hide w-inline-block" onClick={togglePasswordVisibility}>
                        <img src="images/pw-hide-icon.png" loading="lazy" alt="" />
                        <div className="text-block">{showPassword ? 'Hide' : 'Show'}</div>
                    </a>
                                </div><input className="text-field w-input" maxLength={256} name="Password" data-name="Password" placeholder="Enter your password" type={showPassword ? 'text' : 'password'} id="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                
                                <input type="submit" data-wait="Please wait..." className="btn-sign-up w-button" defaultValue="Sign In" />

                            </form>


                            <div className="w-form-done">
                                <div>Thank you! Your submission has been received!</div>
                            </div>
                            <div className="w-form-fail" style={{ display: error ? 'block' : 'none' }}>
                                <div>{error && <p>{error}</p>}</div>
                            </div>
                        </div>
                        <div className="form-separator my-40">
                            <div className="div-block-2" />
                            <div>OR</div>
                            <div className="div-block-2" />
                        </div>
                        <div className="social-media-sign-up-wrapper">

                            <a href="#" onClick={handleGoogleSignIn} className="btn-social-media-sign-up w-inline-block"><img src="images/google-ico.png" loading="lazy" alt="" />
                                <div>Continue with Google</div>
                            </a>
                            <a href="#" className="btn-social-media-sign-up w-inline-block"><img src="images/fb-ico.png" loading="lazy" alt="" />
                                <div>Continue with Facebook</div>
                            </a>
                        </div>
                        <div className="mt-48">
                            <div className="text-block-2">Don’t have an account? &nbsp;<Link href="/sign-up" className="link">Sign Up</Link>
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
