import { CurrencyArray } from "../../../App";

export type SelectProps = {
    currencyArray: CurrencyArray[],
    selected: string,
    setSelected: (arg: string) => void
}