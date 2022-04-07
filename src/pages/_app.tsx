import Master from "../Common/Master"
import CustomTheme from '../Common/CustomTheme';
import './style.css';
function MyApp({ Component, pageProps }: { Component: any, pageProps: any }) {
    return (

        <Master>
            <CustomTheme>
                <Component {...pageProps} />
            </CustomTheme>
        </Master>)
}

export default MyApp