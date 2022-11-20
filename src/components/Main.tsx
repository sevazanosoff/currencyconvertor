import React from "react";

import { MainProps } from "../types/MainTypes";
import { Select } from "./ui/Select/Select";
import { Input } from "./ui/Input/Input";

import styles from '../styles/Main.module.scss'


export const Main: React.FC<MainProps> = ({ currencyArray }) => {
    const [amountFrom, setAmountFrom] = React.useState<number | string>('')
    const [amountTo, setAmountTo] = React.useState<number | string>('')
    const [selectedFrom, setSelectedFrom] = React.useState('USD')
    const [selectedTo, setSelectedTo] = React.useState('EUR')

    const changeAmountFrom = (selectedTo: string) => {
        const priceFrom = currencyArray.find(cur => cur.cc === selectedTo)?.rate
        const priceTo = currencyArray.find(cur => cur.cc === selectedFrom)?.rate
        const result = (priceFrom && priceTo) && (priceFrom / priceTo * +amountTo)
        selectedFrom === 'UAH' ? setAmountFrom(Number(result?.toFixed(0))) : setAmountFrom(Number(result?.toFixed(3)))
    }

    const changeAmountTo = (selectedFrom: string) => {
        const priceFrom = currencyArray.find(cur => cur.cc === selectedFrom)?.rate
        const priceTo = currencyArray.find(cur => cur.cc === selectedTo)?.rate
        const result = (priceFrom && priceTo) && (priceFrom / priceTo * +amountFrom)
        selectedTo === 'UAH' ? setAmountTo(Number(result?.toFixed(0))) : setAmountTo(Number(result?.toFixed(3)))
    }

    React.useEffect(() => {
        changeAmountTo(selectedFrom)
    }, [selectedTo, amountFrom])

    React.useEffect(() => {
        changeAmountFrom(selectedTo)
    }, [selectedFrom, amountTo])


    return (
        <section className={styles['main']}>
            <div className={styles['main__wrapper']}>
                <div className={styles['main__block']}>
                    <Select currencyArray={currencyArray} selected={selectedFrom} setSelected={setSelectedFrom} />
                    <Input amount={amountFrom} setAmount={setAmountFrom} />
                </div>
                <div className={styles['main__block']}>
                    <Select currencyArray={currencyArray} selected={selectedTo} setSelected={setSelectedTo} />
                    <Input amount={amountTo} setAmount={setAmountTo} />
                </div>
            </div>
        </section >
    );
};
