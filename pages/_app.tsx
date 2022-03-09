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
import useAppearance from "../hooks/settings/useAppearance";
import { useEffect } from "react";

function DayDev({ Component, pageProps, ...appProps }: AppProps) {
    const appearance = useAppearance();
    return (
        <MantineProvider
            theme={{
                fontFamily: "Poppins",
                fontFamilyMonospace: "Fira Code",
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
                other: {
                    fontFamilySecondary: "Arial",
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
