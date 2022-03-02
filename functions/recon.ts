interface _ {
    r: string;
    e: string;
}

export default function recon(expression: _["e"], route: _["r"]) {
    let r = new RegExp(`^${expression}`, "g");

    return route.match(r);
}
