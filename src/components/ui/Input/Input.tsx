import React from "react";

import { InputProps } from "./InputTypes";

import styles from './Input.module.scss'

export const Input: React.FC<InputProps> = ({ amount, setAmount }) => {
    return (
        <input
            type="number"
            className={styles['input']}
            value={amount || ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmount(+e.target.value)}
        />
    );
};
