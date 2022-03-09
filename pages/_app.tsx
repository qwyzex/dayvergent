import "../styles/globals.sass";
import "../styles/components.sass";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import useRedirectUser from "../hooks/useRedirectUser";
import redirect from "../functions/redirect";
import Divider from "../components/Divider";
import Link from "next/link";
import Router from "next/router";
import SettingsLayout from "../components/settings/SettingsLayout";
import { MantineProvider, MantineThemeOverride } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";

function DayDev({ Component, pageProps, ...appProps }: AppProps) {
    return (
        <MantineProvider
            theme={{
                primaryColor: "brand",
                colors: {
                    brand: [
                        "#16fb71",
                        "#16fb71",
                        "#16fb71",
                        "#16fb71",
                        "#16fb71",
                        "#16fb71",
                        "#16fb71",
                    ],
                },
            }}
        >
            <NotificationsProvider>
                <Layout>
                    <SettingsLayout>
                        <Component {...pageProps} />
                    </SettingsLayout>
                </Layout>
            </NotificationsProvider>
        </MantineProvider>
    );
}

export default DayDev;
