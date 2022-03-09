import { useState } from "react";

export default function useError() {
    const [current, setCurrent] = useState("");

    return { current, setCurrent };
}
