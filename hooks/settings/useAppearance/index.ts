import settingsFunctionAppearance from "../../../functions/settings";
import useAppearanceFunction from "./useAppearanceFunction";
import useFontSize from "./useFontSize";
import useLocalFont from "./useLocalFont";
import useLocalTheme from "./useLocalTheme";
import useSidebarAlignment from "./useSidebarAlignment";

export default function useAppearance() {
    const { theme } = useLocalTheme();
    const { fontFamily } = useLocalFont();
    const { fontSize } = useFontSize();
    const { position } = useSidebarAlignment();

    const _function = settingsFunctionAppearance();
    const hooksFunction = useAppearanceFunction();

    return {
        theme,
        fontFamily,
        fontSize,
        sidebarAlignment: position,
        function: _function,
        functionHooks: hooksFunction,
    };
}
