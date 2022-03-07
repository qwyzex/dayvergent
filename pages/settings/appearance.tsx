import { Select, Slider } from "@mantine/core";
import Button from "../../components/Button";
import SettingsItem from "../../components/settings/SettingsItem";
import changeFontSize from "../../functions/settings/appearance/changeFontSize";
import useAppearance from "../../hooks/settings/useAppearance";

export default function Appearance() {
    const _f = useAppearance();
    const fontSizeSliderMarks = [
        { value: 0, label: "XS" },
        { value: 25, label: "S" },
        { value: 50, label: "M" },
        { value: 75, label: "L" },
        { value: 100, label: "XL" },
    ];

    return (
        <div>
            <SettingsItem title="Application Theme" bigChild>
                <Button
                    active={_f.theme === "light" && true}
                    onClick={() => _f.function.changeTheme("light")}
                >
                    LIGHT
                </Button>
                <Button
                    active={_f.theme === "dark" && true}
                    // disabled
                    onClick={() => _f.function.changeTheme("dark")}
                >
                    DARK
                </Button>
            </SettingsItem>
            <SettingsItem
                title="Font Size"
                description="Change the global app font size. Medium (M) is recommended"
                bigChild
            >
                <Slider
                    label={
                        _f.fontSize === 0
                            ? "9px"
                            : _f.fontSize === 25
                            ? "12px"
                            : _f.fontSize === 50
                            ? "15px"
                            : _f.fontSize === 75
                            ? "18px"
                            : _f.fontSize === 100 && "21px"
                    }
                    step={25}
                    marks={fontSizeSliderMarks}
                    value={_f.fontSize}
                    styles={{
                        root: {
                            cursor: "e-resize",
                        },
                        label: {
                            backgroundColor: "var(--back-a)",
                            boxShadow: "0 3px 5px #20202030",
                            color: "var(--acc) !important",
                            fontWeight: 600,
                        },
                    }}
                    onChange={(e) => {
                        changeFontSize(e);
                    }}
                />
            </SettingsItem>
            <SettingsItem
                title="Font Family"
                description="Change non-monospace font family for the app"
            >
                <Select
                    data={[
                        {
                            value: "Poppins",
                            label: "Poppins",
                        },
                        {
                            value: "Times New Roman",
                            label: "Times New Roman",
                        },
                    ]}
                    value={_f.fontFamily}
                    onChange={(e: any) => _f.function.changeFontFamily(e)}
                    styles={{
                        input: {
                            backgroundColor: "var(--back-a)",
                            // color: "var(--acc)",
                            fontWeight: "600",
                        },
                        root: {
                            backgroundColor: "var(--back-a)",
                        },
                        selected: {
                            color: "#ffffff",
                            fontWeight: "bold",
                        },
                    }}
                />
            </SettingsItem>
            <SettingsItem
                title="Sidebar Alignment"
                description="Sidebar Position Option. Left is default"
            >
                <Button
                    active={_f.sidebarAlignment === "left" && true}
                    onClick={() => _f.function.changeSidebarAlignment("left")}
                >
                    LEFT
                </Button>
                <Button
                    active={_f.sidebarAlignment === "right" && true}
                    onClick={() => _f.function.changeSidebarAlignment("right")}
                >
                    RIGHT
                </Button>
            </SettingsItem>
        </div>
    );
}
