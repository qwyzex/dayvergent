import settingsFunctionAppearance from "../../../functions/settings";
import useFontSize from "./useFontSize";
import useLocalFont from "./useLocalFont";
import useLocalTheme from "./useLocalTheme";
import useSidebarAlignment from "./useSidebarAlignment";

export default function useAppearance() {
    const theme = useLocalTheme();
    const fontFamily = useLocalFont();
    const fontSize = useFontSize();
    const sidebarAlignment = useSidebarAlignment();

    const _function = settingsFunctionAppearance();

    return {
        theme,
        fontFamily,
        fontSize,
        sidebarAlignment,
        function: _function,
    };
}
