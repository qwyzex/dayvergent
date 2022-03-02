import "../styles/globals.sass";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import useRedirectUser from "../hooks/useRedirectUser";
import redirect from "../functions/redirect";
import Divider from "../components/Divider";
import Link from "next/link";
import Router from "next/router";
import SettingsHeader from "../components/SettingsHeader";

function DayDev({ Component, pageProps, ...appProps }: AppProps) {
    return (
        <>
            <Layout>
                <SettingsHeader>
                    <Component {...pageProps} />
                </SettingsHeader>
            </Layout>
        </>
    );
}

export default DayDev;
