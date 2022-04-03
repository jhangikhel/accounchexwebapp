import Master from "../Common/Master"
import CustomTheme from './../Common/CustomTheme';

function MyApp({ Component, pageProps }: { Component: any, pageProps: any }) {
    return (
        <CustomTheme>
            <Master>
                <Component {...pageProps} />
            </Master></CustomTheme>)
}

export default MyApp