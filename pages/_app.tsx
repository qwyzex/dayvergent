import "../styles/globals.sass";
import "../styles/components.sass";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import SettingsLayout from "../components/settings/SettingsLayout";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";

function DayDev({ Component, pageProps, ...appProps }: AppProps) {
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
