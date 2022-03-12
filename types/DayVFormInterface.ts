import { Dispatch, SetStateAction } from "react";

export default interface DayVFormInterface {
    setDraft?: Dispatch<SetStateAction<boolean>>;
}
