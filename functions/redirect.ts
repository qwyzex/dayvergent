import Router from "next/router";

export default function redirect(path: string) {
    Router.replace(path);
}
