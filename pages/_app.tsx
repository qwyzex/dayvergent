import "../styles/globals.sass";
import "../styles/components.sass";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import SettingsLayout from "../components/settings/SettingsLayout";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import useAppearance from "../hooks/settings/useAppearance";

function DayDev({ Component, pageProps, ...appProps }: AppProps) {
    const appearance = useAppearance();

    return (
        <MantineProvider
            theme={{
                colorScheme: appearance.theme === "dark" ? "dark" : "light",
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
                    dark: [
                        "#cccccc",
                        "#bbbbbb",
                        "#aaa9a9",
                        "#a3a3a3",
                        "#747474",
                        "#2f2f2f",
                        "#2b2b2b",
                        "#191919",
                        "#141415",
                        "#1e1f1e",
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
