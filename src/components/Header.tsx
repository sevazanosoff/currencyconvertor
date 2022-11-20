import React from "react";

import { HeaderProps } from "../types/HeaderTypes";

import styles from '../styles/Header.module.scss'


export const Header: React.FC<HeaderProps> = ({ currencyArray }) => {
    return (
        <header className={styles['header']}>
            <div className={styles['header__wrapper']}>
                <ul className={styles['header__list']}>
                    {currencyArray.slice(0, currencyArray.length - 1).map((cur, i) => (
                        <li key={i} className={styles['header__list-item']}> 1 {cur.cc} = {cur.rate.toFixed(2)} UAH </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};
