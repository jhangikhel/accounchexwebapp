import React from 'react';
import CenteredTabs from './../Common/Tabs';
import Head from 'next/head';

const Home = () => {

    return (
        <div>
            <Head>
                <title> Welcome to Provider Atlas 1</title>
                <meta name="description" content='Provider Atlas'></meta>
            </Head>
            <CenteredTabs></CenteredTabs>
        </div>
    );
};

export default Home;