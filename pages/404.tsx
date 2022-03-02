import Head from "next/head";

export default function Error404() {
    return (
        <>
            <Head>
                <title>404 - Page Not Found</title>
                <link
                    rel="shortcut icon"
                    href="/images/logo-dark.svg"
                    type="image/x-icon"
                />
            </Head>
            <h1>404 - Page Not Found</h1>
        </>
    );
}
