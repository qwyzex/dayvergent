export default function Appearance() {
    return (
        <div>
            <h1>Appearance</h1>
            <button
                onClick={() => {
                    let t = localStorage.getItem("theme");

                    if (t === "dark") {
                        localStorage.setItem("theme", "light");
                    } else {
                        localStorage.setItem("theme", "dark");
                    }
                }}
            >
                THEME
            </button>
        </div>
    );
}
