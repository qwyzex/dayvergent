import SVG from "./svg";
import styles from "../styles/MobilePlatformWarning.module.sass";
import Divider from "./Divider";
import A from "./A";

export default function MobilePlatformWarning() {
    return (
        <section className={styles.container}>
            <header>
                <div>
                    <SVG.Blueprint />
                    <SVG.Worker />
                </div>
                <div>
                    <h1>UNDER CONSTRUCTION!</h1>
                </div>
            </header>
            <Divider fullwidth both />
            <article>
                <p>
                    My system has determine that you are browsing using a mobile platform.
                </p>
                <p>
                    Unfortunately, DayVergent still isn&apos;t compatible with Mobile
                    Devices. There&apos;s still some bugs and not yet responsive with
                    small screen.
                </p>
            </article>
            <footer>
                <h4>
                    VISIT{" "}
                    <A href="https://github.com/qwyzex/dayvergent" newtab>
                        THE GITHUB REPO
                    </A>{" "}
                    TO GET UPDATE!
                </h4>
                <small>Thank you for understanding.</small>
            </footer>
        </section>
    );
}
