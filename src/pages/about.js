import * as React from "react";
// react-helmetコンポーネントを利用する
import { Helmet } from "react-helmet";

const AboutPage = (props) => {
    return (
        <div>
            <Helmet>
                <title>My Gatsby Site</title>
                <meta name="description" content="My first gatsby website" />
            </Helmet>
            <p>こんにちは。ギャツビー</p>
        </div>
    );
};

export default AboutPage;