import useFontSize from "./useFontSize";
import useLocalFont from "./useLocalFont";
import useLocalTheme from "./useLocalTheme";
import useSidebarAlignment from "./useSidebarAlignment";

export default function useAppearanceFunction() {
    const theme = useLocalTheme();
    const fontSize = useFontSize();
    const fontFamily = useLocalFont();
    const sidebar = useSidebarAlignment();

    const changeTheme = (themeColor: string | "light" | "dark") => {
        theme.setTheme(themeColor);
        localStorage.setItem("theme", themeColor);
    };

    const changeFontSize = (size: number) => {
        fontSize.setFontSize(size);
        localStorage.setItem("fontSize", size.toString());
    };

    const changeFontFamily = (family: string) => {
        fontFamily.setFontFamily(family);
        localStorage.setItem("fontFamily", family);
    };

    const changeSidebarAlignment = (side: string | "left" | "right") => {
        sidebar.setPosition(side);
        localStorage.setItem("sidebarAlignment", side);
    };

    return {
        changeTheme,
        changeFontFamily,
        changeFontSize,
        changeSidebarAlignment,
    };
}
