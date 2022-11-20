import React from "react";

import { SelectProps } from "./SelectTypes";

import styles from './Select.module.scss'

export const Select: React.FC<SelectProps> = ({ currencyArray, selected, setSelected }) => {
    return (
        <select
            value={`${selected} - ${currencyArray.find(cur => cur.cc === selected)?.txt}`}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelected(e.target.value.slice(0, 3))}
            className={styles['select']}
        >
            {currencyArray.map(currency => (
                <option key={currency.rate} className={styles['select__option']}>
                    {currency.cc} - {currency.txt}
                </option>
            ))}
        </select>
    )
};

