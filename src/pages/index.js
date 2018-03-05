import React from "react";
//import Logo from "./logo.jpg";
import Helmet from 'react-helmet';

export default () =>
    <div style={{ margin: '0 auto 3rem auto', maxWidth: 1000 }}>
        <Helmet>
            <title>XT Weekend Read</title>
            <meta charSet="utf-8" />
            <link rel="canonical" href="https://weekendread-xt.firebaseapp.com/" />
        </Helmet>
        <header>

                <h1 style={{ borderBottom: '0'}}>Weekend Read</h1>

        </header>
        <hr/>
        <ul>
            <li>
                <h3>
                    webpack 4: mode and optimization.
                <br />
                    <a href="https://medium.com/webpack/webpack-4-mode-and-optimization-5423a6bc597a" style={{ fontSize: '14px' }}>https://medium.com/webpack/webpack-4-mode-and-optimization-5423a6bc597a</a>
                </h3>
                <div style={{ textAlign: 'right' }}>
                    <code>
                        <em>
                            JavaScript, Webpack, Webpack-optimization
                        </em>
                    </code>
                </div>
            </li>
            <hr/>
            <li>
                <h3>
                    Front-End Performance Checklist 2018
                <br />
                    <a href="https://www.smashingmagazine.com/2018/01/front-end-performance-checklist-2018-pdf-pages/" style={{ fontSize: '14px' }}>https://www.smashingmagazine.com/2018/01/front-end-performance-checklist-2018-pdf-pages/</a>
                </h3>
                <div style={{ textAlign: 'right' }}>
                    <code>
                        <em>
                            SiteSpeed, Performance
                        </em>
                    </code>
                </div>
            </li>
            <hr/>
            <li>
                <h3>
                    Google Speed Scorecard Tool (Check Potential Revenue impact Calculator)
                <br />
                    <a href="https://www.thinkwithgoogle.com/feature/mobile/" style={{ fontSize: '14px' }}>https://www.thinkwithgoogle.com/feature/mobile/</a>
                </h3>
                <div style={{ textAlign: 'right' }}>
                    <code>
                        <em>
                            SiteSpeed, Performance, Lighthouse
                        </em>
                    </code>
                </div>
            </li>
            <hr/>
            <li>
                <h3>
                How To Think About Speed Tools
                <br />
                    <a href="https://developers.google.com/web/fundamentals/performance/speed-tools/" style={{ fontSize: '14px' }}>https://developers.google.com/web/fundamentals/performance/speed-tools/</a>
                </h3>
                <div style={{ textAlign: 'right' }}>
                    <code>
                        <em>
                            SiteSpeed, Performance, Tools
                        </em>
                    </code>
                </div>
            </li>
            <hr/>
            <li>
                <h3>
                Everything you need to know about CSS Variables
                <br />
                    <a href="https://medium.freecodecamp.org/everything-you-need-to-know-about-css-variables-c74d922ea855" style={{ fontSize: '14px' }}>https://medium.freecodecamp.org/everything-you-need-to-know-about-css-variables-c74d922ea855</a>
                </h3>
                <div style={{ textAlign: 'right' }}>
                    <code>
                        <em>
                            CSS, CSS Variables
                        </em>
                    </code>
                </div>
            </li>
            <hr/>
            <li>
                <h3>
                Front-End Tooling Survey 2018
                <br />
                    <a href="https://medium.freecodecamp.org/launching-the-front-end-tooling-survey-2018-927bf975fdf0" style={{ fontSize: '14px' }}>https://medium.freecodecamp.org/launching-the-front-end-tooling-survey-2018-927bf975fdf0</a>
                </h3>
                <div style={{ textAlign: 'right' }}>
                    <code>
                        <em>
                            Front-end Tools, Survey
                        </em>
                    </code>
                </div>
            </li>
            <hr/>
        </ul>
    </div>