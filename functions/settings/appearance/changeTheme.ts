export default function changeTheme(theme: "light" | "dark") {
    localStorage.setItem("theme", theme);
}
