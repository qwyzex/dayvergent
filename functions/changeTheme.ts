export default function changeTheme() {
    let theme = localStorage.getItem("theme");

    if (theme) {
        if (theme === "light") {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    }
}
