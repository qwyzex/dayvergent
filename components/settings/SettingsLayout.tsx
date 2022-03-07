import useCurrentRoute from "../../hooks/useCurrentRoute";
import Link from "next/link";
import redirect from "../../functions/redirect";
import TabButton from "../TabButton";
import AnchorButton from "../AnchorButton";
import Divider from "../Divider";
import SVG from "../svg";
import { useViewportSize } from "@mantine/hooks";
import { useEffect } from "react";
import Head from "next/head";

export default function SettingsLayout({ children }: any) {
    const route = useCurrentRoute();
    const window = useViewportSize();

    useEffect(() => {
        console.log(window);
    }, [window]);

    const title = () => {
        switch (route) {
            case "/settings":
                return "General Settings";
            case "/settings/account":
                return "Account Settings";
            case "/settings/appearance":
                return "Appearance Settings";
            case "/settings/privacy":
                return "Privacy Settings";
        }
    };

    return (
        <>
            {route.match(/^\/settings.*/g) && (
                <>
                    <Head>
                        <title>{title()}</title>
                    </Head>
                    <section className="settingsGlobalHeader">
                        <h5>
                            <AnchorButton to="/dashboard" text="<< Dashboard" />
                        </h5>
                        <div>
                            <TabButton
                                type="redirect"
                                path={"/settings"}
                                text={window.width < 600 ? <SVG.Gear /> : "General"}
                            />
                            <TabButton
                                type="redirect"
                                path={"/settings/account"}
                                text={window.width < 600 ? <SVG.Account /> : "Account"}
                            />
                            <TabButton
                                type="redirect"
                                path={"/settings/appearance"}
                                text={
                                    window.width < 600 ? <SVG.PaintBrush /> : "Appearance"
                                }
                            />
                            <TabButton
                                type="redirect"
                                path={"/settings/privacy"}
                                text={window.width < 600 ? <SVG.Shield /> : "Privacy"}
                            />
                        </div>
                        <Divider bottom fullwidth />
                        <h1>
                            {route === "/settings" ? (
                                <SVG.Gear />
                            ) : route === "/settings/account" ? (
                                <SVG.Account />
                            ) : route === "/settings/appearance" ? (
                                <SVG.PaintBrush />
                            ) : (
                                route === "/settings/privacy" && <SVG.Shield />
                            )}{" "}
                            {title()}
                        </h1>
                    </section>
                </>
            )}
            <section
                style={{
                    maxWidth: route.match(/^\/settings.*/g)
                        ? "calc(95vw - 6rem)"
                        : "auto",
                    width: route.match(/^\/settings.*/g) ? "40rem" : "auto",
                }}
            >
                {children}
            </section>
        </>
    );
}
