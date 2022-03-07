export default function changeSidebarAlignment(position: string | "left" | "right") {
    localStorage.setItem("sidebarPosition", position);
}
