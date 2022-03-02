import Router, { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function useCurrentRoute() {
    const l = useRouter();

    return l.pathname;
}
