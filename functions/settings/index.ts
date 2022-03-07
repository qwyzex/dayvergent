import changeTheme from "./appearance/changeTheme";
import changeFontSize from "./appearance/changeFontSize";
import changeSidebarAlignment from "./appearance/changeSidebarAlignment";
import changeFontFamily from "./appearance/changeFontFamily";

export default function settingsFunctionAppearance() {
    return {
        changeTheme,
        changeFontSize,
        changeSidebarAlignment,
        changeFontFamily,
    };
}
