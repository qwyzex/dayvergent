import useCurrentRoute from "../hooks/useCurrentRoute";
import Link from "next/link";
import redirect from "../functions/redirect";
import TabButton from "./TabButton";
import AnchorButton from "./AnchorButton";
import Divider from "./Divider";

export default function SettingsHeader({ children }: any) {
    const route = useCurrentRoute();

    return (
        <>
            {route.match(/^\/settings.*/g) && (
                <section className="settingsGlobalHeader">
                    <h5>
                        <AnchorButton to="/dashboard" text="<< Dashboard" />
                    </h5>
                    <div>
                        <TabButton type="redirect" path={"/settings"} text="General" />
                        <TabButton
                            type="redirect"
                            path={"/settings/account"}
                            text="Account"
                        />
                        <TabButton
                            type="redirect"
                            path={"/settings/appearance"}
                            text="Appearance"
                        />
                        <TabButton
                            type="redirect"
                            path={"/settings/privacy"}
                            text="Privacy"
                        />
                    </div>
                    <Divider bottom fullwidth />
                </section>
            )}
            {children}
        </>
    );
}
